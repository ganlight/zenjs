zen.debug = function(status) {
    var mode = "normal";
    if (status == "debug") {
        mode = "debug";
    }
    zen.store.sLocal("ZEN_DEBUG", mode);
    Zen.mode = mode;
}
