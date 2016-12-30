zen.init = function(fn) {
    $(document).ready(function() {
        zen.dao();
        zen.page.init();
        zen.fastclick();
        $(window).on('hashchange', function() {
            var name = zen.url.getHash() || "index";
            zen.page.init()
        });
        //用来执行其他
        fn && fn();
    });
}
