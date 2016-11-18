Message.confirm = function(message, fn) {
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
}
