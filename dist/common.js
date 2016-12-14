views.common_css = function() {/*<style>.zen-container {
    background: url("assets/img/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top:0;
    left: 0;
}
</style>*/}
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
views.index_html = function() {/*<style>.zen-stack{background:url(assets/img/background.jpg);background-repeat:no-repeat;background-size:100% 100%}.zen-page{height:100%}.c-navmenu-banner .title{font-size:1.6rem;color:#FFF}.c-navmenu-banner .menu{cursor:pointer}.c-navmenu-banner>div{position:relative;padding:1.1rem 1.5rem;font-size:2rem}.link-item{height:100px;width:64px;color:#FFF}.link-item i{font-size:2.4rem}.link-item .name{line-height:3rem;font-size:1.4rem}.link-item .white-line{height:.1rem;background:#FFF}.info{margin:65px auto 0;color:#bfbfbf;font-size:1.2rem;text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none}.info a:hover{text-decoration:underline}</style><div class="zen-page v-center"><div class="c-navmenu-banner fix-top"><div class="text-center clearfix"><span class="logo fl"><i class="fa fa-paper-plane fa-fw white"></i><span class="white ml10 font16">ZENJS</span></span> <span class="title white"></span> <span class="fr menu"><i class="fa fa-bars fa-fw white"></i></span></div></div><ul class="link-list"><li class="link-item text-center" v-link="#example/index"><div><i class="fa fa-tree fa-fw white font32"></i></div><div class="name">MODULES</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#blog/catalog"><div><i class="fa fa-bookmark fa-fw white font32"></i></div><div class="name">BLOG</div><div class="white-line"></div></li><li class="link-item text-center" v-link="https://github.com/ganlight/zenjs"><div><i class="fa fa-code fa-fw white"></i></div><div class="name">GITHUB</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#about"><div><i class="fa fa-inbox fa-fw white font32"></i></div><div class="name">ABOUT</div><div class="white-line"></div></li></ul><footer class="info fix-bottom"><p>Zenjs Written by <a href="http://zenjs.cn">ganlight</a></p><p>© 2009-2016 zenjs.cn 版权所有 <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备16113949号</a></p></footer></div><script>$(function(){var n={init:function(){this.init_sidenav()},init_sidenav:function(){$(".c-navmenu-banner .menu").click(function(){SideNav.toggle("right")}),$(".c-navmenu-banner .logo").click(function(){SideNav.toggle("top")}),$(".c-side-nav").click(function(){SideNav.close()})}};Zen.ready(n)})</script>*/}
views.about__index_html = function() {/*<style>.zen-page p{margin:1.5rem;font-size:1.6rem;line-height:3rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">ABOUT ZENJS</h2><div class="c-card"><h3>zenjs信息</h3><p>- github地址：https://github.com/ganlight/zenjs.git<br>- 演示地址：https://ganlight.github.io/zenjs<br>- 作者邮箱：ganlight@foxmail.com</p></div><div class="c-card"><h3>特点</h3><p>- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷<br>- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。<br>- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。<br></p></div><div class="c-card"><h3>库说明</h3><p>- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)<br>- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可<br>- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可</p></div><div class="c-card"><h3>开发说明</h3><p>###zen目录<br>- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹<br>里面统一为index.css,index.html,index.js<br>###views目录<br>- modules文件夹这里面的每一个控件可以单独打开，可以使用。<br>- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用<br>###js目录<br>###css目录<br></p></div><div class="c-card"><h3>如何去构建</h3><p>- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器</p></div><div class="c-card"><h3>如何排除bug</h3><p>- 在console中输入Zen.current就能看到该页面相关的对象信息了</p></div><div class="c-card"><h3>其他</h3><p>- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。<br>- 感谢vuejs，weui，zepto，gulp这些优秀的库。</p></div><div class="lh15">&nbsp;</div></div>*/}
views.example__index_html = function() {/*<style>.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><h2 class="font24 white text-center normal">Zenjs Modules</h2><ul class="page-list" id="page-list"></ul><div class="lh15">&nbsp;</div><div class="page-template hide"><li class="list-item inline c-card clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"Message.alert('Zenjs')"},{name:"toast",action:"Message.toast(' A light framwork')"},{name:"confirm",action:"Message.confirm('Coding Zen!')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();Store.data(l,i),Template.values(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=Store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};Zen.ready(Service)})</script>*/}
views.focus_time__index_html = function() {/*<style>.zen-page{position:relative;max-width:none;margin:0 auto}.work-area{height:83.33%;position:absolute;width:100%;text-align:center;background:#0ff}.rest-area{height:16.67%;position:absolute;top:83.33%;background:#008b8b;width:100%}.remain-time{font-size:8rem;color:#FFF}</style><div class="zen-page"><div class="work-area v-center"><div class="remain-time"></div></div><div class="rest-area v-center"><div class="task-opt text-center"><span class="start-btn c-btn">开始</span> <span class="stop-btn c-btn">停止</span> <span class="rest-btn c-btn">休息</span></div></div></div><script>console.log("focus time")</script>*/}
views.front__green_html = function() {/*<style>.bg-green{color:green;font-size:20px;width:80%;height:100px}</style><div class="zen-page"><h2 class="font24 white text-center normal">ZEN PAGE</h2><div class="c-card bg-green v-center">green</div></div><script>console.log("green page")</script>*/}
views.front__page_html = function() {/*<style>.example-field{font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page example-field" v-script="views/example/js/toggle-group.js"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div>*/}
views.front__red_html = function() {/*<style>.bg-red{background:red;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-red v-center">red</div>*/}
views.todo__index_html = function() {/*<style>.zen-container{background:#f5f5f5;color:#4d4d4d;max-width:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{outline:medium}.filters a{outline:0;blr:expression(this.onFocus=this.blur())}</style><div class="zen-page"><div class="todoapp"><div class="header"><h1>todos</h1><input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"></div><section class="main"><input class="toggle-all" type="checkbox" v-model="allDone"><ul class="todo-list"></ul></section><footer class="footer" v-show="todos.length" v-cloak><span class="todo-count"><strong class="remaining"></strong> items left</span><ul class="filters"><li><a href="javascript:void(0);" class="selected" filter="">All</a></li><li><a href="javascript:void(0);" filter="active">Active</a></li><li><a href="javascript:void(0);" filter="completed">Completed</a></li></ul><button class="clear-completed">Clear completed</button></footer></div><footer class="info"><p>Double-click to edit a todo</p><p>Zenjs-Todo Written by <a href="http://zenjs.cn">ganlight</a></p><p>Part of <a href="http://evanyou.me">Evan You</a> and <a href="http://todomvc.com">TodoMVC</a></p></footer><div class="page-template hide"><li class="todo-item"><div class="view"><input class="toggle" type="checkbox"><label class="todo-name title"></label><button class="destroy"></button></div><input class="edit" type="text"></li></div></div>*/}
views.blog__catalog__index_html = function() {/*<style>.banner-area{line-height:5rem;z-index:101}.banner-area .back-btn{background:currentColor}.banner-area .catalog-area{background:#5f9ea0}.articles-area{padding-top:5rem}.articles-area .article-item{display:block;margin:1rem;background:#f8f8ff;padding:1rem}.articles-area .article-item .title{padding-bottom:5px}.catalog-area .catalog-list{display:none}.mask-on .catalog-list{display:block}</style><div class="zen-page"><div class="banner-area inline clearfix fix-top"><div class="back-btn span4" v-link="#index"><i class="fa fa-paper-plane fa-fw white"></i> <span class="white ml10 font16">ZENJS</span></div><div class="catalog-area span8 white font16"><div class="catalog-title">目录</div><ul class="catalog-list"></ul></div></div><ul class="articles-area"></ul><div class="page-template hide"><div class="article-item"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div><div class="catalog-item"><span class="type_name"></span> <span class="type_num"></span></div></div></div><script v-script="views/blog/config.js"></script><script>$(function(){var t={articles:[],types:{},sections:null,map:{},init:function(){ZEN_ARTICLES&&(this.articles=ZEN_ARTICLES,this.pre(),this.rendType(this.types),this.rendArticles(this.articles))},pre:function(){var t=this;if(this.articles&&this.articles.length>0)for(var e=(this.articles.length,this.articles),i=0;i<e.length;i++){var a=e[i];a.id=i,t.types[a.type]||(t.types[a.type]=[]),t.types[a.type].push(a)}},rendType:function(t){var e=this;if(t){var i=$(".catalog-list");for(var a in t){var n=$(".page-template .catalog-item").clone();Store.data(n,t[a]),n.find(".type_name").text(a),n.attr("data-type",a),n.find(".type_num").text(t[a].length),e.bindType(n),i.append(n)}}},rendArticles:function(t){var e=this;if(t&&t.length>0){var i=(t.length,t),a=$(".articles-area");a.empty();for(var n=0;n<i.length;n++){var r=i[n],s=$(".page-template .article-item").clone();Store.data(s,r),Template.values(s,r),e.bindArticle(s),a.append(s)}}},get:function(t,e){var i=this.map[t+"/"+e]||"";return i},bindType:function(t){var e=this;t.click(function(){var t=$(this).attr("data-type");if(t){var i=e.types[t];e.rendArticles(i)}})},bindArticle:function(t){t.click(function(){var e=Store.data(t);e&&e.id>-1&&(window.location.href="#blog/article?id="+e.id)})}},e={init:function(){this.data=t,t.init(),this.bind()},bind:function(){$(".catalog-area").click(function(){$(".zen-container").toggleClass("mask-on"),$(".zen-modules").toggleClass("mask-on")})}};Zen.ready(e)})</script>*/}
views.blog__article__index_html = function() {/*<div class="zen-page"><div class="banner-area inline clearfix fix-bottom"><div class="pre-btn span3"><i class="fa fa-arrow-left fa-fw white"></i><span class="white ml5">上一篇</span></div><div class="catalog-type span6 white font16" v-link="#blog/catalog">目录</div><div class="next-btn span3"><span class="white mr5">下一篇</span><i class="fa fa-arrow-right fa-fw white"></i></div></div><h2 class="font24 white text-center normal title"></h2><div class="markdown-area content"></div><div class="catalog-area"></div><div class="page-template hide"><div class="list-item inline c-card clearfix"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div></div></div><script v-script="views/blog/config.js"></script>*/}
views.example__toggle_group__index_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script>$(function(){var e={ele:"m-type",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},t={ele:"m-status",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},a={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(t)}};Zen.ready(a)})</script>*/}
views.example__multi_select__index_html = function() {/*<div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
views.example__single_page__multi_select_html = function() {/*<style>.zen-page{font-size:1.6rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};Zen.ready(l)})</script>*/}
views.example__single_page__toggle_group_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
views.blog__config_js = function() {/*<script>var ZEN_ARTICLES = [{
    title: "Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 1",
    section: "begin",
    file: "zenjs/install"
}, {
    title: "关于 ZENJS",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 2",
    section: "begin",
    file: "zenjs/about-zenjs"
}, {
    title: "如何用zenjs写一个博客系统",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 3",
    section: "begin",
    file: "zenjs/如何用zenjs写一个博客系统"
}];


var CATALOG_TMP = {
    "type": "catalog",
    "name": "zenjs 框架",
    "data": [{}]
}

var ARTICLE_TMP = {
    "type": "article",
    "name": "zenjs 框架",
    "path": "zen/zenjs 框架.md",
    "public": "2016-11-25 14:00",
    "auther": "ganlight",
    "tag": "zenjs javascript",
}

var ZENJS_BLOG = {
    "zenjs": {
        "type": "catalog",
        "name": "zenjs 框架",
        "data": [{
            "type": "article",
            "title": "Zenjs的安装使用",
            "public": "2016-11-25 14:00",
            "auther": "ganlight",
            "file": "install"
        }]
    }
}
</script>*/}
views.focus_time__index_js = function() {/*<script>$(function() {
    var tomato = {
        work: 25,
        rest: 5,
        times: 4,
        message: {
            init: "开始一个番茄钟",
            success: "哇，你很棒哦，又完成了一项工作！",
            stop: "要不再坚持一会?"
        }
    }
    var TimeUtil = {
        loop: null,
        tick: function(task, on) {
            var self = this;
            if (on && !this.loop) {
                this.loop = setInterval(function() {
                    self.refresh(task);
                }, 100);
            } else {
                clearInterval(this.loop);
                this.loop = null;
                Store.setLocal("FOCUS_TIME_CURRENT", task);
            }
        },
        format: function(num) {
            var time = {
                min: "00",
                sec: "00",
                str: "00:00"
            }
            if (num >= 0) {
                var seconds = num / 1000;
                time.min = parseInt(seconds / 60) > 9 ? parseInt(seconds / 60) : "0" + parseInt(seconds / 60)
                time.sec = parseInt(seconds % 60) > 9 ? parseInt(seconds % 60) : "0" + parseInt(seconds % 60);
                time.str = time.min + ":" + time.sec;
            }
            return time;
        },
        refresh: function(task) {
            var remain_time = 0,
                work_time = tomato.work * 60000,
                rest_time = tomato.rest * 60000;
            if (task.status == "WORK_INIT") {
                remain_time = work_time;
                $(".start-btn").removeClass("hide");
            }
            if (task.status == "WORK_START") {
                var current_time = new Date().getTime();
                remain_time = work_time - (current_time - task.work_start);
                $(".stop-btn").removeClass("hide");
                if (remain_time < 0) {
                    task.status = "WORK_DONE"
                    TimeUtil.tick(task, false);
                    $(".rest-btn").removeClass("hide");
                }
            }
            if (task.status == "WORK_DONE") {
                Message.alert(tomato.message.success);
                task.status = "REST_INIT";
                remain_time = rest_time;
            }
            if (task.status == "WORK_STOP") {
                remain_time = work_time - (task.work_stop - task.work_start);
                TimeUtil.tick(task, false);
            }
            if (task.status == "REST_INIT") {
                remain_time = rest_time;
            }
            if (task.status == "REST_START") {
                var current_time = new Date().getTime();
                remain_time = rest_time - (current_time - task.rest_start);
                if (remain_time < 0) {
                    task.status = "REST_DONE"
                    TimeUtil.tick(task, false);
                }
            }
            if (task.status == "REST_DONE") {
                task.status = "WORK_INIT";
                remain_time = work_time;
            }
            Store.setLocal("FOCUS_TIME_CURRENT", task);
            var str = this.format(remain_time).str;
            $(".remain-time").text(str);
        }
    }
    var Task = function(task) {
        var self = this;
        this.data = {};
        this.interval = null;
        if (task) {
            this.data = task;
            if (task.status == "WORK_START" || task.status == "REST_START") {
                TimeUtil.tick(task, true);
            }
        } else {
            task = this.data;
            task.name = "";
            task.work_init = new Date().getTime();
            task.work_start = "";
            task.work_done = "";
            task.work_stop = "";
            task.rest_init = "";
            task.rest_start = "";
            task.rest_done = "";
            task.rest_stop = "";
            task.status = "WORK_INIT";
        }
        TimeUtil.refresh(task);
        return this;
    }

    Task.prototype = {
        start: function() {
            var self = this;
            var task = self.data;
            task.work_start = new Date().getTime();
            task.status = "WORK_START";
            TimeUtil.tick(task, true);
        },
        rest: function() {
            var self = this;
            var task = self.data;
            task.rest_start = new Date().getTime();
            task.status = "REST_START";
            TimeUtil.tick(task, true);
        },
        stop: function() {
            var self = this;
            var task = self.data;
            task.work_stop = new Date().getTime();
            task.status = "WORK_STOP";
            TimeUtil.tick(task, false);
        }
    }

    var TaskList = {
        current: null,
        init: function() {
            var task = Store.getLocal("FOCUS_TIME_CURRENT");
            if (task) {
                this.current = new Task(task);
            } else {
                this.current = new Task();
            }
        }
    }

    var Service = {
        task: null,
        init: function() {
            TaskList.init();
            this.task = TaskList.current;
            this.bind();
        },
        bind: function() {
            var self = this;
            $(".start-btn").click(function() {
                self.task.start();
            });
            $(".stop-btn").click(function() {
                self.task.stop();
            });
            $(".rest-btn").click(function() {
                self.task.rest();
            });
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.todo__index_js = function() {/*<script>$(function() {
    var TodoData = {
        key: "ZENJS_TODO",
        get: function() {
            var todos = Store.getLocal(this.key) || [];
            $.each(todos, function(todo, index) {
                todo.id = index
            })
            this.uid = todos.length;
            return todos;
        },
        save: function(todos) {
            Store.setLocal(this.key, todos);
        }
    }

    var Todo = {
        todos: [],
        init: function() {
            this.todos = TodoData.get();
            for (i in this.todos) {
                this.rend(this.todos[i]);
            }
            this.watch();
        },
        rend: function(item) {
            var self = this;
            var parent = $(".todo-list");
            var clone = $(".page-template .todo-item").clone();
            Store.data(clone, item);
            Template.values(clone, item);
            if (item.completed) {
                clone.addClass("completed");
                clone.find(".toggle").prop("checked", true);
            } else {
                clone.addClass("active");
                clone.find(".toggle").prop("checked", false);
            }
            TodoEvent(clone);
            parent.append(clone);
        },
        save: function() {
            var todos = this.todos = [];
            $(".todo-list .todo-item").each(function() {
                var data = Store.data($(this));
                if (data) {
                    todos.push(data);
                }
            })
            TodoData.save(this.todos);
            this.watch();
        },
        add: function() {
            var newTodo = $(".new-todo").val();
            var value = newTodo && newTodo.trim()
            if (!value) {
                return;
            }
            var _new = {
                id: TodoData.uid++,
                title: value,
                completed: false
            };
            this.rend(_new);
            $(".new-todo").val("");
            this.save();
        },
        watch: function() {
            var active_num = $(".todo-list .todo-item.active").length;
            var completed_num = $(".todo-list .todo-item.completed").length;
            $(".remaining").text(active_num);
            if (completed_num > 0) {
                $(".clear-completed").show();
            } else {
                $(".clear-completed").hide();
            }
        }
    }

    var TodoEvent = function(target) {
        //这里负责元素的事件的绑定
        target.find(".destroy").click(function() {
            var data = Store.data(target);
            if (data) {
                target.remove();
                Todo.save();
            }
        });
        target.find(".toggle").click(function() {
            var data = Store.data(target);
            if (data) {
                if (data.completed) {
                    data.completed = false;
                } else {
                    data.completed = true;
                }
                target.toggleClass("completed");
                target.toggleClass("active");
                Store.data(target, data);
                Todo.save();
            }
        });
        target.find(".title").dblclick(function() {
            var data = Store.data(target);
            if (data) {
                target.addClass("editing");
                target.find(".edit").val(data.title);
                target.find(".edit").focus();
            }
        });
        target.find(".edit").blur(function() {
            var data = Store.data(target);
            if (data) {
                data.title = target.find(".edit").val();
                if (data.title && data.title.trim()) {
                    target.find(".title").text(data.title);
                    target.removeClass("editing");
                    Store.data(target, data);
                } else {
                    target.remove();
                }
                Todo.save();
            }
        });
    }

    var Service = {
        init: function() {
            Todo.init();
            this.bind();
        },
        bind: function() {
            //这里负责全局的绑定
            $(".new-todo").keyup(function(event) {
                //监听回车事件,添加一条todo
                if (event.keyCode == 13) {
                    Todo.add();
                }
            });
            $(".filters a").click(function() {
                //对todo进行筛选
                var $this = $(this);
                $(".filters a").removeClass("selected");
                $this.addClass("selected");
                var type = $this.attr("filter");
                if (type) {
                    $(".todo-list .todo-item").hide();
                    $(".todo-list .todo-item." + type).show();
                } else {
                    $(".todo-list .todo-item").show();
                }
            });
            $(".clear-completed").click(function() {
                $(".todo-list .todo-item.completed").remove();
                Todo.save();
            });
            $(".toggle-all").click(function() {
                var status = $(".toggle-all").attr("checked");
                $(".todo-list .todo-item").each(function() {
                    var target = $(this);
                    var data = Store.data(target);
                    if (data) {
                        if (!status) {
                            data.completed = false;
                            target.removeClass("completed");
                            target.addClass("active");
                        } else {
                            data.completed = true;
                            target.addClass("completed");
                            target.removeClass("active");
                        }
                        target.find(".toggle").prop("checked", data.completed);
                        Store.data(target, data);
                    }
                });
                Todo.save();
            })
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.blog__article__index_js = function() {/*<script>$(function() {
    var MarkDown = {
        converter: null,
        init: function() {
            if (showdown && showdown.Converter) {
                this.converter = new showdown.Converter();
            } else {
                $(".title").html("暂不支持markdown");
            }
        },
        rend: function(article, data) {
            if (this.converter && data) {
                var html = this.converter.makeHtml(data);
                $(".title").html(article.title);
                $(".markdown-area").html(html).show();
            }
        },
        load: function(article) {
            var self = this;
            var url = "views" + '["blog/markdown/' + article.file + '.md"]';
            var data = Zen.parse(eval(url));
            if (data) {
                data = data.replace(/__block_head__/g, '/*').replace(/__block_foot__/g, "*\/");
                self.rend(article, data);
            }
        },
        load_file: function(article) {
            var self = this;
            var url = "blog/" + article.type + "/" + article.file + ".md";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    $(".catalog-area").hide();
                    $(".markdown-area").show();
                    self.rend(article, data);
                },
                error: function(e) {
                    $(".markdown-area").hide();
                    $(".catalog-area").show();
                    Message.toast("当前文章" + article.file + "不存在，请返回其他文章");
                }
            });
        }
    }
    var Service = {
        id: 0,
        init: function() {
            MarkDown.init();
            var id = this.id = parseInt(URL.getPar("id")) || 0;
            if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                MarkDown.load(ZEN_ARTICLES[id]);
            } else {
                window.location.href = "#blog/article?id=0";
            }
            this.bind();
        },
        bind: function() {
            $(".zen-page .pre-btn").click(function() {
                if (Service.id > 0) {
                    var id = Service.id - 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    Message.toast("没有上一篇了.");
                }
            })
            $(".zen-page .next-btn").click(function() {
                if (Service.id < ZEN_ARTICLES.length - 1) {
                    var id = Service.id + 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    Message.toast("没有下一篇了.");
                }
            })
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.example__multi_select__index_js = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        data: [{
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }]
    }
    var config_status = {
        ele: "m-status",
        data: [{
            name: "状态1",
            value: "33"
        }, {
            name: "状态2",
            value: "34"
        }, {
            name: "状态3",
            value: "35"
        }]
    }

    var Service = {
        multi_type:null,
        multi_status:null,
        init: function() {
            this.multi_type = new MultiSelect(config_type);
            this.multi_status = new MultiSelect(config_status);
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.example__single_page__toggle_js = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        addAction: function(item) {
            Message.toast("选择"+item.name);
        },
        delAction: function(item) {
            Message.toast("取消"+item.name);
        },
        data: [{
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: false
        }, {
            name: "例子3",
            value: "35",
            selected: false
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }]
    }
    var config_status = {
        ele: "m-status",
        addAction: function(item) {
            Message.toast("选择"+item.name);
        },
        delAction: function(item) {
            Message.toast("取消"+item.name);
        },
        data: [{
            name: "状态1",
            value: "33",
            selected: true
        }, {
            name: "状态2",
            value: "34",
            selected: false
        }, {
            name: "状态3",
            value: "35",
            selected: true
        }]
    }

    var Service = {
        toggle_type:null,
        toggle_status:null,
        init: function() {
          this.toggle_type = new ToggleGroup(config_type);
          this.toggle_status = new ToggleGroup(config_status);
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.focus_time__index_css = function() {/*<style>::-webkit-scrollbar-track-piece{background:#f5f5f5;border-left:1px solid #d2d2d2}::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-thumb{background:#c2c2c2;background-clip:padding-box;border:1px solid #979797;min-height:28px}::-webkit-scrollbar-thumb:hover{border:1px solid #636363;background:#929292}body{font-family:Tahoma,Arial,MS Trebuchet,sans-serif;font-size:14px}button,input,label{display:block;margin:10px auto}#title{margin:10px auto;width:500px;text-align:center;font-size:60px}#remainTime{text-align:center;font-size:180px}#progressBar,#progressBarBorder{width:500px;height:15px;overflow:hidden}#progressBarBorder{display:block;margin:10px auto;border:1px solid #fff;box-shadow:1px 1px 15px #000}#progressBar{background:blue}#control{margin:10px auto;width:500px}.taskLeave{background:#ff0}.taskDone{background:blue}.taskStop{background:red}.copyright{margin:50px auto;text-align:center}</style>*/}
views.todo__index_css = function() {/*<style>body,button,html{margin:0;padding:0}button{border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased}body,button{-moz-osx-font-smoothing:grayscale}body{font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;font-weight:300}:focus{outline:0}.hidden{display:none}.todoapp{background:#fff;margin:130px 0 40px;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.edit,.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}label[for=toggle-all]{display:none}.toggle-all{position:absolute;top:-55px;left:-12px;width:60px;height:34px;text-align:center;border:none}.toggle-all:before{content:'❯';font-size:22px;color:#e6e6e6;padding:10px 27px}.toggle-all:checked:before{color:#737373}.todo-list{margin:0;padding:0;list-style:none}.todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li:last-child{border-bottom:none}.todo-list li.editing{border-bottom:none;padding:0}.todo-list li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}.todo-list li.editing .view{display:none}.todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.todo-list li .toggle:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')}.todo-list li .toggle:checked:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')}.todo-list li label{word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-list li.completed label{color:#d9d9d9;text-decoration:line-through}.todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}.todo-list li .destroy:hover{color:#af5b5e}.todo-list li .destroy:after{content:'×'}.todo-list li:hover .destroy{display:block}.todo-list li .edit{display:none}.todo-list li.editing:last-child{margin-bottom:-1px}.footer{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer:before{content:'';position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.clear-completed,html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}.info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio:0){.todo-list li .toggle,.toggle-all{background:none}.todo-list li .toggle{height:40px}.toggle-all{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-appearance:none;-moz-appearance:none;appearance:none}}@media (max-width:430px){.footer{height:50px}.filters{bottom:10px}}</style>*/}
views.blog__article__index_css = function() {/*<style>code{padding:1px 3px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;font-size:1.4rem;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre code{font-size:1.2rem;padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}ul{list-style:inherit;margin-left:20px}ul li{line-height:2rem;font-weight:100;margin-bottom:1.5rem}*{-webkit-print-color-adjust:exact}.banner-area{line-height:5rem;bottom:-.1rem}.banner-area .next-btn,.banner-area .pre-btn{background:currentColor}.banner-area .catalog-type{background:#5f9ea0}.markdown-area{position:relative;background:#fff;margin:1rem 1rem 0;border-radius:.3rem;padding:1rem;margin-bottom:6rem;display:none;color:#2c3e50}</style>*/}
views.example__multi_select__index_css = function() {/*<style>.zen-page{font-size:1.6rem}</style>*/}
views["blog/markdown/zenjs/about-zenjs.md"] = function() {/*

# zenjs

##Zenjs的思想

- **减少依赖**,让编写html页面更纯粹
- **减少重复**,去掉每个页面的header和footer,只写最核心的代码
- **简单语法**,除了少量指令,所有的代码编写都跟原始的html写法一致,减少学习成本,可以在不到180行的js实现一个todo应用.
- **万物皆对象**,所有的css,html片段,js代码都是对象,加载一个页面就是对这些对象的处理
- **容易扩展**,在zen-module中可以加入定义的模块,可以是css,js,html,也可以是这里面的css,js,html的合集
- **功能集中化**,实现的业务逻辑在附近,比如todo页面,index.css是样式,index.html是页面元素,index.js是业务逻辑,功能集中避免了为了修改某个功能,需要来回找多个文件的诟病
- **共用与隔离**,公共的模块是可以共用的.每个页面的样式,页面和js都是相对独立与隔离的
- **定位更简单**,用面向对象的思想,所有的数据和流程都可以对象的形式表现,将这些数据流在html中的data,还有对外Zen.current可以看到所有的数据流
- **加载更快**,整个核心库大概23k左右,采用SPA的方式,加载是毫秒级别的.(网页的损耗主要是网络请求,zenjs将css,hml,js当做模块引入,全局只需引入一个zenjs的核心库,大大减少了网络请求的时间)

##特点
- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷
- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)
- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可
- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <link rel="shortcut icon" type="image/ico" href="favicon.ico">
    <title>Zenjs js</title>
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script type="text/javascript" src="./lib/zenjs-zepto.min.js"></script>
    <script type="text/javascript" src="common.js"></script>
    <script src="//cdn.bootcss.com/showdown/1.5.0/showdown.min.js"></script>
</head>

<body ontouchstart>
    <div class="container" id="app">
    </div>
</body>

</html>
```

##为什么这么做
- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。

##开发说明

###zen目录
- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹，里面统一为index.css,index.html,index.js,module.html(可选)


###views目录
- modules文件夹这里面的每一个控件可以单独打开，可以使用。
- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用

###js目录
###css目录

##如果去构建
- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器

##如何排除bug
- 在console中输入Zen.current就能看到该页面相关的对象信息了

##其他
- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。
- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。


``` js
var articles = [{
    title: "Zenjs install",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs",
    section: "begin",
    file: "begin-install"
}, {
    title: "如何用zenjs写一个博客系统",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs",
    section: "begin",
    file: "如何用zenjs写一个博客系统"
}];
```
*/}
views["blog/markdown/zenjs/install.md"] = function() {/*##Zenjs的安装使用

###获取zenjs
https://github.com/ganlight/zenjs

- 通过git clone最新的zenjs代码
- 在zenjs目录下,通过npm install 可以安装响应的依赖,这里用到了gulp,所以需下载gulp下关的依赖
- 下载完成后,在当前目录下执行`gulp -sw`就可以启动服务器,可以开始你的zenjs框架开发了


###zenjs的结构说明
```sh
.
├── README.md
├── bower.json
├── dist
├── gulpfile.js
├── index.html
├── node_modules
├── package.json
├── src
└── tmp
```

-src为源码目录

```sh
src
├── assets
│   ├── css
│   │   └── common.css  //页面的公共css
│   ├── img
│   │   ├── background.jpg
│   │   └── ganlight.jpeg
│   └── js
│       └── common.js  //页面的公共js
├── favicon.ico
├── index.html   //页面的入口文件
├── lib  外部的库文件
│   ├── css
│   │   └── font-awesome.min.css
│   ├── fastclick.min.js
│   ├── fonts
│   │   ├── FontAwesome.otf
│   │   ├── fontawesome-webfont.eot
│   │   ├── fontawesome-webfont.svg
│   │   ├── fontawesome-webfont.ttf
│   │   ├── fontawesome-webfont.woff
│   │   └── fontawesome-webfont.woff2
│   ├── jquery-2.1.1.min.js
│   └── zepto.min.js
├── views
│   ├── about
│   │   └── index.html
│   ├── //其他页面文件或文件夹
│   └── index.html
├── zen-css  //zenjs框架公共css模块
│   ├── button.css 等
├── zen-js  //zenjs框架公共js模块
│   └── zen.js 等
└── zen-module //zenjs框架公共module模块
    ├── alert   //每个组件都是独立的模块
    │   ├── index.css
    │   ├── index.html
    │   └── index.js

```
*/}
views["blog/markdown/zenjs/如何用zenjs写一个博客系统.md"] = function() {/*##如何用Zenjs写一个博客系统

##只需要一百来行代码就可以轻松完成
-目录结构
*/}