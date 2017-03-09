Zen.views["common_css"] = function() {/*<style>.zen-bg {
    background: #141E30;
    background: linear-gradient(to left, #141E30, #243B55);
}

h2 {
    margin: 0;
    line-height: 60px;
}

body {
    background-color: rgba(31, 35, 36, 1);
}

@media screen and (max-width: 980px) {
}

@media screen and (max-width: 736px) {
    .menu-nav {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .menu-nav {
        display: none;
    }
}
</style>*/}
var App = {
    init: function() {
        zen.init();
        this.bind();
    },
    bind: function() {
    }
}

App.init();

Zen.views["index-wap.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.c-navmenu-banner .title{font-size:1.6rem;color:#FFF}.c-navmenu-banner .menu{cursor:pointer}.c-navmenu-banner>div{position:relative;padding:1.1rem 1.5rem;font-size:2rem}.link-item{height:100px;width:64px;color:#FFF}.link-item i{font-size:2.4rem}.link-item .name{line-height:3rem;font-size:1.4rem}.link-item .white-line{height:.1rem;background:#FFF}.info{margin:65px auto 0;color:#bfbfbf;font-size:1.2rem;text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none}.info a:hover{text-decoration:underline}</style><div class="zen-page v-center"><div class="c-navmenu-banner fix-top"><div class="text-center clearfix"><span class="logo fl"><i class="fa fa-paper-plane fa-fw white"></i><span class="white ml10 font16">ZENJS</span></span> <span class="title white"></span> <span class="fr menu"><i class="fa fa-bars fa-fw white"></i></span></div></div><ul class="link-list"><li class="link-item text-center" v-link="#example/index"><div><i class="fa fa-tree fa-fw white font32"></i></div><div class="name">MODULES</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#blog/catalog"><div><i class="fa fa-bookmark fa-fw white font32"></i></div><div class="name">BLOG</div><div class="white-line"></div></li><li class="link-item text-center" v-link="https://github.com/ganlight/zenjs"><div><i class="fa fa-code fa-fw white"></i></div><div class="name">GITHUB</div><div class="white-line"></div></li><li class="link-item text-center" v-link="#about"><div><i class="fa fa-inbox fa-fw white font32"></i></div><div class="name">ABOUT</div><div class="white-line"></div></li></ul><footer class="info fix-bottom"><p>Zenjs Written by <a href="http://zenjs.cn">ganlight</a></p><p>© 2009-2016 zenjs.cn 版权所有 <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备16113949号</a></p></footer></div><script>$(function(){var n={init:function(){this.init_sidenav()},init_sidenav:function(){$(".c-navmenu-banner .menu").click(function(){SideNav.toggle("right")}),$(".c-navmenu-banner .logo").click(function(){SideNav.toggle("top")}),$(".c-side-nav .c-ul li").click(function(n){n.preventDefault(),SideNav.close(),zen.url.go($(this).attr("v-link"))})}};zen.page.ready(n)})</script>*/}
Zen.views["index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.main-container{width:80%}</style><div class="zen-page v-center"><div class="main-container"><zen-slot name="layout/home-nav.html"></zen-slot><zen-slot name="layout/footer.html"></zen-slot></div></div>*/}
Zen.views["about/index.html"] = function() {/*<style>.zen-page p{margin:1.5rem;font-size:1.6rem;line-height:3rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">ABOUT ZENJS</h2><div class="c-card"><h3>zenjs信息</h3><p>- github地址：https://github.com/ganlight/zenjs.git<br>- 演示地址：https://ganlight.github.io/zenjs<br>- 作者邮箱：ganlight@foxmail.com</p></div><div class="c-card"><h3>特点</h3><p>- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷<br>- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。<br>- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。<br></p></div><div class="c-card"><h3>库说明</h3><p>- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)<br>- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可<br>- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可</p></div><div class="c-card"><h3>开发说明</h3><p>###zen目录<br>- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹<br>里面统一为index.css,index.html,index.js<br>###views目录<br>- modules文件夹这里面的每一个控件可以单独打开，可以使用。<br>- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用<br>###js目录<br>###css目录<br></p></div><div class="c-card"><h3>如何去构建</h3><p>- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器</p></div><div class="c-card"><h3>如何排除bug</h3><p>- 在console中输入Zen.current就能看到该页面相关的对象信息了</p></div><div class="c-card"><h3>其他</h3><p>- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。<br>- 感谢vuejs，weui，zepto，gulp这些优秀的库。</p></div><div class="lh15">&nbsp;</div></div>*/}
Zen.views["douban/index.html"] = function() {/*<style></style><div class="zen-page"><div class="info"></div></div><script src="https://api.douban.com/v2/book/1220562" id="test" type="text/template"></script><script>$(function(){var n={init:function(){var n="https://api.douban.com/v2/book/1220562",t=this,o=new XMLHttpRequest,t=this;o.open("GET",n),o.onload=function(){t.commits=JSON.parse(o.responseText),console.log(t.commits[0].html_url)},o.send()}},t={init:function(){n.init()}};zen.page.ready(t)})</script>*/}
Zen.views["example/index.html"] = function() {/*<style>.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><h2 class="font24 white text-center normal">Zenjs Modules</h2><ul class="page-list" id="page-list"></ul><div class="lh15">&nbsp;</div><div class="page-template hide"><li class="list-item inline c-card clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"zen.message.alert('Zenjs')"},{name:"toast",action:"zen.message.toast(' A light framwork')"},{name:"confirm",action:"zen.message.confirm('Coding Zen!')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();zen.store.data(l,i),zen.template.values(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=zen.store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};zen.page.ready(Service)})</script>*/}
Zen.views["focus-time/index.html"] = function() {/*<style>.zen-page{position:relative;max-width:none;margin:0 auto}.work-area{height:83.33%;position:absolute;width:100%;text-align:center;background:#0ff}.rest-area{height:16.67%;position:absolute;top:83.33%;background:#008b8b;width:100%}.remain-time{font-size:8rem;color:#FFF}</style><div class="zen-page"><div class="work-area v-center"><div class="remain-time"></div></div><div class="rest-area v-center"><div class="task-opt text-center"><span class="start-btn c-btn">开始</span> <span class="stop-btn c-btn">停止</span> <span class="rest-btn c-btn">休息</span></div></div></div><script>console.log("focus time")</script>*/}
Zen.views["front/green.html"] = function() {/*<style>.bg-green{color:green;font-size:20px;width:80%;height:100px}</style><div class="zen-page"><h2 class="font24 white text-center normal">ZEN PAGE</h2><div class="c-card bg-green v-center">green</div></div><script>console.log("green page")</script>*/}
Zen.views["front/page.html"] = function() {/*<style>.example-field{font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page example-field" v-script="views/example/js/toggle-group.js"><ul><li><div id="m-type" v-zen="toggle-group"></div></li><br><li><div id="m-status" v-zen="toggle-group"></div></li></ul></div>*/}
Zen.views["front/red.html"] = function() {/*<style>.bg-red{background:red;font-size:20px;position:absolute;width:100%;height:100%}</style><div class="zen-page bg-red v-center">red</div>*/}
Zen.views["gradients/index.html"] = function() {/*<style>.zen-page{max-width:none}.card{position:absolute;width:90%;height:90%;background:#FFF;top:5%;left:5%;border-radius:.5rem;transition:all .2s}.bg-info{color:#FFF;margin:1.5rem}.intro-field{position:absolute;width:100%;bottom:30px;text-align:center;margin:0 auto;background:#FFF;padding:15px 0}.intro-logo{width:110px}.intro-text{margin:0;padding:0;font-size:12px;color:#979292;letter-spacing:.03rem}.about-field{position:absolute;background:#FFF;right:0;bottom:50%;color:#564141;height:50px;font-size:1.2rem}.about-field .about-toggle{display:inline-block;width:50px;text-align:center;border-right:1px solid #eee;vertical-align:bottom}.about-field .about-toggle i{display:inline-block;height:16px;width:20px;font-size:16px;padding:17px}.about-field .about-detail{display:inline-block;padding:9px;display:none;transition:all .2s}.on .about-detail{display:inline-block}.info-field{position:absolute;color:#FFF;padding:15px;right:0;top:0;font-size:1.6rem}</style><div class="zen-page"><div class="card"><div class="font24 bg-info lh20"><div class="font16 bold name lh30"></div><div class="font14">color 1 : <span class="color1"></span></div><div class="font14">color 2 : <span class="color2"></span></div></div><div class="intro-field" v-link="#gradients/list"><img class="intro-logo" src="http://uigradients.com/assets/images/logo.png" alt="Ui Gradients"><div class="intro-text">Beautiful color gradients</div></div><div class="about-field"><span class="about-toggle"><i class="fa fa-info fa-fw green"></i> </span><span class="about-detail"><span class="yellow"><span v-link="http://uigradients.com/">Ui Gradients</span> by <span v-link="http://twitter.com/_ighosh" id="twitter-link" target="_blank">@_ighosh</span></span><br><span>rewrite zenjs by ganlight</span></span></div></div></div><script>$(function(){var e={ele:null,init:function(){var t=this.ele=$(".card"),n=zen.store.getLocal("COLOR");this.change(n),e.reset(t),$(window).resize(function(){e.reset(t)}),this.bind()},reset:function(e,t){if(!t)var t=15;var n=window.innerWidth||document.body&&document.body.clientWidth,i=window.innerHeight||document.body&&document.body.clientHeight;this.width=n-2*t,this.height=i-2*t;var o={width:n-2*t,height:i-2*t,left:t,top:t};e.css(o)},change:function(e){if(e&&e.name)var t=e;else var n=zen.gradients,i=parseInt(Math.random()*n.length),t=n[i];var o={backgroundColor:t.colors[1],backgroundImage:"linear-gradient(to left, "+t.colors[0]+", "+t.colors[1]+")"};this.ele.find(".name").text(t.name),this.ele.find(".color1").text(t.colors[0]),this.ele.find(".color2").text(t.colors[1]),this.ele.css(o)},bind:function(){this.ele.click(function(){e.change()})}},t={init:function(){e.init(),this.bind()},bind:function(){$(".about-toggle").click(function(e){e.preventDefault(),e.stopPropagation(),$(".about-field").toggleClass("on")})}};zen.page.ready(t)})</script>*/}
Zen.views["gradients/list.html"] = function() {/*<style>.zen-page{max-width:none}.gradients-item{display:block;padding:60px 0;text-align:center;color:#FFF;font-size:1.6rem;margin:10px;transition:all .2s}</style><div class="zen-page"><ul class="gradients-list"></ul><div class="page-template hide"><li class="gradients-item"><span class="name"></span></li></div></div><script>$(function(){var n={data:null,init:function(){this.data=zen.gradients,this.rend()},rend:function(){for(var n=this,t=this.data,e=$(".gradients-list"),a=0;a<t.length;a++){var i=t[a],o=$(".page-template .gradients-item").clone(),r={backgroundColor:i.colors[1],backgroundImage:"linear-gradient(to left, "+i.colors[0]+", "+i.colors[1]+")"};o.find(".name").text(i.name),o.css(r),zen.store.data(o,i),zen.template.values(o,i),n.bind(o),e.append(o)}},bind:function(n){n.click(function(t){var e=zen.store.data(n);zen.store.setLocal("COLOR",e),zen.url.go("#gradients")})}},t={init:function(){n.init(),this.bind()},bind:function(){$(".about-toggle").click(function(n){n.preventDefault(),n.stopPropagation(),$(".about-field").toggleClass("on")})}};zen.page.ready(t)})</script>*/}
Zen.views["todo/index.html"] = function() {/*<style>.zen-cur{background:#f5f5f5;color:#4d4d4d;max-width:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{outline:medium}.filters a{outline:0;blr:expression(this.onFocus=this.blur())}</style><div class="zen-page"><div class="todoapp"><div class="header"><h1>todos</h1><input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"></div><section class="main"><input class="toggle-all" type="checkbox" v-model="allDone"><ul class="todo-list"></ul></section><footer class="footer" v-show="todos.length" v-cloak><span class="todo-count"><strong class="remaining"></strong> items left</span><ul class="filters"><li><a href="javascript:void(0);" class="selected" filter="">All</a></li><li><a href="javascript:void(0);" filter="active">Active</a></li><li><a href="javascript:void(0);" filter="completed">Completed</a></li></ul><button class="clear-completed">Clear completed</button></footer></div><footer class="info"><p>Double-click to edit a todo</p><p>Zenjs-Todo Written by <a href="http://zenjs.cn">ganlight</a></p><p>Part of <a href="http://evanyou.me">Evan You</a> and <a href="http://todomvc.com">TodoMVC</a></p></footer><div class="page-template hide"><li class="todo-item"><div class="view"><input class="toggle" type="checkbox"><label class="todo-name title"></label><button class="destroy"></button></div><input class="edit" type="text"></li></div></div>*/}
Zen.views["layout/footer.html"] = function() {/*<style>footer.info{text-align:center;color:#FFF;font-size:12px}footer.info a{text-align:center;color:#FFF;font-size:12px}</style><footer class="info"><div class="lh25">Design and Written by <a href="http://ganlight.com">ganlight</a></div><div class="mb15">© 2016-2017 ganlight.com 版权所有 <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备16113949号</a></div></footer><script>$(function(){})</script>*/}
Zen.views["layout/home-nav.html"] = function() {/*<style>.home-nav{position:relative;color:#FFF;max-width:800px;margin:0 auto}.home-nav .nav-line{height:1px;background-color:#FFF}.home-nav .nav-btn{display:inline-block;font-size:16px;border:1px solid #FFF;line-height:40px;height:40px;width:200px;text-align:center;margin:-1px auto}.home-nav .nav-mid{height:1px;width:556px;background-color:#FFF;transform:rotate(-45%);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);position:absolute;left:50%;margin-left:-278px}.home-nav .nav-top .nav-items{border-left:1px solid #58677a;margin-left:50px;padding:15px 0;width:150px}.home-nav .nav-bot .nav-items{border-right:1px solid #58677a;margin-right:50px;padding:15px 0;width:150px;float:right}.home-nav .nav-items li{position:relative;display:block;line-height:40px;padding:0 25px;transition:all .2s;border-bottom:2px solid transparent}.home-nav .nav-items li:hover{color:#FFF;border-bottom:2px solid #FFF;padding:0 40px}.home-nav .nav-bot{position:relative;text-align:right}</style><nav class="home-nav clearfix"><div class="nav-top"><div class="text-right lh30">大道至简，衍化至繁</div><div class="nav-line"></div><span class="nav-btn">GANLIGHT</span><div class="menu-box clearfix"><ul class="nav-items"><li v-link="#ganlight/blog/catalog">BLOG</li><li v-link="#ganlight/desgin">DESGIN</li><li v-link="#ganlight/about">ABOUT</li></ul></div></div><div class="nav-mid"></div><div class="nav-bot"><div class="menu-box clearfix"><ul class="nav-items"><li v-link="#zenjs">INTRO</li><li v-link="#zenjs/api">API</li><li v-link="#zenjs/demo">DEMO</li></ul></div><span class="nav-btn">ZENJS</span><div class="nav-line"></div><div class="text-left lh30">大道无形，道法自然</div></div></nav>*/}
Zen.views["layout/menu.html"] = function() {/*<style>.zen-page{height:100%}.menu-nav{position:relative;color:#FFF;transition:all .2s;background-color:#141E30;background:linear-gradient(to left,#141E30,#243B55);margin-bottom:80px}.menu-nav .nav-line{position:relative;height:1px;background-color:#FFF}.menu-nav .nav-btn{display:inline-block;font-size:16px;border:1px solid #FFF;line-height:40px;height:40px;width:200px;text-align:center;margin:-1px auto}.menu-nav .nav-mid{height:1px;width:60px;background-color:#FFF;transform:rotate(-45%);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);position:absolute;left:50%;margin-left:-30px}.menu-nav .nav-items{display:inline-block}.menu-nav .nav-right{float:right;text-align:right}.menu-nav .nav-items li{position:relative;display:inline-block;max-width:100px;line-height:40px;padding:0 25px;transition:all .2s;border-bottom:2px solid transparent}.menu-nav .nav-items li:hover{color:#FFF;border-bottom:2px solid #FFF;padding:0 40px}.menu-nav .nav-bot{position:relative;text-align:right}.menu-nav.show-menu{position:fixed;width:100%;top:0;left:0;z-index:100}.menu-nav.show-menu .nav-top{display:none}</style><nav class="menu-nav inline"><div class="container"><div class="nav-top clearfix"><span class="fl lh30">大道至简，衍化至繁</span> <span class="fr lh30">大道无形，道法自然</span></div><div class="nav-line mt5"><div class="nav-mid"></div></div><div class="nav-left span6"><span class="nav-btn">GANLIGHT</span><ul class="nav-items"><li v-link="#/ganlight/blog">BLOG</li><li v-link="#/ganlight/desgin">DESGIN</li><li v-link="#/ganlight/about">ABOUT</li></ul></div><div class="nav-right span6"><ul class="nav-items"><li v-link="#/zenjs">INTRO</li><li v-link="#/zenjs/api">API</li><li v-link="#/zenjs/demo">DEMO</li></ul><span class="nav-btn">ZENJS</span></div></div></nav><script>$(function(){var n={init:function(){$(window).scroll(function(){$(window).scrollTop()>65?$(".menu-nav").addClass("show-menu"):$(".menu-nav").removeClass("show-menu")})}};n.init()})</script>*/}
Zen.views["blog/catalog/index.html"] = function() {/*<style>.banner-area{line-height:5rem;z-index:101}.banner-area .back-btn{background:currentColor}.banner-area .catalog-area{background:#5f9ea0}.articles-area{padding-top:5rem}.articles-area .article-item{display:block;margin:1rem;background:#f8f8ff;padding:1rem}.articles-area .article-item .title{padding-bottom:5px}.catalog-area .catalog-list{display:none}.mask-on .catalog-list{display:block}</style><div class="zen-page"><div class="banner-area inline clearfix fix-top text-center"><div class="back-btn span4" v-link="#index"><i class="fa fa-paper-plane fa-fw white"></i> <span class="white ml10 font16">ZENJS</span></div><div class="catalog-area span8 white font16"><div class="catalog-title">目录</div><ul class="catalog-list"></ul></div></div><ul class="articles-area"></ul><div class="page-template hide"><div class="article-item"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div><div class="catalog-item"><span class="type_name"></span> <span class="type_num"></span></div></div></div><script v-script="views/blog/config.js"></script><script>$(function(){var t={articles:[],types:{},sections:null,map:{},init:function(){ZEN_ARTICLES&&(this.articles=ZEN_ARTICLES,this.pre(),this.rendType(this.types),this.rendArticles(this.articles))},pre:function(){var t=this;if(this.articles&&this.articles.length>0)for(var e=(this.articles.length,this.articles),i=0;i<e.length;i++){var n=e[i];n.id=i,t.types[n.type]||(t.types[n.type]=[]),t.types[n.type].push(n)}},rendType:function(t){var e=this;if(t){var i=$(".catalog-list");for(var n in t){var a=$(".page-template .catalog-item").clone();zen.store.data(a,t[n]),a.find(".type_name").text(n),a.attr("data-type",n),a.find(".type_num").text(t[n].length),e.bindType(a),i.append(a)}}},rendArticles:function(t){var e=this;if(t&&t.length>0){var i=(t.length,t),n=$(".articles-area");n.empty();for(var a=0;a<i.length;a++){var r=i[a],s=$(".page-template .article-item").clone();zen.store.data(s,r),zen.template.values(s,r),e.bindArticle(s),n.append(s)}}},get:function(t,e){var i=this.map[t+"/"+e]||"";return i},bindType:function(t){var e=this;t.click(function(){var t=$(this).attr("data-type");if(t){var i=e.types[t];e.rendArticles(i)}})},bindArticle:function(t){t.click(function(){var e=zen.store.data(t);e&&e.id>-1&&(window.location.href="#blog/article?id="+e.id)})}},e={init:function(){this.data=t,t.init(),this.bind()},bind:function(){$(".catalog-area").click(function(){$(".zen-container").toggleClass("mask-on")})}};zen.page.ready(e)})</script>*/}
Zen.views["blog/article/index.html"] = function() {/*<div class="zen-page"><div class="banner-area inline clearfix fix-bottom text-center"><div class="pre-btn span3"><i class="fa fa-arrow-left fa-fw white"></i><span class="white ml5">上一篇</span></div><div class="catalog-type span6 white font16" v-link="#blog/catalog">目录</div><div class="next-btn span3"><span class="white mr5">下一篇</span><i class="fa fa-arrow-right fa-fw white"></i></div></div><h2 class="font24 white text-center normal title"></h2><div class="markdown-area content"></div><div class="catalog-area"></div><div class="page-template hide"><div class="list-item inline c-card clearfix"><div class="font20 title"></div><div class="font16 gray"><span class="type"></span>/<span class="file"></span></div></div></div></div><script v-script="views/blog/config.js"></script>*/}
Zen.views["example/multi-select/index.html"] = function() {/*<div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
Zen.views["example/single-page/multi-select.html"] = function() {/*<style>.zen-page{font-size:1.6rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)})</script>*/}
Zen.views["example/single-page/toggle-group.html"] = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
Zen.views["example/toggle-group/index.html"] = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul><div class="lh30">&nbsp;</div></div><script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)})</script>*/}
Zen.views["ganlight/blog/article/index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.banner-area{line-height:5rem;bottom:-.1rem}.banner-area .next-btn,.banner-area .pre-btn{background:currentColor}.banner-area .catalog-type{background:#5f9ea0}.markdown-area{position:relative;margin:0 auto;max-width:900px;margin-bottom:50px;padding:1rem;display:none;color:rgb(255,255,255,.8)}.title{display:inline-block;font-size:18px;color:rgba(155,140,103,1);border-bottom:1px dashed rgba(155,140,103,1);line-height:40px;height:40px;margin-bottom:10px}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><div class="markdown-area content"></div></div><zen-slot name="layout/footer.html"></zen-slot></div><script v-script="views/blog/config.js"></script>*/}
Zen.views["ganlight/blog/catalog/index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.articles-area{margin:0 auto;max-width:900px;margin-top:30px;margin-bottom:50px}.article-item{position:relative;margin-bottom:30px}.article-item .title{display:inline-block;font-size:18px;color:rgba(155,140,103,1);border-bottom:1px dashed rgba(155,140,103,1);line-height:40px;height:40px;margin-bottom:10px}.article-item .desc{font-size:14px;color:#FFF;line-height:20px;letter-spacing:1px;justify-content:center}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><ul class="articles-area"></ul><div class="page-template hide"><div class="article-item" v-link=""><span class="font20 title"></span><div class="font16"><span class="desc"></span></div></div><div class="catalog-item"><span class="type_name"></span> <span class="type_num"></span></div></div></div><zen-slot name="layout/footer.html"></zen-slot></div><script v-script="views/ganlight/blog/config.js"></script><script>$(function(){var t={articles:[],types:{},sections:null,map:{},init:function(){ZEN_ARTICLES&&(this.articles=ZEN_ARTICLES,this.pre(),this.rendType(this.types),this.rendArticles(this.articles)),$("footer").removeClass("fix-bottom")},pre:function(){var t=this;if(this.articles&&this.articles.length>0)for(var e=(this.articles.length,this.articles),i=0;i<e.length;i++){var n=e[i];n.id=i,t.types[n.type]||(t.types[n.type]=[]),t.types[n.type].push(n)}},rendType:function(t){var e=this;if(t){var i=$(".catalog-list");for(var n in t){var a=$(".page-template .catalog-item").clone();zen.store.data(a,t[n]),a.find(".type_name").text(n),a.attr("data-type",n),a.find(".type_num").text(t[n].length),e.bindType(a),i.append(a)}}},rendArticles:function(t){var e=this;if(t&&t.length>0){var i=(t.length,t),n=$(".articles-area");n.empty();for(var a=0;a<i.length;a++){var r=i[a],s=$(".page-template .article-item").clone();zen.store.data(s,r),zen.template.values(s,r),e.bindArticle(s),n.append(s)}}},get:function(t,e){var i=this.map[t+"/"+e]||"";return i},bindType:function(t){var e=this;t.click(function(){var t=$(this).attr("data-type");if(t){var i=e.types[t];e.rendArticles(i)}})},bindArticle:function(t){t.click(function(){var e=zen.store.data(t);e&&e.id>-1&&(window.location.href="#ganlight/blog/article?id="+e.id)})}},e={init:function(){this.data=t,t.init(),this.bind()},bind:function(){$(".catalog-area").click(function(){$(".zen-container").toggleClass("mask-on")})}};zen.page.ready(e)})</script>*/}
Zen.views["blog/config.js"] = function() {/*<script>var ZEN_ARTICLES=[{title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"}],CATALOG_TMP={type:"catalog",name:"zenjs 框架",data:[{}]},ARTICLE_TMP={type:"article",name:"zenjs 框架",path:"zen/zenjs 框架.md",public:"2016-11-25 14:00",auther:"ganlight",tag:"zenjs javascript"},ZENJS_BLOG={zenjs:{type:"catalog",name:"zenjs 框架",data:[{type:"article",title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",file:"install"}]}};</script>*/}
Zen.views["focus-time/index.js"] = function() {/*<script>$(function(){var t={work:25,rest:5,times:4,message:{init:"开始一个番茄钟",success:"哇，你很棒哦，又完成了一项工作！",stop:"要不再坚持一会?"}},s={loop:null,tick:function(t,s){var e=this;s&&!this.loop?this.loop=setInterval(function(){e.refresh(t)},100):(clearInterval(this.loop),this.loop=null,zen.store.setLocal("FOCUS_TIME_CURRENT",t))},format:function(t){var s={min:"00",sec:"00",str:"00:00"};if(t>=0){var e=t/1e3;s.min=parseInt(e/60)>9?parseInt(e/60):"0"+parseInt(e/60),s.sec=parseInt(e%60)>9?parseInt(e%60):"0"+parseInt(e%60),s.str=s.min+":"+s.sec}return s},refresh:function(e){var a=0,r=6e4*t.work,n=6e4*t.rest;if("WORK_INIT"==e.status&&(a=r,$(".start-btn").removeClass("hide")),"WORK_START"==e.status){var i=(new Date).getTime();a=r-(i-e.work_start),$(".stop-btn").removeClass("hide"),a<0&&(e.status="WORK_DONE",s.tick(e,!1),$(".rest-btn").removeClass("hide"))}if("WORK_DONE"==e.status&&(zen.message.alert(t.message.success),e.status="REST_INIT",a=n),"WORK_STOP"==e.status&&(a=r-(e.work_stop-e.work_start),s.tick(e,!1)),"REST_INIT"==e.status&&(a=n),"REST_START"==e.status){var i=(new Date).getTime();a=n-(i-e.rest_start),a<0&&(e.status="REST_DONE",s.tick(e,!1))}"REST_DONE"==e.status&&(e.status="WORK_INIT",a=r),zen.store.setLocal("FOCUS_TIME_CURRENT",e);var o=this.format(a).str;$(".remain-time").text(o)}},e=function(t){return this.data={},this.interval=null,t?(this.data=t,"WORK_START"!=t.status&&"REST_START"!=t.status||s.tick(t,!0)):(t=this.data,t.name="",t.work_init=(new Date).getTime(),t.work_start="",t.work_done="",t.work_stop="",t.rest_init="",t.rest_start="",t.rest_done="",t.rest_stop="",t.status="WORK_INIT"),s.refresh(t),this};e.prototype={start:function(){var t=this,e=t.data;e.work_start=(new Date).getTime(),e.status="WORK_START",s.tick(e,!0)},rest:function(){var t=this,e=t.data;e.rest_start=(new Date).getTime(),e.status="REST_START",s.tick(e,!0)},stop:function(){var t=this,e=t.data;e.work_stop=(new Date).getTime(),e.status="WORK_STOP",s.tick(e,!1)}};var a={current:null,init:function(){var t=zen.store.getLocal("FOCUS_TIME_CURRENT");t?this.current=new e(t):this.current=new e}},r={task:null,init:function(){a.init(),this.task=a.current,this.bind()},bind:function(){var t=this;$(".start-btn").click(function(){t.task.start()}),$(".stop-btn").click(function(){t.task.stop()}),$(".rest-btn").click(function(){t.task.rest()})}};zen.page.ready(r)});</script>*/}
Zen.views["todo/index.js"] = function() {/*<script>$(function(){var t={key:"ZENJS_TODO",get:function(){var t=zen.store.getLocal(this.key)||[];return $.each(t,function(t,e){t.id=e}),this.uid=t.length,t},save:function(t){zen.store.setLocal(this.key,t)}},e={todos:[],init:function(){this.todos=t.get();for(i in this.todos)this.rend(this.todos[i]);this.watch()},rend:function(t){var e=$(".todo-list"),i=$(".page-template .todo-item").clone();zen.store.data(i,t),zen.template.values(i,t),t.completed?(i.addClass("completed"),i.find(".toggle").prop("checked",!0)):(i.addClass("active"),i.find(".toggle").prop("checked",!1)),o(i),e.append(i)},save:function(){var e=this.todos=[];$(".todo-list .todo-item").each(function(){var t=zen.store.data($(this));t&&e.push(t)}),t.save(this.todos),this.watch()},add:function(){var e=$(".new-todo").val(),o=e&&e.trim();if(o){var i={id:t.uid++,title:o,completed:!1};this.rend(i),$(".new-todo").val(""),this.save()}},watch:function(){var t=$(".todo-list .todo-item.active").length,e=$(".todo-list .todo-item.completed").length;$(".remaining").text(t),e>0?$(".clear-completed").show():$(".clear-completed").hide();var o=$(".filters a.selected"),i=o.attr("filter");i?($(".todo-list .todo-item").hide(),$(".todo-list .todo-item."+i).show()):$(".todo-list .todo-item").show()}},o=function(t){t.find(".destroy").click(function(){var o=zen.store.data(t);o&&(t.remove(),e.save())}),t.find(".toggle").click(function(){var o=zen.store.data(t);o&&(o.completed?o.completed=!1:o.completed=!0,t.toggleClass("completed"),t.toggleClass("active"),zen.store.data(t,o),e.save())}),t.find(".title").dblclick(function(){var e=zen.store.data(t);e&&(t.addClass("editing"),t.find(".edit").val(e.title),t.find(".edit").focus())}),t.find(".edit").blur(function(){var o=zen.store.data(t);o&&(o.title=t.find(".edit").val(),o.title&&o.title.trim()?(t.find(".title").text(o.title),t.removeClass("editing"),zen.store.data(t,o)):t.remove(),e.save())})},d={init:function(){e.init(),this.bind()},bind:function(){$(".new-todo").keyup(function(t){13==t.keyCode&&e.add()}),$(".filters a").click(function(){var t=$(this);$(".filters a").removeClass("selected"),t.addClass("selected"),e.watch()}),$(".clear-completed").click(function(){$(".todo-list .todo-item.completed").remove(),e.save()}),$(".toggle-all").click(function(){var t=$(".toggle-all").attr("checked");$(".todo-list .todo-item").each(function(){var e=$(this),o=zen.store.data(e);o&&(t?(o.completed=!0,e.addClass("completed"),e.removeClass("active")):(o.completed=!1,e.removeClass("completed"),e.addClass("active")),e.find(".toggle").prop("checked",o.completed),zen.store.data(e,o))}),e.save()})}};zen.page.ready(d)});</script>*/}
Zen.views["blog/article/index.js"] = function() {/*<script>$(function(){var MarkDown={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".title").html("暂不支持markdown")},rend:function(e,a){if(this.converter&&a){var t=this.converter.makeHtml(a);$(".title").html(e.title),$(".markdown-area").html(t).show()}},load:function(article){var self=this,url='Zen.views["blog/markdown/'+article.file+'.md"]',data=zen.parse(eval(url));data&&(data=data.replace(/__block_head__/g,"__block_head__").replace(/__block_foot__/g,"__block_foot__"),self.rend(article,data))},load_file:function(e){var a=this,t="blog/"+e.type+"/"+e.file+".md";$.ajax({url:t,type:"get",async:!1,dataType:"html",success:function(t){$(".catalog-area").hide(),$(".markdown-area").show(),a.rend(e,t)},error:function(a){$(".markdown-area").hide(),$(".catalog-area").show(),zen.message.toast("当前文章"+e.file+"不存在，请返回其他文章")}})}},Service={id:0,init:function(){MarkDown.init();var e=this.id=parseInt(zen.url.getPar("id"))||0;ZEN_ARTICLES&&ZEN_ARTICLES[e]?MarkDown.load(ZEN_ARTICLES[e]):window.location.href="#blog/article?id=0",this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(Service.id>0){var e=Service.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(Service.id<ZEN_ARTICLES.length-1){var e=Service.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(Service)});</script>*/}
Zen.views["example/multi-select/index.js"] = function() {/*<script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)});</script>*/}
Zen.views["example/single-page/toggle.js"] = function() {/*<script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)});</script>*/}
Zen.views["ganlight/blog/config.js"] = function() {/*<script>var ZEN_ARTICLES=[{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"},{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用zenjs写一个博客系统",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用zenjs写一个博客系统"}],CATALOG_TMP={type:"catalog",name:"zenjs 框架",data:[{}]},ARTICLE_TMP={type:"article",name:"zenjs 框架",path:"zen/zenjs 框架.md",public:"2016-11-25 14:00",auther:"ganlight",tag:"zenjs javascript"},ZENJS_BLOG={zenjs:{type:"catalog",name:"zenjs 框架",data:[{type:"article",title:"Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",file:"install"}]}};</script>*/}
Zen.views["ganlight/blog/article/index.js"] = function() {/*<script>$(function(){var MarkDown={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".title").html("暂不支持markdown")},rend:function(e,a){if(this.converter&&a){var t=this.converter.makeHtml(a);$(".title").html(e.title),$(".markdown-area").html(t).show()}},load:function(article){var self=this,url='Zen.views["blog/markdown/'+article.file+'.md"]',data=zen.parse(eval(url));data&&(data=data.replace(/__block_head__/g,"__block_head__").replace(/__block_foot__/g,"__block_foot__"),self.rend(article,data))},load_file:function(e){var a=this,t="blog/"+e.type+"/"+e.file+".md";$.ajax({url:t,type:"get",async:!1,dataType:"html",success:function(t){$(".catalog-area").hide(),$(".markdown-area").show(),a.rend(e,t)},error:function(a){$(".markdown-area").hide(),$(".catalog-area").show(),zen.message.toast("当前文章"+e.file+"不存在，请返回其他文章")}})}},Service={id:0,init:function(){MarkDown.init();var e=this.id=parseInt(zen.url.getPar("id"))||0;ZEN_ARTICLES&&ZEN_ARTICLES[e]?MarkDown.load(ZEN_ARTICLES[e]):window.location.href="#blog/article?id=0",this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(Service.id>0){var e=Service.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(Service.id<ZEN_ARTICLES.length-1){var e=Service.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[e]&&(window.location.href="#blog/article?id="+e)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(Service)});</script>*/}
Zen.views["focus-time/index.css"] = function() {/*<style>::-webkit-scrollbar-track-piece{background:#f5f5f5;border-left:1px solid #d2d2d2}::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-thumb{background:#c2c2c2;background-clip:padding-box;border:1px solid #979797;min-height:28px}::-webkit-scrollbar-thumb:hover{border:1px solid #636363;background:#929292}body{font-family:Tahoma,Arial,MS Trebuchet,sans-serif;font-size:14px}button,input,label{display:block;margin:10px auto}#title{margin:10px auto;width:500px;text-align:center;font-size:60px}#remainTime{text-align:center;font-size:180px}#progressBar,#progressBarBorder{width:500px;height:15px;overflow:hidden}#progressBarBorder{display:block;margin:10px auto;border:1px solid #fff;box-shadow:1px 1px 15px #000}#progressBar{background:blue}#control{margin:10px auto;width:500px}.taskLeave{background:#ff0}.taskDone{background:blue}.taskStop{background:red}.copyright{margin:50px auto;text-align:center}</style>*/}
Zen.views["todo/index.css"] = function() {/*<style>body,button,html{margin:0;padding:0}button{border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased}body,button{-moz-osx-font-smoothing:grayscale}body{font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;font-weight:300}:focus{outline:0}.hidden{display:none}.todoapp{background:#fff;margin:130px 0 40px;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.edit,.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}label[for=toggle-all]{display:none}.toggle-all{position:absolute;top:-55px;left:-12px;width:60px;height:34px;text-align:center;border:none}.toggle-all:before{content:'❯';font-size:22px;color:#e6e6e6;padding:10px 27px}.toggle-all:checked:before{color:#737373}.todo-list{margin:0;padding:0;list-style:none}.todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li:last-child{border-bottom:none}.todo-list li.editing{border-bottom:none;padding:0}.todo-list li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}.todo-list li.editing .view{display:none}.todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.todo-list li .toggle:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')}.todo-list li .toggle:checked:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')}.todo-list li label{word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-list li.completed label{color:#d9d9d9;text-decoration:line-through}.todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}.todo-list li .destroy:hover{color:#af5b5e}.todo-list li .destroy:after{content:'×'}.todo-list li:hover .destroy{display:block}.todo-list li .edit{display:none}.todo-list li.editing:last-child{margin-bottom:-1px}.footer{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer:before{content:'';position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.clear-completed,html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}.info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio:0){.todo-list li .toggle,.toggle-all{background:none}.todo-list li .toggle{height:40px}.toggle-all{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-appearance:none;-moz-appearance:none;appearance:none}}@media (max-width:430px){.footer{height:50px}.filters{bottom:10px}}</style>*/}
Zen.views["blog/article/index.css"] = function() {/*<style>code{padding:1px 3px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;font-size:1.4rem;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre code{font-size:1.2rem;padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}ul{list-style:inherit;margin-left:20px}ul li{line-height:2rem;margin-bottom:1.5rem}*{-webkit-print-color-adjust:exact}.banner-area{line-height:5rem;bottom:-.1rem}.banner-area .next-btn,.banner-area .pre-btn{background:currentColor}.banner-area .catalog-type{background:#5f9ea0}.markdown-area{position:relative;background:#fff;margin:1rem 1rem 0;border-radius:.3rem;padding:1rem;margin-bottom:6rem;display:none;color:#2c3e50}</style>*/}
Zen.views["example/multi-select/index.css"] = function() {/*<style>.zen-page{font-size:1.6rem}</style>*/}
Zen.views["ganlight/blog/article/index.css"] = function() {/*<style>code{padding:1px 3px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;font-size:1.4rem;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre code{font-size:1.2rem;padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}ul{list-style:inherit;margin-left:20px}ul li{line-height:2rem;margin-bottom:1.5rem}*{-webkit-print-color-adjust:exact}.banner-area{line-height:5rem;bottom:-.1rem}.banner-area .next-btn,.banner-area .pre-btn{background:currentColor}.banner-area .catalog-type{background:#5f9ea0}.markdown-area{position:relative;margin:0 auto;max-width:900px;margin-top:100px;margin-bottom:50px;padding:1rem;display:none;color:hsla(0,0%,100%,.8)}.title{display:inline-block;font-size:18px;color:#9b8c67;border-bottom:1px dashed #9b8c67;line-height:40px;height:40px;margin-bottom:10px}</style>*/}
Zen.views["blog/markdown/frontend/js-modules.md"] = function() {/*# js模板
1.防止手机点击时出现的其他颜色
```css
html {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
```

2.常用的head的模板
- meta 部分:设置字符集,viewport,description,keywords
- link 部分:设置样式,ico图标
- script 部分:设置脚本
- 其他,根据浏览器设置不同的适应脚本

``` html
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bootstrap中文网开源项目免费 CDN 服务</title>
<meta name="description" content="Bootstrap中文网开源项目免费 CDN 服务 - 我们致力于为Bootstrap一样优秀的开源项目提供稳定、快速的免费 CDN 服务">
<meta name="keywords" content=""><meta name="author" content="Bootstrap中文网">
<link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="//cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet">
<link href="/assets/css/site.min.css" rel="stylesheet">
<!--[if lt IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
<!--[if IE 9]>
    <script src="//cdn.bootcss.com/geopattern/1.2.3/js/base64.min.js"></script>
    <script src="//cdn.bootcss.com/geopattern/1.2.3/js/typedarray.min.js"></script>
<![endif]-->
  <script>var _hmt = _hmt || [];</script>
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/ico/apple-touch-icon-144-precomposed.png">
  <link rel="shortcut icon" href="/assets/ico/favicon.ico">
  <style type="text/css" lanyezi="lanyezi"></style>
</head>
```

3.滑动后显示
```
$(window).scroll(function() {
       $(this).scrollTop() > 100 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut()
   }),
```
*/}
Zen.views["blog/markdown/zenjs/about-zenjs.md"] = function() {/*

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
Zen.views["blog/markdown/zenjs/install.md"] = function() {/*##Zenjs的安装使用

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
Zen.views["blog/markdown/zenjs/如何用zenjs写一个博客系统.md"] = function() {/*##如何用Zenjs写一个博客系统

##只需要一百来行代码就可以轻松完成
-目录结构
*/}