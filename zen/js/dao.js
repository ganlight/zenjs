//道为万物之始
zen.dao = function() {
    var container = $(".zen-container");
    if (Zen.views.zen_modules) {
        var modules = zen.parse(Zen.views.zen_modules);
        var moudles_div = $("<div>").addClass("zen-modules");
        moudles_div.append(modules);
        container.append(moudles_div);
    }
    if (Zen.views.zen_css) {
        var css = zen.parse(Zen.views.zen_css);
        $("title").after(css);
    }
    if (Zen.views.common_css) {
        var common_css = zen.parse(Zen.views.common_css);
        $("head").append(common_css);
    }
    if (Zen.views.common_js) {
        var common_js = zen.parse(Zen.views.common_js);
        $("head").append(common_js);
    }
    //创建一个zen-stack(zen-cur)
    var zen_cur = $('<div>').addClass("zen-stack zen-cur");
    container.append(zen_cur);
}
