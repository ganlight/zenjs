var SideNav = {
    top: null,
    right: null,
    bottom: null,
    left: null,
    toggle: function(type) {
        if ($("#app").hasClass("nav-" + type)) {
            this.close();
        } else {
            this.show(type);
        }
    },
    show: function(type) {
        this.close(type);
        $(".c-side-nav.nav-" + type).show();
        $("#app").addClass("nav-" + type);
    },
    close: function(type) {
        $("#app").removeClass("nav-top");
        $("#app").removeClass("nav-right");
        setTimeout(function() {
            $(".c-side-nav").hide(200);
            if (type) {
                $(".c-side-nav.nav-" + type).show();
            }
        }, 200);
    }
}
