zen.debug = {
    set: function() {
        var mode = "normal";
        if (status == "debug") {
            mode = "debug";
        }
        zen.store.sLocal("ZEN_DEBUG", mode);
        Zen.mode = mode;
    },
    clear: function() {
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
    },
    script: function() {
        //用于调试单页的script脚本(模块下的index.js)
        var href = "views/" + zen.url.getHash() + "/index.js";
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
        var clone = $('<script>').attr("type", "text/javascript");
        clone.attr("src", href);
        clone.attr("data-type", 'debug-script');
        head.append(clone);
    }
}
