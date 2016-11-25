views.common_css = function() {/*<style>#app {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("assets/img/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>*/}
views.common_js = function() {/*<script>var App = {
    init: function() {
        this.bind();
    },
    bind: function() {
        $(".c-navmenu-banner .menu").click(function() {
            $("#app").toggleClass("nav-on");
        });
    }
}
$(function() {
    App.init();
})
</script>*/}
views.index_html = function() {/*<style>.c-navmenu-banner .title{font-size:1.6rem;color:#FFF}.c-navmenu-banner .menu{cursor:pointer}.c-navmenu-banner>div{position:relative;padding:1.1rem 1.5rem;font-size:2rem}.link-item{height:100px;width:64px;color:#FFF}.link-item i{font-size:2.4rem}.link-item .name{line-height:3rem;font-size:1.4rem}.link-item .white-line{height:.1rem;background:#FFF}</style><div class="zen-page v-center"><div class="c-navmenu-banner fix-top"><div class="text-center clearfix"><span class="logo fl"><i class="fa fa-paper-plane fa-fw white"></i><span class="white ml10 font16">ZENJS</span></span> <span class="title white"></span> <span class="fr menu"><i class="fa fa-bars fa-fw white"></i></span></div></div><ul class="link-list"><li class="link-item text-center" v-link="#example/index"><div><i class="fa fa-tree fa-fw white font32"></i></div><div class="name">MODULES</div><div class="white-line"></div></li><li class="link-item text-center" v-link="https://github.com/ganlight/zenjs"><div><i class="fa fa-code fa-fw white"></i></div><div class="name">GITHUB</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#about"><div><i class="fa fa-inbox fa-fw white font32"></i></div><div class="name">ABOUT</div><div class="white-line"></div></li></ul></div><script>$(function(){var n={init:function(){this.init_sidenav()},init_sidenav:function(){$(".c-navmenu-banner .menu").click(function(){SideNav.toggle("right")}),$(".c-navmenu-banner .logo").click(function(){SideNav.toggle("top")}),$(".c-side-nav").click(function(){SideNav.close()})}};Zen.ready(n)})</script>*/}
views.blog__index_html = function() {/*<style>.markdown-area{position:relative;background:#fff;margin:1.5rem 1.5rem 0;border-radius:.3rem;padding:1.5rem;margin-bottom:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal title"></h2><div class="markdown-area"></div><div class="catalog-area"></div><div class="page-template hide"><div class="list-item inline c-card clearfix"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div></div></div><script>$(function(){var t=[{title:"Zenjs install",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs",section:"begin",file:"begin-install"},{title:"Zenjs install2",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs",section:"begin",file:"begin-install2"}],i={articles:[],types:null,sections:null,map:{},init:function(t){this.articles=t||[],this.rend()},rend:function(){var t=this;if(this.articles&&this.articles.length>0)for(var i=(this.articles.length,this.articles),e=$(".catalog-area"),n=0;n<i.length;n++){var l=i[n],a=$(".page-template .list-item").clone();Store.data(a,l),t.map[l.type+"/"+l.file]=l,Util.rendValue(a,l),t.bind(a),e.append(a)}},get:function(t,i){var e=this.map[t+"/"+i]||"";return e},bind:function(t){t.click(function(){var i=Store.data(t);i&&i.file&&(window.location.href="#"+Util.getHash()+"?type="+i.type+"&file="+i.file)})}},e={init:function(){MarkDown.init(),i.init(t);var e=Util.getPar("type"),n=Util.getPar("file"),l=i.get(e,n);l&&MarkDown.load(l)}};Zen.ready(e)})</script>*/}
views.about__index_html = function() {/*<style>.zen-page p{margin:1.5rem;font-size:1.6rem;line-height:3rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">ABOUT ZENJS</h2><div class="c-card"><h3>zenjs信息</h3><p>- github地址：https://github.com/ganlight/zenjs.git<br>- 演示地址：https://ganlight.github.io/zenjs<br>- 作者邮箱：ganlight@foxmail.com</p></div><div class="c-card"><h3>特点</h3><p>- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷<br>- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。<br>- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。<br></p></div><div class="c-card"><h3>库说明</h3><p>- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)<br>- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可<br>- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可</p></div><div class="c-card"><h3>开发说明</h3><p>###zen目录<br>- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹<br>里面统一为index.css,index.html,index.js<br>###views目录<br>- modules文件夹这里面的每一个控件可以单独打开，可以使用。<br>- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用<br>###js目录<br>###css目录<br></p></div><div class="c-card"><h3>如何去构建</h3><p>- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器</p></div><div class="c-card"><h3>如何排除bug</h3><p>- 在console中输入Zen.current就能看到该页面相关的对象信息了</p></div><div class="c-card"><h3>其他</h3><p>- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。<br>- 感谢vuejs，weui，zepto，gulp这些优秀的库。</p></div><div class="lh15">&nbsp;</div></div>*/}
views.example__index_html = function() {/*<style>.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><h2 class="font24 white text-center normal">Zenjs Modules</h2><ul class="page-list" id="page-list"></ul><div class="lh15">&nbsp;</div><div class="page-template hide"><li class="list-item inline c-card clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"Message.alert('Zenjs')"},{name:"toast",action:"Message.toast(' A light framwork')"},{name:"confirm",action:"Message.confirm('Coding Zen!')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();Store.data(l,i),Util.rendValue(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=Store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};Zen.ready(Service)})</script>*/}
views.focus_time__index_html = function() {/*<style>.remain-time{font-size:5rem;color:#FFF}</style><div class="zen-page"><h2 class="font24 white text-center normal">FOCUS TIME</h2><div class="task-list"></div><div class="task-info text-center"><div class="remain-time"></div></div><div class="task-opt text-center"><span class="start-btn c-btn">开始</span> <span class="stop-btn c-btn">停止</span> <span class="rest-btn c-btn">休息</span></div></div><script>console.log("focus time")</script>*/}
views.front__green_html = function() {/*<style>.bg-green{color:green;font-size:20px;width:80%;height:100px}</style><div class="zen-page"><h2 class="font24 white text-center normal">ZEN PAGE</h2><div class="c-card bg-green v-center">green</div></div><script>console.log("green page")</script>*/}
views.front__page_html = function() {/*<style>.example-field{font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page example-field" v-script="views/example/js/toggle-group.js"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div>*/}
views.front__red_html = function() {/*<style>.bg-red{background:red;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-red v-center">red</div>*/}
views.example__multi_select__index_html = function() {/*<div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
views.example__single_page__multi_select_html = function() {/*<style>.zen-page{font-size:1.6rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};Zen.ready(l)})</script>*/}
views.example__single_page__toggle_group_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
views.example__toggle_group__index_html = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script>$(function(){var e={ele:"m-type",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},t={ele:"m-status",addAction:function(e){Message.toast("选择"+e.name)},delAction:function(e){Message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},a={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(t)}};Zen.ready(a)})</script>*/}
views.focus_time__index_js = function() {/*<script>$(function() {
    var tomato = {
        work: 25,
        rest: 5,
        times: 4
    }
    var Task = function(task) {
        var self = this;
        this.data = {};
        if (task) {
            this.data = task;
            if (task.status == "BEGIN") {
                this.data.interval = setInterval(function() {
                    self.refresh();
                }, 1000);
            }
            var current_time = new Date().getTime();
            task.used_time = current_time - task.begin_time;
            var remain_time = tomato.work * 60000 - task.used_time;
            var str = self.format(remain_time).str;
            $(".remain-time").text(str);

        } else {
            this.data.name = "";
            this.data.create_time = new Date().getTime();
            this.data.begin_time = "";
            this.data.end_time = "";
            this.data.used_time = "";
            this.data.remain_time = "";
            this.data.status = "INIT";
            this.data.interval = null;
            $(".remain-time").text("25:00");
        }
        return this;
    }

    Task.prototype = {
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
        start: function() {
            var self = this;
            var props = self.data;
            props.begin_time = new Date().getTime();
            props.status = "BEGIN";
            props.interval = setInterval(function() {
                self.refresh();
            }, 1000);
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        rest: function() {
            var self = this;
            var props = self.data;
            props.begin_time = new Date().getTime();
            props.status = "REST";
            if (!props.interval) {
                props.interval = setInterval(function() {
                    self.refresh();
                }, 1000);
            }
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        stop: function() {
            var self = this;
            var props = self.data;
            props.end_time = new Date().getTime();
            props.used_time = props.end_time - props.begin_time;
            if (self.format(props.used_time).min >= tomato.work) {
                props.status = "FINISH";
            } else {
                props.status = "STOP";
                clearInterval(props.interval);
            }
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        refresh: function() {
            var self = this;
            var props = self.data;
            if (props.status == "BEGIN") {
                var current_time = new Date().getTime();
                props.used_time = current_time - props.begin_time;
                var remain_time = tomato.work * 60000 - props.used_time;
                if (self.format(self.used_time).min >= tomato.work) {
                    props.status = "FINISH";
                    $(".remain-time").text("25:00");
                    clearInterval(props.interval);
                    Store.setLocal("FOCUS_TIME_CURRENT", "");
                    Message.alert("哇，你很棒哦，又完成了一项工作！");
                } else {
                    var str = self.format(remain_time).str;
                    $(".remain-time").text(str);
                }
            }
            if (props.status == "REST") {
                var current_time = new Date().getTime();
                props.used_time = current_time - props.begin_time;
                var remain_time = tomato.rest * 60000 - props.used_time;
                if (self.format(props.used_time).min >= tomato.rest) {
                    props.status = "INIT";
                    $(".remain-time").text("25:00");
                    clearInterval(props.interval);
                    Message.alert("休息完成，继续开始工作吧！");
                } else {
                    var str = self.format(remain_time).str;
                    $(".remain-time").text(str);
                }
            }

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
            console.log("focus-time");
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
views.blog__index_bak_css = function() {/*<style>code,pre{font-family:Menlo,Monaco,Andale Mono,Courier New,monospace}code{padding:1px 3px;font-size:12px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre,pre code{font-size:11px}pre code{padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}*{-webkit-print-color-adjust:exact}</style>*/}
views.blog__index_vue_css = function() {/*<style>.gutter pre{color:#999}pre{color:#525252}pre .constant,pre .function .keyword{color:#0092db}pre .attribute,pre .keyword{color:#e96900}pre .literal,pre .number{color:#ae81ff}pre .change,pre .clojure .built_in,pre .flow,pre .lisp .title,pre .nginx .title,pre .tag,pre .tag .title,pre .tex .special,pre .winutils{color:#2973b7}pre .class .title{color:#fff}pre .regexp,pre .symbol,pre .symbol .string,pre .value{color:#42b983}pre .title{color:#a6e22e}pre .addition,pre .apache .cbracket,pre .apache .tag,pre .attr_selector,pre .built_in,pre .django .filter .argument,pre .django .template_tag,pre .django .variable,pre .envvar,pre .haskell .type,pre .javadoc,pre .preprocessor,pre .prompt,pre .pseudo,pre .ruby .class .parent,pre .smalltalk .array,pre .smalltalk .class,pre .smalltalk .localvars,pre .sql .aggregate,pre .stream,pre .string,pre .subst,pre .tag .value,pre .tex .command{color:#42b983}pre .apache .sqbracket,pre .comment,pre .deletion,pre .doctype,pre .java .annotation,pre .pi,pre .python .decorator,pre .shebang,pre .template_comment,pre .tex .formula{color:#b3b3b3}pre .coffeescript .javascript,pre .javascript .xml,pre .tex .formula,pre .xml .cdata,pre .xml .css,pre .xml .javascript,pre .xml .vbscript{opacity:.5}body{font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:15px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#34495e;background-color:#fff;margin:0}body.docs{padding-top:61px}@media screen and (max-width:900px){body.docs{padding-top:0}}a{text-decoration:none;color:#34495e}img{border:none}h1,h2,h3,h4,strong{font-weight:600;color:#2c3e50}code,pre{font-family:Roboto Mono,Monaco,courier,monospace;font-size:.8em;background-color:#f8f8f8;-webkit-font-smoothing:initial;-moz-osx-font-smoothing:initial}code{color:#e96900;padding:3px 5px;margin:0 2px;border-radius:2px;white-space:nowrap}em{color:#7f8c8d}p{word-spacing:.05em}a.button{padding:.75em 2em;border-radius:2em;display:inline-block;color:#fff;background-color:#4fc08d;transition:all .15s ease;box-sizing:border-box;border:1px solid #4fc08d}a.button.white{background-color:#fff;color:#42b983}.highlight{overflow-x:auto;position:relative;padding:0;background-color:#f8f8f8;padding:.8em .8em .4em;line-height:1.1em;border-radius:2px}.highlight table,.highlight td,.highlight tr{width:100%;border-collapse:collapse;padding:0;margin:0}.highlight .gutter{width:1.5em}.highlight .code pre{padding:1.2em 1.4em;line-height:1.5em;margin:0}.highlight .code .line{min-height:1.5em}.highlight.bash .code:after,.highlight.css .code:after,.highlight.html .code:after,.highlight.js .code:after{position:absolute;top:0;right:0;color:#ccc;text-align:right;font-size:.75em;padding:5px 10px 0;line-height:15px;height:15px;font-weight:600}.highlight.html .code:after{content:'HTML'}.highlight.js .code:after{content:'JS'}.highlight.bash .code:after{content:'Shell'}.highlight.css .code:after{content:'CSS'}#main{position:relative;z-index:1;padding:0 60px 30px;overflow-x:hidden}#ad{width:125px;position:fixed;z-index:99;bottom:10px;right:10px;padding:10px;background-color:#fff;border-radius:3px;font-size:13px}#ad a{font-weight:400}#ad a,#ad span{display:inline-block;color:#7f8c8d}#ad span{margin-bottom:5px}#ad img{width:125px}#ad .carbon-img,#ad .carbon-text{display:block;margin-bottom:6px;font-weight:400;color:#34495e}#ad .carbon-poweredby{color:#aaa;font-weight:400}#nav .nav-link{cursor:pointer}#nav .nav-dropdown-container .nav-link:hover{border-bottom:none}#nav .nav-dropdown-container:hover .nav-dropdown{display:block}#nav .nav-dropdown-container.ecosystem,#nav .nav-dropdown-container.language{margin-left:20px}#nav .nav-dropdown{display:none;position:absolute;top:100%;left:0;background-color:#fff;padding:10px 0;border:1px solid #ddd;border-bottom-color:#ccc;text-align:left;border-radius:4px;white-space:nowrap}#nav .nav-dropdown li{line-height:1.8em;margin:0;display:block}#nav .nav-dropdown a{color:#7f8c8d;font-size:.9em;display:block;padding:0 24px 0 20px}#nav .nav-dropdown a:hover{color:#42b983}#nav .arrow{display:inline-block;vertical-align:middle;margin-top:-1px;margin-left:6px;margin-right:-14px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid #ccc}#header{background-color:#fff;height:$heading-inner-height;padding:10px 60px;position:relative;z-index:2}body.docs #header{position:fixed;width:100%;top:0}body.docs #nav{position:fixed}#nav{list-style-type:none;margin:0;padding:0;position:absolute;right:60px;top:10px;height:40px;line-height:40px}#nav .break{display:none}#nav li{display:inline-block;position:relative;margin:0 .6em}.nav-link{padding-bottom:3px}.nav-link.current,.nav-link:hover{border-bottom:3px solid #42b983}.search-query{height:30px;line-height:30px;box-sizing:border-box;padding:0 15px 0 30px;border:1px solid #e3e3e3;color:#2c3e50;outline:none;border-radius:15px;margin-right:10px;transition:border-color .2s ease;background:#fff url(/images/search.png) 8px 5px no-repeat;background-size:20px;vertical-align:middle!important}.search-query:focus{border-color:#42b983}#logo{display:inline-block;font-size:1.5em;line-height:40px;color:#2c3e50;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-weight:500}#logo img{vertical-align:middle;margin-right:6px;width:40px;height:40px}#mobile-bar{position:fixed;top:0;left:0;width:100%;height:40px;background-color:#fff;z-index:9;display:none;box-shadow:0 0 2px rgba(0,0,0,.25)}#mobile-bar .menu-button{position:absolute;width:24px;height:24px;top:8px;left:12px;background:url(../images/menu.png) 50% no-repeat;background-size:24px}#mobile-bar .logo{position:absolute;width:30px;height:30px;background:url(../images/logo.png) 50% no-repeat;top:5px;left:50%;margin-left:-15px;background-size:30px}#demo,.demo{border:1px solid #eee;border-radius:2px;padding:25px 35px;margin-bottom:40px;font-size:1.2em;line-height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:auto}#demo h1,.demo h1{margin:0 0 .5em;font-size:1.8em}#demo ol,#demo ul,.demo ol,.demo ul{padding-left:1.5em;padding-bottom:.2em!important}#demo ol:first-child,#demo ul:first-child,.demo ol:first-child,.demo ul:first-child{margin-top:0}#demo ol:last-child,#demo ul:last-child,.demo ol:last-child,.demo ul:last-child{margin-bottom:0}#demo li,.demo li{color:#34495e}#demo li.done,.demo li.done{color:#7f8c8d;text-decoration:line-through}#demo p,.demo p{margin:0!important;padding:0!important}#demo p:first-child,.demo p:first-child{margin-top:0}#demo p:last-child,.demo p:last-child{margin-bottom:0}#demo textarea,.demo textarea{width:100%;resize:vertical}ul#demo li,ul.demo li{margin-left:1.5em}@media screen and (max-width:900px){#demo,.demo{margin-left:0}}.benchmark-table{margin:0 auto;text-align:center}.benchmark-table tbody>tr>th{text-align:right}.benchmark-table td,.benchmark-table th{padding:3px 7px}.sponsors-page a,.sponsors-page img{width:120px;display:inline-block;vertical-align:middle}.sponsors-page a{margin:10px 20px}.content.guide[class*=migration] h2>sup,.content.guide[class*=migration] h3>sup{margin-left:.3em;color:#b9465c}.content.guide[class*=migration] .upgrade-path{padding:2em;background:rgba(73,195,140,.1);border-radius:2px}.content.guide[class*=migration] .upgrade-path>h4{margin-top:0}.content.guide[class*=migration] .upgrade-path>p:last-child{margin-bottom:0}.sidebar{position:absolute;z-index:10;top:61px;left:0;bottom:0;padding:40px 0 30px 60px;width:260px;margin-right:20px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}.sidebar h2{margin-top:.2em}.sidebar ul{list-style-type:none;margin:0;line-height:1.8em;padding-left:1em}.sidebar .version-select{vertical-align:middle;margin-left:5px}.sidebar .menu-root{padding-left:0}.sidebar .menu-sub{font-size:.85em}.sidebar .sidebar-link{color:#7f8c8d}.sidebar .sidebar-link.current{font-weight:600;color:#42b983}.sidebar .sidebar-link.new:after{content:"NEW";display:inline-block;font-size:10px;font-weight:600;color:#fff;background-color:#42b983;line-height:14px;padding:0 4px;border-radius:3px;margin-left:5px;vertical-align:middle;position:relative;top:-1px}.sidebar .sidebar-link:hover{border-bottom:2px solid #42b983}.sidebar .section-link.active{font-weight:700;color:#42b983}.sidebar .main-menu{margin-bottom:20px;display:none;padding-left:0}.sidebar .main-sponsor{color:#7f8c8d;font-size:.85em}.sidebar .main-sponsor a{margin:10px 0}.sidebar .become-backer,.sidebar .main-sponsor a,.sidebar .main-sponsor img{width:125px;display:inline-block}.sidebar .become-backer{border:1px solid #42b983;border-radius:2em;color:#42b983;font-size:.8em;padding:4px 0;text-align:center;margin-bottom:20px}@media screen and (max-width:900px){.sidebar{position:fixed;z-index:8;background-color:#f9f9f9;height:100%;top:0;left:0;padding:60px 30px 20px;box-shadow:0 0 10px rgba(0,0,0,.2);box-sizing:border-box;transition:all .4s cubic-bezier(.4,0,0,1);-webkit-transform:translate(-280px);transform:translate(-280px)}.sidebar .search-query{width:200px;margin-bottom:10px}.sidebar .main-menu{display:block}.sidebar.open{-webkit-transform:translate(0);transform:translate(0)}}#header{box-shadow:0 0 1px rgba(0,0,0,.25);transition:background-color .3s ease-in-out}.content{position:relative;padding:2.2em 0;max-width:600px;margin:0 auto}.content.api>a:first-of-type>h2{margin-top:0;padding-top:0}.content.api ul{padding-left:1.25em;line-height:1.4em}.content.api ul p,.content.api ul ul{margin:.6em 0}.content a.button{font-size:.9em;color:#fff;margin:.2em 0;width:180px;text-align:center;padding:12px 24px;display:inline-block;vertical-align:middle}.content img{max-width:100%}.content span.light{color:#7f8c8d}.content span.info{font-size:.85em;display:inline-block;vertical-align:middle;width:280px;margin-left:20px}.content h1{margin:0 0 1em}.content h2:before,.content h3:before{content:'';display:block;margin-top:-91px;height:91px;visibility:hidden}.content h2{margin:45px 0 .8em;padding-bottom:.7em;border-bottom:1px solid #ddd;z-index:-1}.content h3{margin:52px 0 1.2em;position:relative;z-index:-1}.content h3:after{content:"#";color:#42b983;position:absolute;left:-.7em;bottom:-2px;font-size:1.2em;font-weight:700}.content figure{margin:1.2em 0}.content ol,.content p,.content ul{line-height:1.6em;margin:1.2em 0 -1.2em;padding-bottom:1.2em;position:relative;z-index:1}.content ol,.content ul{padding-left:1.5em}.content a{color:#42b983;font-weight:600}.content blockquote{margin:2em 0;padding-left:20px;border-left:4px solid #42b983}.content blockquote p{font-weight:600;margin-left:0}.content iframe{margin:1em 0}.content p.tip{padding:12px 24px 12px 30px;margin:2em 0;border-left:4px solid #f66;background-color:#f8f8f8;position:relative;border-bottom-right-radius:2px;border-top-right-radius:2px}.content p.tip:before{position:absolute;top:14px;left:-12px;background-color:#f66;color:#fff;content:"!";width:20px;height:20px;border-radius:100%;text-align:center;line-height:20px;font-weight:700;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:14px}.content p.tip code{background-color:#efefef}.content p.tip em{color:#34495e}.guide-links{margin-top:2em;height:1em}.footer{color:#7f8c8d;margin-top:2em;padding-top:2em;border-top:1px solid #e5e5e5;font-size:.9em}#main.fix-sidebar .sidebar{position:fixed}@media screen and (min-width:1590px){#header{background-color:hsla(0,0%,100%,.4)}}@media screen and (max-width:1300px){.content.with-sidebar{margin-left:290px}#ad{z-index:7;position:relative;padding:0;bottom:0;right:0;float:right;padding:0 0 20px 30px}}@media screen and (max-width:900px){body{-webkit-text-size-adjust:none;font-size:14px}#header,#logo{display:none}.nav-link{padding-bottom:1px}.nav-link.current,.nav-link:hover{border-bottom:2px solid #42b983}#mobile-bar{display:block}#main{padding:2em 1.4em 0}.highlight pre{padding:1.2em 1em}.content.with-sidebar{margin:auto}.content h2:before,.content h3:before{content:'';display:block;margin-top:-70px;height:70px;visibility:hidden}.footer{margin-left:0;text-align:center}}@media screen and (max-width:560px){#downloads{text-align:center;margin-bottom:25px}#downloads .info{margin-top:5px;margin-left:0}iframe{margin:0!important}}</style>*/}
views.blog__index_css = function() {/*<style>code,pre{font-family:Menlo,Monaco,Andale Mono,Courier New,monospace}code{padding:1px 3px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;font-size:1.4rem;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre code{font-size:1.2rem;padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}*{-webkit-print-color-adjust:exact}</style>*/}
views.focus_time__index_css = function() {/*<style>::-webkit-scrollbar-track-piece{background:#f5f5f5;border-left:1px solid #d2d2d2}::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-thumb{background:#c2c2c2;background-clip:padding-box;border:1px solid #979797;min-height:28px}::-webkit-scrollbar-thumb:hover{border:1px solid #636363;background:#929292}body{font-family:Tahoma,Arial,MS Trebuchet,sans-serif;font-size:14px}button,input,label{display:block;margin:10px auto}#title{margin:10px auto;width:500px;text-align:center;font-size:60px}#remainTime{text-align:center;font-size:180px}#progressBar,#progressBarBorder{width:500px;height:15px;overflow:hidden}#progressBarBorder{display:block;margin:10px auto;border:1px solid #fff;box-shadow:1px 1px 15px #000}#progressBar{background:blue}#control{margin:10px auto;width:500px}.taskLeave{background:#ff0}.taskDone{background:blue}.taskStop{background:red}.copyright{margin:50px auto;text-align:center}</style>*/}
views.example__multi_select__index_css = function() {/*<style>.zen-page{font-size:1.6rem}</style>*/}