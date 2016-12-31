var SideNav = {
    top: null,
    right: null,
    bottom: null,
    left: null,
    toggle: function(type) {
        this.pre(type);
        if ($(".zen-container").hasClass("nav-" + type)) {
            this.close();
        } else {
            this.show(type);
        }
    },
    pre: function(type) {
        if (type == "top") {
            //此处由于right遮挡top的,需要特殊处理下
            $(".c-side-nav.nav-right").hide();
        }
    },
    show: function(type) {
        this.close();
        $(".c-side-nav.nav-" + type).show();
        $(".zen-container").addClass("nav-" + type);
    },
    close: function(type) {
        $(".zen-container").removeClass("nav-top");
        $(".zen-container").removeClass("nav-right");
    }
}
