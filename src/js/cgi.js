/*
系统全局相关
*/
//ENV 可设置为 DEV 和 PUB
var CGI = {
    //不同环境的配置，可设置为 DEV , PUB , TEST
    ENV: 'DEV',
    SET: {
        PUBLIC: {
            COACH_TYPE: 'public/coach/types',
            COACH_LIST: 'public/coach/list',
            COACH_DETAIL: 'public/coach/detail',
            JOB_LIST: 'public/job/list',
            JOB_DETAIL: 'public/job/detail'
        },
        TYPE: {
            //用来设置不同环境的类型
            DEV: 'get',
            TEST: 'post',
            PUB: 'post'
        },
        ROOT: {
            //用来设置不同环境的API地址
            DEV: '/assets/json/',
            TEST: 'http://localhost/',
            PUB: '/server/api/'
        }
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
        if (name.indexOf("/") == -1) {
            var url = "views/" + name + ".html";
        } else {
            var url = name + ".html";
        }
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                $("#app").html(data);
                Zen.init();
            },
            error: function(e) {
                window.location.hash = "index";
                // CGI.getView("views/red");
            }
        });
    }
}
