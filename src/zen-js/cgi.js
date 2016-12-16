/*
系统全局相关
*/
//ENV 可设置为 DEV 和 PUB
zen.cgi = {
    //不同环境的配置，可设置为 DEV , PUB , TEST
    ENV: 'DEV',
    SET: {

    },
    TYPE: function() {
        var ajaxType = CGI.SET.TYPE[CGI.ENV] || "post";
        return ajaxType;
    },
    URL: function(module, name) {
        var suffix = "?t=" + new Date().getTime();
        if (CGI.ENV == "PUB") {
            suffix = ".php?t=" + new Date().getTime();
        }
        return CGI.SET.ROOT[CGI.ENV] + CGI.SET[module][name] + suffix;
    },
    ajax: function(url, data, success) {
        var type = CGI.TYPE();
        $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            data: data,
            success: function(json) {
                success(json);
            }
        });
    },
    ajaxModule: function(url, data, success) {
        var type = CGI.TYPE();
        $.ajax({
            url: url,
            type: type,
            async: false,
            dataType: 'json',
            data: data,
            success: function(json) {
                success(json);
            }
        });
    },
    getView: function(name) {
        var url = "views/" + name + ".html";
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                $(".zen-container").html(data);
                Zen.init();
            },
            error: function(e) {
                window.location.hash = "index";
                // CGI.getView("views/red");
            }
        });
    },
    getCommonPart: function(url, tag) {
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                $(tag).html(data);
            }
        });
    }
}
