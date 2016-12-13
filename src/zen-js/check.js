var Check = {
    parm: function(parm) {
        if (typeof(parm) == "undefined" || parm == null || parm == "") {
            return true;
        } else {
            return false;
        }
    },
    name: function(s) {
        //检验姓名：姓名是2-15字的汉字
        var patrn = /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;
        if (!patrn.exec(s)) {
            return false;
        }
        return true;
    },
    number: function(s) {
        if (s.length == 0) {
            return false;
        }
        if (s.length != 6) {
            return false;
        }
        var patrn = /^\s*\d+\s*$/;
        //var patrn1=/^\s*\d{16}[\dxX]{2}\s*$/;
        if (!patrn.exec(s)) {
            return false;
        }
        return true;
    },
    phone: function(phone) {
        if (phone.length == 0) {
            return false;
        }
        if (phone.length != 11) {
            return false;
        }
        if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone))) {
            return false;
        }
        return true;
    },
    password: function(password) {
        if (password.length == 0) {
            return false;
        }
        if (password.length < 6 || password.length > 16) {
            return false;
        }
        return true;
    },
    code: function(code) {
        if (code.length == 0) {
            return false;
        }
        if (code.length == 6) {
            return true;
        }
        return false;
    },
    bankcard: function(bankno) {
        if (bankno.length < 8 || bankno.length > 19) {
            //$("#banknoInfo").html("银行卡号长度必须在16到19之间");
            return false;
        }
        var num = /^\d*$/; //全数字
        if (!num.exec(bankno)) {
            //$("#banknoInfo").html("银行卡号必须全为数字");
            return false;
        }
        return true;
    },
    agreement: function() {
        if ($(".agreement").length) {
            if (!$(".agreement").hasClass("selected")) {
                Message.toast("您需要阅读并同意《用户协议》");
                return false;
            };
            return true;
        };
    },
    platform: function() {
        //检测平台,如果是移动端为true
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if (system.win || system.mac || system.xll) {
            return false;
        } else {
            return true;
        }
    }
}
