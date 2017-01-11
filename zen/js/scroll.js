zen.scroll = {
    to: function(ele, speed) {
        if (!speed) speed = 300;
        if (!ele) {
            $("html,body").animate({
                scrollTop: 0
            }, speed);
        } else {
            if (ele.length > 0) $("html,body").animate({
                scrollTop: $(ele).offset().top
            }, speed);
        }
        return false;
    }
}
