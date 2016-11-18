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
    },
    load: function() {
        var app = $("#app");
        app.empty();
        this.load_css();
        this.load_html();
        this.load_module(app);
        this.load_script();
        this.load_js();
    },
    getModule: function(type) {
        var module = "";
        var hash = Util.getHash() || "index";
        var name = "views." + this.pathname(hash) + "_" + type;
        var name_index = "views." + this.pathname(hash) + "__index_" + type;
        if (eval(name)) {
            module = this.parse(eval(name));
            return module;
        }
        if (eval(name_index)) {
            module = this.parse(eval(name_index));
            return module;
        }
    },
    load_html: function() {
        var html = "";
        var page = $("#app");
        html = this.getModule("html");
        if (html) {
            page.append(html);
        }
    },
    load_css: function() {
        var css = "";
        var page = $("#app");
        css = this.getModule("css");
        if (css) {
            page.append(css);
        }
    },
    load_js: function() {
        var js = "";
        var page = $("#app");
        js = this.getModule("js");
        if (js) {
            page.append(js);
        }
    },
    load_module: function(target) {
        target.find('*[v-zen]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var name = $(this).attr('v-zen');
            if (!name) return;
            var zen = $(".zen-modules .c-" + name).clone();
            _this.html(zen);
        });
        $(".zen-page").attr("data-ready", "ready");
    },
    load_script: function(href) {
        //用于加载外部引用的script脚本
        var head = $('head');
        head.find("*[data-type='page-script']").remove();
        //默认只加载一个脚本
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
                    continue;
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
    getView: function() {
        var view = "";
        var hash = Util.getHash() || "index";
        var viewname = "views." + this.pathname(hash) + "_html";
        view = this.parse(eval(viewname));
        return view;
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
        console.log("Zen path : " + path);
        // var pathname = path.replace(".html", "").replace(/-/g, "_").replace(/\//g, ".");
        var pathname = path.replace(".js", "_js").replace(".html", "_html").replace(/-/g, "_").replace(/\//g, "__");
        return pathname;
    },
    delay: function(fn) {
        if ($(".zen-page").attr("data-ready") == "ready") {
            fn && fn();
            return;
        } else {
            console.log("Zen delay : 100ms");
            setTimeout(function() {
                Zen.delay(fn)
            }, 100)
        }
    },
    ready: function(service) {
        //用于引导页面，并且便于获取调试信息
        var page = Util.getHash() || "index";
        console.log("Zen enter : " + page);
        //如果前面的zen-module沒有渲染好，需要等待
        this.delay(function() {
            service && service.init && service.init();
            delete Zen.current;
            Zen.current = service;
            console.log("Zen ready : " + page);
        });
    }
}
