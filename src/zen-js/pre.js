zen.pre = {
    support: function() {
        //用于加载其他cdn库，zepto必须先引入，只引入其他的need的选项
        var libs = {
            "zepto": {
                type: "script",
                import: "must",
                cdn: "<script src='//cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>"
            },
            "fastclick": {
                type: "script",
                import: "need",
                cdn: "<script src='//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js'></script>"
            },
            "showdown": {
                type: "script",
                import: "need",
                cdn: "<script src='//cdn.bootcss.com/showdown/1.5.0/showdown.min.js'></script>"
            },
            "font-awesome": {
                type: "style",
                import: "need",
                cdn: "<link href='//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>"
            },
            "animate": {
                type: "style",
                import: "need",
                cdn: "<link href='//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' rel='stylesheet'>"
            }
        }
        for (var lib in libs) {
            if (libs[lib].import == "need") {
                var ele = $(libs[lib]["cdn"]);
                if (libs[lib].type == "style") {
                    $("title").after(ele);
                } else {
                    $("head").append(ele);
                }
            }
        }
    },
}
