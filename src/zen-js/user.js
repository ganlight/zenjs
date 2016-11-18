var User = {
    key: null,
    isLogin: false,
    need_verify_code: false,
    baseinfo: null,
    spread_code: null,
    init: function() {
        User.getKey();
        User.isLogin = PageService.isLogin;
        return this;
    },
    getKey: function() {
        var modulus = PageService.key.modulus;
        var exponent = PageService.key.public_exponent;
        if (exponent != undefined) {
            var key = RSAUtils.getKeyPair(exponent, '', modulus);
            console.log(key);
            User.key = key;
            User.need_verify_code = PageService.key.need_verify_code;
        }
    },
    getBaseInfo: function() {
        if (PageService.isLogin) {
            var _url = CGI.URL('USER', 'BASE_INFO');
            CGI.ajaxModule(_url, '', function(json) {
                if (json && json.code == "00000") {
                    User.baseinfo = json.result;
                }
            });
        }
    },
    getSpreadCode: function() {
        if (PageService.isLogin) {
            var _url = CGI.URL('USER', 'SPREAD_CODE');
            CGI.ajaxModule(_url, '', function(json) {
                if (json && json.code == "00000") {
                    User.spread_code = json.result.spread_code;
                }
            });
        }
    },
    checkIdentity: function() {
        //加载用户基本信息，检查用户是否实名
        User.getBaseInfo();
        Identity.init();
        if (Identity.status == 'BTG') {
            //如果未实名认证
            window.location.href = "/bid/identity.html?return_url=" + window.location.href;
            return;
        }
        if (User.baseinfo) {
            //如果有余额
            $('.user-account').text(User.baseinfo.balance)
        }
    },
    checkBankcard: function() {
        //加载银行卡信息，如果没有银行卡则显示绑卡
        BankCard.getBind();
        if (BankCard.card) {
            //如果没有卡
            $('.methods-field').show();
            $('.identity-field').hide();
        } else {
            $('.methods-field').hide();
            $('.identity-field').show();
            BankCard.init();
        }
    },
    isIdentity: function(fn) {
        if (User.isLogin) {
            var _url = CGI.URL('PAY', 'GET_ID_CARD');
            CGI.ajaxModule(_url, '', function(json) {
                if (json.code != "00000") {
                    return;
                };
                if (json.result.status == "TG") {
                    //认证通过,直接下一步
                    fn && fn();
                } else {
                    //认证未通过,采用国政通认证
                    Message.alert("为了您的资金安全，您需要实名认证。", function() {
                        window.location.href = '/pay/wxidentity.html';
                    });
                };
            });
        }
    },
    initPicCode: function() {
        if (User.need_verify_code) {
            $('.pic-code').show();
            var pic_code = $(".pic-code .code-img");
            pic_code.attr("src", '/userx/get_verify_code?' + Math.random() + '&verify_type=login');
        } else {
            $('.pic-code').hide();
        }
    },
    loginData: function() {
        var data = {};
        if (User.key) {
            var key = User.key;
            if ($('.pic-code').css('display') == 'none') {
                data = {
                    "username": RSAUtils.encryptedString(key, $(".username").val()),
                    "password": RSAUtils.encryptedString(key, $(".password").val())
                }
            } else {
                data = {
                    "username": RSAUtils.encryptedString(key, $(".username").val()),
                    "password": RSAUtils.encryptedString(key, $(".password").val()),
                    "verify_code": $("input[name='piccode']").val()
                }
            };
            return data;
        } else {
            Message.alert("您的信息有误，请重新登录！");
        }
    },
    login: function(para) {
        var _url = CGI.URL('USER', 'LOGIN');
        CGI.ajax(_url, para, function(json) {
            if (json.code == "00000") {
                var return_url = Util.getPar("return_url") || Store.gLocal("VIA");
                if (return_url) {
                    window.location.href = return_url;
                } else {
                    window.location.href = "/index.html";
                }
            } else if (json && (json.code == "50008" || json.code == "50002" || json.code == "50012")) {
                User.need_verify_code = true;
                User.initPicCode();
                Message.toast(json.message);
            } else {
                User.initPicCode();
                Message.toast(json.message);
            }
        });
    },
    registData: function() {
        var data = {};
        if (User.key) {
            var key = User.key;
            data = {
                "username": RSAUtils.encryptedString(key, $(".username").val()),
                "password": RSAUtils.encryptedString(key, $(".password").val()),
                "verify_code": $("input[name='verify_code']").val(),
                "invitation_code": $("input[name='invitation_code']").val()
            }
            return data;
        } else {
            Message.alert("您的信息有误，请重新注册！");
        }
    },
    regist: function(para) {
        var _url = CGI.URL('USER', 'REGIST');
        CGI.ajax(_url, para, function(json) {
            if (json.code == "00000") {
                window.location.href = "/index.html?type=newuser";
            } else if (json && json.code == "50000") {
                var return_url = window.location.pathname + window.location.search;
                window.location.href = '/user/login.html?return_url=' + return_url;
            } else {
                Message.alert(json.message);
            }
        });
    },
    changeData: function() {
        var data = {};
        if (User.key) {
            var key = User.key;
            data = {
                "old_password": RSAUtils.encryptedString(key, $("input[name='password']").val()),
                "new_password": RSAUtils.encryptedString(key, $("input[name='new_password']").val())
            }
            return data;
        } else {
            Message.alert("您的信息有误，请重新输入！");
        }
    },
    resetData: function() {
        var data = {};
        if (User.key) {
            var key = User.key;
            data = {
                "verify_code": $("input[name='verify_code']").val(),
                "password": RSAUtils.encryptedString(key, $("input[name='new_password']").val())
            }
            return data;
        } else {
            Message.alert("您的信息有误，请重新输入！");
        }
    },
    resetPassword: function(para) {
        var _url = CGI.URL('USER', 'RESET_PASSWORD');
        CGI.ajax(_url, para, function(json) {
            if (json.code == "00000") {
                Message.alert("密码找回成功,请用新密码登录", function() {
                    window.location.href = "/user/login.html";
                });
            } else {
                Message.alert(json.message);
            }
        });
    },
    changePassword: function(para) {
        var _url = CGI.URL('USER', 'CHANGE_PASSWORD');
        CGI.ajax(_url, para, function(json) {
            if (json.code == "00000") {
                Message.alert("密码修改成功,请用新密码登录", function() {
                    window.location.href = "/user/login.html";
                });
            } else {
                Message.alert(json.message);
            }
        });
    }
}
