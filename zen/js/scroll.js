zen.scroll = {
    to: function(ele, speed) {
        if (!speed) speed = 300;
        if (ele.length > 0 && $(ele).length) {
            $("html,body").animate({
                scrollTop: $(ele).offset().top
            }, speed);
        } else {
            $("html,body").animate({
                scrollTop: 0
            }, speed);
        }
        return false;
    }
}
