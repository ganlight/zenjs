zen.animate = {
    enter: function(ani) {
        if (!ani) {
            return;
        }
        $('.zen-cur').addClass(ani + ' animated')
            .one(
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function() {
                    $(this).removeClass(ani + ' animated');
                }
            );
    }
}
