//道为万物之始
zen.dao = {
    init:function(){
      $(document).ready(function() {
          zen.dao.zen();
          zen.page.init();
          zen.fastclick();
          $(window).on('hashchange', function() {
              var name = zen.url.getHash() || "index";
              zen.page.init()
          });
      });
    },
    zen: function() {
        var container = $(".zen-container");
        this.isDebug = zen.store.gLocal("ZEN_DEBUG") || false;
        if (Zen.modules) {
            var modules = zen.parse(Zen.modules);
            var moudles_div = $("<div>").addClass("zen-modules");
            moudles_div.append(modules);
            container.append(moudles_div);
        }
        if (Zen.css) {
            var css = zen.parse(Zen.css);
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
}
