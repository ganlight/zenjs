views.common_js = function() {/*<script>var App = {
    init: function() {
        this.bind();
    },
    bind: function() {
        $(".c-navmenu-banner .menu").click(function() {
            $(".zen-container").toggleClass("nav-on");
        });
    }
}

/*
系统全局相关
*/
//ENV 可设置为 DEV 和 PUB
CGI.SET = {
    PUBLIC: {
        COACH_TYPE: 'public/coach/types',
        COACH_LIST: 'public/coach/list',
        COACH_DETAIL: 'public/coach/detail',
        JOB_LIST: 'public/job/list',
        JOB_DETAIL: 'public/job/detail'
    },
    TYPE: {
        //用来设置不同环境的类型
        DEV: 'get',
        TEST: 'post',
        PUB: 'post'
    },
    ROOT: {
        //用来设置不同环境的API地址
        DEV: '/assets/json/',
        TEST: 'http://localhost/',
        PUB: '/server/api/'
    }
}


$(function() {
    App.init();
})
</script>*/}