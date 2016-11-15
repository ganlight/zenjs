var Zen = {
    list: [],
    init: function() {
        var head = $('head');
        head.find("*[data-type='page-script']").remove();
        var script = $('<script>').attr("type","text/javascript");
        var page = $('*[v-page]').eq(0);
        var page_script = page.attr("v-page");
        if (page.length > 0 && page_script) {
            script.attr("src",page_script);
            script.attr("data-type",'page-script');
            head.append(script);
            this.load(page);
        }
    },
    get: function(name) {
        var zen;
        var url = "zen/" + name + ".html";
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                zen = data;
            },
            error: function(e) {}
        });
        return zen;
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
    }
}
