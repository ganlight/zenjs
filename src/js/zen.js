var Zen = {
    list: [],
    init: function() {
        var head = $('head');
        head.find("*[data-type='page-script']").remove();
        var script = $('<script>').attr("type", "text/javascript");
        var app = $("#app");
        this.load(app);
        //默认只加载一个脚本
        var ele_script = $('*[v-script]').eq(0);
        var page_script = ele_script.attr("v-script");
        if (ele_script.length > 0 && page_script) {
            script.attr("src", page_script);
            script.attr("data-type", 'page-script');
            head.append(script);
        }
    },
    load: function(target) {
        target.find('*[v-zen]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var name = $(this).attr('v-zen');
            if (!name) return;
            var zen = $(".zen-template .c-" + name).clone();
            _this.html(zen);
        });
    },
    parse: function(fn) {
        //这里面主要将html和js代码转化成js函数，通过这样的方式，可以获取里面的内容
        return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
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
        var pathname = path.replace(".html", "").replace("-", "_").replace(/\//g, ".");
        return pathname;
    },
    ready: function(service) {
        //用于引导页面，并且便于获取调试信息
        service && service.init && service.init();
        delete Zen.current;
        Zen.current = service;
    }
}
