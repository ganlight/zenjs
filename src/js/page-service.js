var PageService = {
    isLogin: false,
    key: null,
    init: function() {
        // Util.resize();
        Util._date();
        this.ready();
        //zepto的data问题
    },
    ready: function() {
        $(document).ready(function() {
            PageService.bind();
            PageService.loadView();
        });
    },
    loadView: function() {
        var view = Util.getHash() || "index";
        Zen.init();
        Zen.load();
        $(window).on('hashchange', function() {
            var name = Util.getHash()|| "index";
            Zen.load()
        });
    },
    bind: function() {
        $('*[v-insert]').each(function() {
            //对包含v-insert的加载html
            var _this = $(this);
            var _insert = $(this).attr('v-insert');
            if (!_insert) return;
            var url = _insert + ".html";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    _this.html(data);
                }
            });
        });
        $('*[v-slot]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var _slot = $(this).attr('v-slot');
            if (!_slot) return;
            _this.html($("#" + _slot));
        });
        $('*[v-send]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms,fn
            var _send = $(this).attr('v-send');
            if (!_send) return;
            var _para = _send.split(',')
            Message.send(_para[0], _para[1], _para[2]);
        });
        $('*[v-select]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms
            var _select = $(this).attr('v-select');
            if (!_select) return;
            Message.select('', _select);
        });
        $('*[v-toggle]').click(function() {
            //对包含v-toggle相关的控件，直接进行绑定操作
            var _toggle = $(this).attr('v-toggle');
            if (!_toggle) return;
            $("#" + _toggle).toggle();
            $(this).toggleClass("selected");
        });
        $('*[v-link]').click(function() {
            //对包含v-link相关的地址，直接绑定事件跳转
            var _link = $(this).attr('v-link');
            if (!_link) return;
            window.location.href = _link;
        });
    },
    hideNavMenu: function() {
        $('#nav-menu').hide();
    },
    setTitle: function(title) {
        $('.c-navmenu-banner .title').text(title);
    },
    status: function() {
        var _url = CGI.URL('USER', 'STATUS');
        CGI.ajaxModule(_url, '', function(json) {
            if (json && json.code == "00000") {
                PageService.isLogin = true;
            } else {
                PageService.isLogin = false;
            }
            PageService.key = json;
        });
    },
    mustLogin: function(via) {
        var _url = CGI.URL('USER', 'STATUS');
        CGI.ajaxModule(_url, '', function(json) {
            if (json && json.code == "50000") {
                if (via) {
                    Store.sLocal("VIA", via);
                } else {
                    Store.sLocal("VIA", window.location.href);
                }
                window.location.href = "/user/login.html";
                return false;
            }
        });
    },
    token: function() {
        var _url = CGI.URL('FRONT', 'TOKEN_GET');
        CGI.ajaxModule(_url, '', function(json) {
            if (json && json.code != "00000") {
                Message.toast(json.message);
            }
        });
    },
    loginAction: function(dofun, undofun) {
        var _url = CGI.URL('USER', 'STATUS');
        CGI.ajax(_url, '', function(json) {
            if (json && json.code == "00000") {
                dofun && dofun();
            } else {
                undofun && undofun();
            }
        });
    },
    logout: function() {
        var _url = CGI.URL('USER', 'LOGOUT');
        CGI.ajax(_url, '', function(json) {
            if (json && json.code == "00000") {
                window.location.href = "/index.html";
            }
        });
    }
}
