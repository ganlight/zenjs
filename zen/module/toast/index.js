zen.message.toast = function(message) {
    var $toast = $(".c-toast");
    $(".c-toast .message-text").text(message);
    $toast.show(300);
    setTimeout(function() {
        $(".c-toast").hide(500);
    }, 2000);
}
