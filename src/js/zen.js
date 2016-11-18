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
        this.load_view();
        this.load_module(app);
        this.load_script();
    },
    load_view: function() {
        var app = $("#app");
        var view = Zen.getView();
        app.html(view);
    },
    load_css: function() {
        var css = "";
        var page = $("#app .zen-page");
        var hash = Util.getHash() || "index";
        var cssname = "views." + this.pathname(hash) + "_css";
        css = this.parse(eval(cssname));
        page.prepend(css);
    },
    load_js: function() {
        var js = "";
        var page = $("#app .zen-page");
        var hash = Util.getHash() || "index";
        var jsname = "views." + this.pathname(hash) + "_js";
        js = this.parse(eval(jsname));
        page.append(js);
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
    },
    load_script: function(href) {
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
    ready: function(service) {
        //用于引导页面，并且便于获取调试信息
        var page = Util.getHash() || "index";
        console.log("Zen enter : " + page);
        service && service.init && service.init();
        delete Zen.current;
        Zen.current = service;
        console.log("Zen ready : " + page);
    }
}
