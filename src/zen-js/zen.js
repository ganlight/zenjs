var Zen = {
    mode: "normal",
    boot: function() {
        // this.support();
        $(document).ready(function() {
            Zen.init();
            Zen.load();
            Zen.bind();
        });
    },
    bind: function() {
        if (FastClick) {
            FastClick.attach(document.body);
        }
        $(window).on('hashchange', function() {
            var name = URL.getHash() || "index";
            Zen.load()
        });
    },
    debug: function(status) {
        var mode = "normal";
        if (status == "debug") {
            mode = "debug";
        }
        Store.sLocal("ZEN_DEBUG", mode);
        this.isDebug = mode;
    },
    init: function() {
        this.isDebug = Store.gLocal("ZEN_DEBUG") || false;
        if (Zen.modules) {
            var modules = Zen.parse(Zen.modules);
            var moudles_div = $("<div>").addClass("zen-modules");
            moudles_div.append(modules);
            $(".zen-container").append(moudles_div);
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
        //创建一个zen-stack(zen-cur)
        var zen_cur = $('<div>').addClass("zen-stack zen-cur");
        $(".zen-container").append(zen_cur);
    },
    load: function() {
        console.time("load");
        delete Zen.current;
        var page = URL.getHash() || "index";
        console.log("###Zen enter : " + page);
        this.animate("fadeIn");
        this.load_view();
        this.load_module();
        this.load_script();
        console.timeEnd("load");
    },
    animate: function(ani) {
        if (!ani) {
            return;
        }
        $('.zen-cur').addClass(ani + ' animated')
            .one(
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    $(this).removeClass(ani + ' animated');
                }
            );
    },
    getModule: function(type) {
        var module = "";
        var hash = URL.getHash() || "index";
        var name = "views." + URL.pathname(hash) + "_" + type;
        var name_index = "views." + URL.pathname(hash) + "__index_" + type;
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
            if (this.isDebug == "debug") {
                this.debug_script();
            } else {
                view += js;
                this.debug_clear();
            }
        }
        if (view) {
            $(".zen-cur").html(view);
        }
        console.timeEnd("load_view");
    },
    load_module: function() {
        console.time("load_module");
        var app = $(".zen-container");
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
                    var script_name = URL.pathname(script_src).replace("views__", "views.");
                    script = this.parse(eval(script_name));
                    item.after(script);
                    item.remove();
                }
            }
        }
    },
    debug_clear: function() {
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
    },
    debug_script: function() {
        //用于调试单页的script脚本(模块下的index.js)
        var href = "views/" + URL.getHash() + "/index.js";
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
        var clone = $('<script>').attr("type", "text/javascript");
        clone.attr("src", href);
        clone.attr("data-type", 'debug-script');
        head.append(clone);
    },
    parse: function(fn) {
        //这里面主要将html和js代码转化成js函数，通过这样的方式，可以获取里面的内容
        //如果是多行文本采用下面的方式
        // return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
        if (typeof fn === 'function') {
            var string = fn.toString();
            if (string.length > 20) {
                return string.slice(15, -3);
            }
        }
        return;
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
        var page = URL.getHash() || "index";
        //如果前面的zen-page沒有渲染好，需要等待
        this.delay(function() {
            service && service.init && service.init();
            Zen.current = service || page;
            console.log("***Zen ready : " + page);
        });
        console.timeEnd("ready");
    }
}
Zen.boot();
