zen.directive = {
    init: function() {
        var app = $(".zen-container");
        app.find('*[v-zen]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var name = $(this).attr('v-zen');
            if (!name) return;
            var zen = $(".zen-modules .c-" + name).clone();
            _this.html(zen);
        });
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
            zen.message.send(_para[0], _para[1], _para[2]);
        });
        $('*[v-select]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms
            var _select = $(this).attr('v-select');
            if (!_select) return;
            zen.message.select('', _select);
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
    }
}
