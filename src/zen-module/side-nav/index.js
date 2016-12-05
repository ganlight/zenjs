var SideNav = {
    top: null,
    right: null,
    bottom: null,
    left: null,
    toggle: function(type) {
        if ($(".zen-container").hasClass("nav-" + type)) {
            this.close();
        } else {
            this.show(type);
        }
    },
    show: function(type) {
        this.close(type);
        $(".c-side-nav.nav-" + type).show();
        $(".zen-container").addClass("nav-" + type);
    },
    close: function(type) {
        $(".zen-container").removeClass("nav-top");
        $(".zen-container").removeClass("nav-right");
        setTimeout(function() {
            $(".c-side-nav").hide(200);
            if (type) {
                $(".c-side-nav.nav-" + type).show();
            }
        }, 200);
    }
}
