zen.resize = function() {
    $(".screen-height").css("min-height", $(window).height());
    $(".zen-stack").css("min-height", $(window).height());
    $(".zen-page").css("min-height", $(window).height());
    $(window).resize(function() {
        $(".screen-height").css("min-height", $(window).height());
        $(".zen-stack").css("min-height", $(window).height());
        $(".zen-page").css("min-height", $(window).height());
    });
}
