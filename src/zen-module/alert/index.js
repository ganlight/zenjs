Message.alert = function(message, fn) {
    var $toast = $(".c-alert");
    $(".c-alert .message-text").html(message);
    $toast.show(300);
    $(".c-alert .alert-ok").unbind('click').click(function() {
        fn && fn();
        Message.close();
    });
}
