//初始化页面
zen.page = {
    animate: "",
    init: function() {
        console.time("load");
        delete Zen.current;
        var page = zen.url.getHash() || "index";
        console.log("###Zen enter : " + page);
        zen.animate.enter(this.animate);
        this.load_view();
        this.load_module();
        this.load_script();
        console.timeEnd("load");
    },
    getModule: function(type) {
        var module = "";
        var hash = zen.url.getHash() || "index";
        var name = 'Zen.views["' + hash + "." + type + '"]';
        var name_index = 'Zen.views["' + hash + "/index." + type + '"]';
        if (eval(name)) {
            module = zen.parse(eval(name));
            console.log("Zen module : " + name);
            return module;
        }
        if (eval(name_index)) {
            module = zen.parse(eval(name_index));
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
            view += js;
        }
        if (view) {
            $(".zen-container").removeClass("mask-on nav-top nav-right");
            $(".zen-cur").html(view);
        } else {
            window.location.hash = "index";
        }
        console.timeEnd("load_view");
    },
    load_module: function() {
        console.time("load_module");
        zen.directive.init();
        zen.resize();
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
                    script = zen.content(script_src);
                    item.after(script);
                    item.remove();
                }
            }
        }
    },
    delay: function(fn) {
        if ($(".zen-page").attr("data-ready") == "ready") {
            fn && fn();
            return;
        } else {
            console.log("Zen delay : 5ms");
            setTimeout(function() {
                zen.page.delay(fn)
            }, 5)
        }
    },
    ready: function(service) {
        console.time("ready");
        //用于引导页面，并且便于获取调试信息
        var page = zen.url.getHash() || "index";
        //如果前面的zen-page沒有渲染好，需要等待
        this.delay(function() {
            service && service.init && service.init();
            zen.cur = service || page;
            console.log("***Zen ready : " + page);
        });
        console.timeEnd("ready");
    }
}
