var Zen = {
    list: [],
    init: function() {
        if (Zen.modules) {
            var modules = Zen.parse(Zen.modules);
            var moudles_div = $("<div>").addClass("zen-modules");
            moudles_div.append(modules);
            $("body").prepend(moudles_div);
        }
        if (Zen.css) {
            var css = Zen.parse(Zen.css);
            $("title").after(css);
        }
        if (views.common_css) {
            var common_css = Zen.parse(views.common_css);
            $("head").append(common_css);
        }
        if (views.common_js) {
            var common_js = Zen.parse(views.common_js);
            $("head").append(common_js);
        }
    },
    load: function() {
        console.time("load");
        var page = Util.getHash() || "index";
        console.log("###Zen enter : " + page);
        this.load_view();
        this.load_module();
        this.load_script();
        console.timeEnd("load");
    },
    getModule: function(type) {
        var module = "";
        var hash = Util.getHash() || "index";
        var name = "views." + this.pathname(hash) + "_" + type;
        var name_index = "views." + this.pathname(hash) + "__index_" + type;
        if (eval(name)) {
            module = this.parse(eval(name));
            console.log("Zen module : " + name);
            return module;
        }
        if (eval(name_index)) {
            module = this.parse(eval(name_index));
            console.log("Zen module : " + name);
            return module;
        }
        return;
    },
    load_view: function() {
        console.time("load_view");
        var view = "",
            css, html, js;
        var page = $("#app");
        page.empty();
        css = this.getModule("css");
        html = this.getModule("html");
        js = this.getModule("js");
        if (css) {
            view += css;
        }
        if (html) {
            view += html;
        }
        if (js) {
            view += js;
        }
        if (view) {
            page.append(view);
        }
        console.timeEnd("load_view");
    },
    load_module: function() {
        console.time("load_module");
        var app = $("#app");
        app.find('*[v-zen]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var name = $(this).attr('v-zen');
            if (!name) return;
            var zen = $(".zen-modules .c-" + name).clone();
            _this.html(zen);
        });
        $('*[v-insert]').each(function() {
            //对包含v-insert的加载html
            var _this = $(this);
            var _insert = $(this).attr('v-insert');
            if (!_insert) return;
            var url = _insert + ".html";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    _this.html(data);
                }
            });
        });
        $('*[v-slot]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var _slot = $(this).attr('v-slot');
            if (!_slot) return;
            _this.html($("#" + _slot));
        });
        $('*[v-send]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms,fn
            var _send = $(this).attr('v-send');
            if (!_send) return;
            var _para = _send.split(',')
            Message.send(_para[0], _para[1], _para[2]);
        });
        $('*[v-select]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms
            var _select = $(this).attr('v-select');
            if (!_select) return;
            Message.select('', _select);
        });
        $('*[v-toggle]').click(function() {
            //对包含v-toggle相关的控件，直接进行绑定操作
            var _toggle = $(this).attr('v-toggle');
            if (!_toggle) return;
            $("#" + _toggle).toggle();
            $(this).toggleClass("selected");
        });
        $('*[v-link]').click(function() {
            //对包含v-link相关的地址，直接绑定事件跳转
            var _link = $(this).attr('v-link');
            if (!_link) return;
            window.location.href = _link;
        });
        $(".zen-page").attr("data-ready", "ready");
        console.timeEnd("load_module");
    },
    load_script: function(href) {
        //用于加载外部引用的script脚本
        var head = $('head');
        head.find("*[data-type='page-script']").remove();
        var items = $('*[v-script]');
        for (var i = 0; i < items.length; i++) {
            var item = items.eq(i);
            var clone = $('<script>').attr("type", "text/javascript");
            if (item && item.attr("v-script")) {
                var script_src = item.attr("v-script");
                if (script_src.indexOf("views") == -1) {
                    clone.attr("src", script_src);
                    clone.attr("data-type", 'page-script');
                    head.append(clone);
                    item.remove();
                } else {
                    var script_name = this.pathname(script_src).replace("views__", "views.");
                    script = this.parse(eval(script_name));
                    var app = $("#app");
                    app.append(script);
                    item.remove();
                }
            }
        }
    },
    parse: function(fn) {
        //这里面主要将html和js代码转化成js函数，通过这样的方式，可以获取里面的内容
        //如果是多行文本采用下面的方式
        // return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
        if (typeof fn === 'function') {
            // console.log("Zen function : " + fn.name);
            var string = fn.toString();
            if (string.length > 20) {
                return string.slice(15, -3);
            }
        }
        return;
    },
    toCamel: function(name) {
        //例如foo-style-css 变为fooStyleCss
        var name = name.replace(/\-(\w)/g, function(all, letter) {　　　　　
            return letter.toUpperCase();　　　　
        });
        return name;
    },
    toName: function(name) {
        //例如fooStyleCss变为foo-style-css
        var name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
        return name;
    },
    pathname: function(path) {
        // var pathname = path.replace(".html", "").replace(/-/g, "_").replace(/\//g, ".");
        var pathname = path.replace(".js", "_js").replace(".html", "_html").replace(/-/g, "_").replace(/\//g, "__");
        return pathname;
    },
    delay: function(fn) {
        if ($(".zen-page").attr("data-ready") == "ready") {
            fn && fn();
            return;
        } else {
            console.log("Zen delay : 5ms");
            setTimeout(function() {
                Zen.delay(fn)
            }, 5)
        }
    },
    ready: function(service) {
        console.time("ready");
        //用于引导页面，并且便于获取调试信息
        var page = Util.getHash() || "index";
        //如果前面的zen-module沒有渲染好，需要等待
        this.delay(function() {
            service && service.init && service.init();
            delete Zen.current;
            Zen.current = service;
            console.log("***Zen ready : " + page);
        });
        console.timeEnd("ready");
    }
}
//此处在最后拼接，所以用zen.js放到最后拼接
PageService.init();
