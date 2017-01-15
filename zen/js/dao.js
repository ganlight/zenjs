//道为万物之始
zen.dao = function() {
    var container = $(".zen-container");

    //创建一个zen-stack(zen-cur)
    var zen_bg = $('<div>').addClass("zen-bg");
    var zen_modules = $("<div>").addClass("zen-modules");
    var zen_cur = $('<div>').addClass("zen-stack zen-cur clearfix");
    container.append(zen_bg);
    container.append(zen_modules);
    container.append(zen_cur);

    if (Zen.views.zen_modules) {
        var modules = zen.parse(Zen.views.zen_modules);
        zen_modules.append(modules);
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
}
