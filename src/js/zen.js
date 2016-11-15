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
    ready: function(service) {
        //用于引导页面，并且便于获取调试信息
        service && service.init && service.init();
        delete Zen.current;
        Zen.current = service;
    }
}
