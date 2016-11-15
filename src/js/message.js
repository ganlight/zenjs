var Message = {
    toast: function(message) {
        var $toast = $(".c-toast");
        $(".c-toast .message-text").text(message);
        $toast.show(300);
        setTimeout(function() {
            $(".c-toast").hide(500);
        }, 2000);
    },
    alert: function alert(message, fn) {
        var $toast = $(".c-alert");
        $(".c-alert .message-text").html(message);
        $toast.show(300);
        $(".c-alert .alert-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
    },
    confirm: function(message, fn) {
        var $toast = $(".c-confirm");
        $(".c-confirm .message-text").html(message);
        $toast.show(300);
        $(".c-confirm .confirm-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
        $(".c-confirm .confirm-cancel").unbind('click').click(function() {
            Message.close();
        });
        $(".c-confirm .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    custom: function(name) {
        var $toast = $("#" + name);
        $toast.show(300);
        $(".custom-confirm .confirm-cancel").unbind('click').click(function() {
            Message.close();
        });
        $(".custom-confirm .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    select: function(title, slot, fn) {
        var $toast = $("#" + slot);
        $toast.find(".header-div .title").text(title);
        $toast.show(300);
        $(".c-select .select-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
        $(".c-select .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    dropdown: function(slot) {
        var $toast = $("#" + slot);
        $toast.show(300);
        $(".c-dropdown .dropdown-btn").unbind('click').click(function() {
            Message.close();
        });
        $(".c-dropdown .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    close: function() {
        $(".c-confirm").hide(300);
        $(".c-alert").hide(300);
        $(".c-select").hide(300);
        $(".c-dropdown").hide(300);
        $(".custom-confirm").hide(300);
    },
    send: function(verify_type, send_type, fn) {
        //回调函数，在执行先执行
        if (fn) {
            //如果执行结果为false，则不往下走
            var fun = eval(fn)
            if (!fun()) return;
        }
        var sms = $(".sms-btn");
        var voice = $(".voice-btn");
        if (sms.hasClass("gray")) {
            return;
        }
        if (voice.hasClass("gray")) {
            return;
        }
        var url = CGI.URL('USER', 'R_VERIFY_CODE');
        $.ajax({
            url: url,
            dataType: 'json',
            beforeSend: function() {
                sms.addClass("gray");
                voice.addClass("gray");
            },
            data: {
                "phone": $("input[name='phone']").val(),
                "verify_type": verify_type,
                "send_type": send_type
            },
            success: function(json) {
                if (json.code == "00000") {
                    Message.nextClick(60, send_type);
                } else {
                    if (json.code == "50025" || json.code == "50027") {
                        Message.nextClick(json.result.time_left, send_type);
                    } else {
                        Message.alert(json.message);
                        $(".custom-confirm .error-message").text(json.message).removeClass('hide');
                        voice.removeClass("gray");
                        sms.removeClass("gray").text("获取验证码");
                        voice.text("收不到短信?试试语音验证");
                        wait = 60;
                    }
                }
            }
        });
    },
    nextClick: function(wait, send_type) {
        var sms = $(".sms-btn");
        var voice = $(".voice-btn");
        if (wait == 0) {
            voice.removeClass("gray");
            sms.removeClass("gray").text("获取验证码");
            voice.text("收不到短信?试试语音验证");
            wait = 60;
        } else {
            if (!sms.hasClass("gray")) {
                sms.addClass("gray");
            }
            if (!voice.hasClass("gray")) {
                voice.addClass("gray");
            }
            sms.text(wait + "秒重获");
            if (send_type == "voice") {
                voice.text("请注意接听随机电话号码的语音验证码");
            } else {
                voice.text("请等候" + wait + "秒后再试试语音验证");
            };
            wait--;
            setTimeout(function() {
                Message.nextClick(wait, send_type);
            }, 1000);
        }
    }
}
