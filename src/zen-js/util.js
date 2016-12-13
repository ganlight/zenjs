var Util = {
    lastClick: null,
    once: function(fn) {
        var now = new Date().getTime();
        if (now - Util.lastClick < 2000) {
            Message.toast("您的操作过快，请稍后尝试");
            return;
        };
        Util.lastClick = now;
        fn && fn();
    },
    join: function(des, src, override) {
        if (src instanceof Array) {
            for (var i = 0, len = src.length; i < len; i++)
                Util.join(des, src[i], override);
        }
        for (var i in src) {
            if (override || !(i in des)) {
                des[i] = src[i];
            }
        }
        return des;
    },
    _resize: function(on) {
        var SCALE = (window.innerWidth || document.body && document.body.clientWidth) / 320;
        if (on) {
            $('html').css('font-size', SCALE * 62.5 + '%');
        } else {
            //针对小手机，此处都不缩放
            $('html').css('font-size', 62.5 + '%');
        }
    },
    resize: function(on) {
        var on = on || false;
        Util._resize(on);
        $(window).resize(function() {
            Util._resize(on);
        });
    },
    min: function(a, b) {
        if (a < b) {
            return a
        } else {
            return b
        };
    },
    scrollShow: function(obj) {
        $(window).scroll(function() {
            if (window.scrollY > 200) {
                $(obj).show(300);
            } else {
                $(obj).hide();
            }
        });
    },
    alertOver: function() {
        Message.alert("当前活动已经结束，请关注盈火虫公众号参与更多活动！", function() {
            window.location.href = "/";
        });
    }
}
