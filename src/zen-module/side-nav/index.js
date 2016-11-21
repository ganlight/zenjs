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
        $(".c-side-nav").hide(200);
        $(".c-side-nav.nav-" + type).show();
        $("#app").removeClass("nav-top");
        $("#app").removeClass("nav-right");
        $("#app").addClass("nav-" + type);
    },
    close: function() {
        $(".c-side-nav").hide(200);
        $("#app").removeClass("nav-top");
        $("#app").removeClass("nav-right");
    }
}
