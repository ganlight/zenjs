zen.message.confirm = function(message, fn) {
    var $toast = $(".c-confirm");
    $(".c-confirm .message-text").html(message);
    $toast.show(300);
    $(".c-confirm .confirm-ok").unbind('click').click(function() {
        fn && fn();
        zen.message.close();
    });
    $(".c-confirm .confirm-cancel").unbind('click').click(function() {
        zen.message.close();
    });
    $(".c-confirm .mask").unbind('click').click(function() {
        zen.message.close();
    });
}
