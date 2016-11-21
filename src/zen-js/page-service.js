var PageService = {
    init: function() {
        // Util.resize();
        Util._date();
        this.ready();
    },
    ready: function() {
        $(document).ready(function() {
            if (FastClick) {
                FastClick.attach(document.body);
            }
            PageService.loadView();
        });
    },
    loadView: function() {
        Zen.init();
        Zen.load();
        $(window).on('hashchange', function() {
            var name = Util.getHash() || "index";
            Zen.load()
        });
    },
    hideNavMenu: function() {
        $('#nav-menu').hide();
    },
    setTitle: function(title) {
        $('.c-navmenu-banner .title').text(title);
    }
}
