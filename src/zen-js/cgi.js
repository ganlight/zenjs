/*
系统全局相关
*/
//ENV 可设置为 DEV 和 PUB
zen.cgi = {
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
        var self = this;
        var ajaxType = self.SET.TYPE[self.ENV] || "post";
        return ajaxType;
    },
    URL: function(module, name) {
        var self = this;
        var suffix = "?t=" + new Date().getTime();
        if (self.ENV == "PUB") {
            suffix = ".php?t=" + new Date().getTime();
        }
        return self.SET.ROOT[CGI.ENV] + self.SET[module][name] + suffix;
    },
    ajax: function(url, data, success) {
        var self = this;
        var type = self.TYPE();
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
        var self = this;
        var type = self.TYPE();
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
