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

@media screen and (max-width: 980px) {}

@media screen and (max-width: 736px) {
    .menu-nav {
        display: none;
    }
}

@media screen and (max-width: 480px) {
    .menu-nav {
        display: none;
    }
    .nav-margin {
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

Zen.views["index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.main-container{width:80%}</style><div class="zen-page v-center"><div class="main-container"><zen-slot name="layout/home-nav.html"></zen-slot><zen-slot name="layout/footer.html"></zen-slot></div></div>*/}
Zen.views["about/index.html"] = function() {/*<style>.zen-page p{margin:1.5rem;font-size:1.6rem;line-height:3rem;justify-content:center}.main-container{max-width:900px;margin:0 auto}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><h2 class="font24 white text-center normal">ABOUT ZENJS</h2><div class="main-container"><div class="c-card"><h3>zenjs信息</h3><p>- github地址：https://github.com/ganlight/zenjs.git<br>- 演示地址：https://ganlight.github.io/zenjs<br>- 作者邮箱：ganlight@foxmail.com</p></div><div class="c-card"><h3>特点</h3><p>- 使用简单，只需引入一个js文件，就可以实现页面的模块化，方便便捷<br>- 本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。<br>- 大道若简，coding就是这么纯粹就好，像禅Zen一样，无为而有为。<br></p></div><div class="c-card"><h3>库说明</h3><p>- zenjs.min.js 核心代码 (需与zepto或jQuery一起使用)<br>- zenjs-zepto.min.js 是将zepto的包与zenjs核心库打包在一起，页面只需引入这个即可<br>- zenjs-jquery.min.js 是将jquery的包与zenjs核心库打包在一起，页面只需引入这个即可</p></div><div class="c-card"><h3>开发说明</h3><p>###zen目录<br>- zen目录下所有定义模块的目录，每个目录下的模块名为文件夹<br>里面统一为index.css,index.html,index.js<br>###views目录<br>- modules文件夹这里面的每一个控件可以单独打开，可以使用。<br>- 模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用<br>###js目录<br>###css目录<br></p></div><div class="c-card"><h3>如何去构建</h3><p>- 通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器</p></div><div class="c-card"><h3>如何排除bug</h3><p>- 在console中输入Zen.current就能看到该页面相关的对象信息了</p></div><div class="c-card"><h3>其他</h3><p>- 虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。<br>- 感谢vuejs，weui，zepto，gulp这些优秀的库。</p></div><div class="lh15">&nbsp;</div></div><zen-slot name="layout/footer.html"></zen-slot></div>*/}
Zen.views["api/index.html"] = function() {/*<style>.markdown-area{position:relative;margin:0 auto;max-width:900px;margin-bottom:50px;padding:1rem;display:none;color:rgba(255,255,255,.8)}.article-title{font-size:36px;font-weight:200;color:rgba(255,255,255,.8);border-bottom:1px solid rgba(255,255,255,.8);margin:0 auto;line-height:80px;margin-bottom:10px;max-width:900px}h1,h2,h3,h4{font-weight:300}.markdown-area ul{list-style:inherit;margin-left:20px}.markdown-area ul li{line-height:2rem;margin-bottom:1.5rem}.main-container{margin-left:300px;position:relative}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><zen-slot name="api/sidebar.html"></zen-slot><div class="main-container"><div class="article-title"></div><div class="markdown-area content"></div></div></div><zen-slot name="layout/footer.html"></zen-slot></div><script>$(function(){var n={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".article-title").html("暂不支持markdown")},rend:function(n,e){if(this.converter&&e){var t=this.converter.makeHtml(e);$(".article-title").html(n.title),$(".markdown-area").html(t).show()}},load:function(n){var e=this,t="markdown/"+n.file+".md";console.log(t);var i=zen.content(t);i&&e.rend(n,i)}},e={id:0,init:function(){n.init();var e=this.hash=zen.url.getPar("hash"),t=BOOK_LIBRARY.query(e);t||(t=BOOK_LIBRARY.booklist[0]),n.load(t),this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(e.id>0){var n=e.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[n]&&(window.location.href="#blog/article?id="+n)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(e.id<ZEN_ARTICLES.length-1){var n=e.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[n]&&(window.location.href="#blog/article?id="+n)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(e)})</script>*/}
Zen.views["api/sidebar.html"] = function() {/*<style>.chapter-nav{color:#FFF;font-size:16px;width:250px;padding:10px;border-right:1px solid #58677a;position:fixed}.chapter-nav .chapter-title{font-size:16px;border-bottom:1px solid #58677a;line-height:40px;height:40px;padding-bottom:5px;min-width:80%;display:inline-block;margin-top:15px;cursor:pointer}.chapter-nav li{line-height:30px;font-size:14px;cursor:pointer}</style><nav class="chapter-nav"></nav><div class="template-area" style="display:none"><div class="chapter-item"><span class="chapter-title"></span><ul></ul></div></div><script v-script="views/api/config.js"></script><script>$(function(){var n={dom:null,library:null,init:function(){BOOK_LIBRARY&&(this.library=BOOK_LIBRARY,this.rend_main(this.library.bookshelf))},rend_main:function(n){console.log(n);var i=this;i.dom=$("<div>");for(var t=n.length,a=0;a<t;a++){var e=n[a],o=$(".template-area .chapter-item").clone();o.find(".chapter-title").text(e.catalog.name),i.rend_sub(o,e.books),i.bind_main(o),i.dom.append(o)}$(".chapter-nav").append(i.dom)},bind_main:function(n){n.find(".chapter-title").click(function(){n.find("ul").toggle(300)})},rend_sub:function(n,i){var t=this;console.log(i);for(var a=i.length,e=0;e<a;e++){var o=i[e],l=$("<li>");l.text(o.title),zen.store.data(l,o),t.bind_sub(l),n.find("ul").append(l)}return n},bind_sub:function(n){n.click(function(){var i=zen.store.data(n);window.location.hash="#api/index?catalog="+i.catalog+"&hash="+i.hash})}};n.init()})</script>*/}
Zen.views["design/index.html"] = function() {/*<style>.demo-item{width:100%;height:300px;display:inline-block;position:relative;background-color:#3085a3;background:url(assets/img/background.jpg);background-repeat:no-repeat;background-size:cover;text-align:center;cursor:pointer;color:#FFF;margin:10px}.demo-item h2,.demo-item p{position:absolute;right:30px;left:30px;padding:10px 0}.demo-item p{bottom:30px;line-height:1.5;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.demo-item h2{top:30px;-webkit-transition:-webkit-transform .35s;transition:transform .35s;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}.demo-item:hover h2{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.demo-item h2::after{position:absolute;top:100%;left:0;width:100%;height:4px;background:#fff;content:'';-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0)}.demo-item h2::after,.demo-item p{opacity:0;-webkit-transition:opacity .35s,-webkit-transform .35s;transition:opacity .35s,transform .35s}.demo-item:hover h2::after,.demo-item:hover p{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><ul class="demo-list inline"><li class="span4"><div class="demo-item"><h2>Sweet <span>Marley</span></h2><p>Marley tried to convince her but she was not interested.</p></div></li><li class="span4"><div class="demo-item"><h2>Sweet <span>Marley</span></h2><p>Marley tried to convince her but she was not interested.</p></div></li><li class="span4"><div class="demo-item"><h2>Sweet <span>Marley</span></h2><p>Marley tried to convince her but she was not interested.</p></div></li>>Marley tried to convince her but she was not interested.<p></p></ul></div><zen-slot name="layout/footer.html"></zen-slot></div>*/}
Zen.views["design/word.html"] = function() {/*<style>body{overflow:auto;text-align:left;white-space:normal;word-break:break-all;margin:0;padding:0;background-color:grey;font-size:10.5pt}p{margin:0;padding:0}.page{font-family:'';background-color:#ffc;zoom:1;font-size:10.5pt;text-align:left;background-color:#fff;white-space:normal;word-break:break-all;word-wrap:break-word;width:14.5cm;height:23.97cm;padding-top:96px;padding-right:120px;padding-bottom:96px;padding-left:120px;margin:0 auto}.page .content{padding:2px;border:dotted 2px #ccc;width:100%;height:100%;text-align:left;background-color:#fff;font-size:10.5pt}</style><div class="zen-page"><div class="page"><div class="content"><p>&nbsp;</p></div></div><hr class="noprint" color="rgb(128,128,128)"><div class="page"><div class="content"><p>&nbsp;</p></div></div></div>*/}
Zen.views["layout/footer.html"] = function() {/*<style>footer.info{text-align:center;color:rgba(255,255,255,.8);font-size:12px}footer.info a{text-align:center;color:rgba(255,255,255,.8);font-size:12px}</style><footer class="info"><div class="lh25">Design and Written by <a href="http://ganlight.com">ganlight</a></div><div class="mb15">© 2016-2017 ganlight.com 版权所有 <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备16113949号</a></div></footer><script>$(function(){})</script>*/}
Zen.views["layout/home-nav.html"] = function() {/*<style>.home-nav{position:relative;color:#FFF;max-width:800px;margin:0 auto}.home-nav .nav-line{height:1px;background-color:#FFF}.home-nav .nav-btn{display:inline-block;font-size:16px;border:1px solid #FFF;line-height:40px;height:40px;width:200px;text-align:center;margin:-1px auto}.home-nav .nav-mid{height:1px;width:540px;background-color:#FFF;transform:rotate(-45%);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);position:absolute;left:50%;margin-left:-270px}.home-nav .nav-top .nav-items{border-left:1px solid #58677a;margin-left:50px;padding:15px 0;width:150px}.home-nav .nav-bot .nav-items{border-right:1px solid #58677a;margin-right:50px;padding:15px 0;width:150px;float:right}.home-nav .nav-items li{position:relative;display:block;line-height:39px;padding:0 25px;transition:all .2s;border-bottom:1px solid transparent}.home-nav .nav-items li:hover{color:#FFF;border-bottom:1px solid #FFF;padding:0 40px}.home-nav .nav-bot{position:relative;text-align:right}</style><nav class="home-nav clearfix"><div class="nav-top"><div class="text-right lh30">大道至简，衍化至繁</div><div class="nav-line"></div><span class="nav-btn">GANLIGHT</span><div class="menu-box clearfix"><ul class="nav-items"><li v-link="#blog/catalog">BLOG</li><li v-link="#design/index">DESIGN</li><li v-link="#about">ABOUT</li></ul></div></div><div class="nav-mid"></div><div class="nav-bot"><div class="menu-box clearfix"><ul class="nav-items"><li v-link="#zenjs">INTRO</li><li v-link="#api/index">API</li><li v-link="#demo/index">DEMO</li></ul></div><span class="nav-btn">ZENJS</span><div class="nav-line"></div><div class="text-left lh30">大道无形，道法自然</div></div></nav>*/}
Zen.views["layout/menu.html"] = function() {/*<style>.nav-slogan{color:#FFF;padding-top:30px}.menu-nav{position:fixed;width:100%;top:0;left:0;color:#FFF;transition:all .2s;background-color:#141E30;background:linear-gradient(to left,#141E30,#243B55);margin-bottom:80px;padding-bottom:15px}.menu-nav .nav-line{position:relative;height:1px;background-color:#FFF}.menu-nav .nav-btn{display:inline-block;font-size:16px;border:1px solid #FFF;line-height:40px;height:40px;width:200px;text-align:center;margin:-1px auto}.menu-nav .nav-mid{height:1px;width:60px;background-color:#FFF;transform:rotate(-45%);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);position:absolute;left:50%;margin-left:-30px}.menu-nav .nav-logo{width:40px;height:40px;position:absolute;left:50%;top:-20px;margin-left:-20px;transition:all .2s;cursor:pointer;opacity:.6}.menu-nav .nav-logo:hover{width:60px;height:60px;left:50%;top:-30px;margin-left:-30px;opacity:1}.menu-nav .nav-items{display:inline-block}.menu-nav .nav-right{float:right;text-align:right}.menu-nav .nav-items li{position:relative;display:inline-block;max-width:100px;line-height:39px;padding:0 25px;transition:all .2s;border-bottom:1px solid transparent}.menu-nav .nav-items li.active,.menu-nav .nav-items li:hover{color:#FFF;border-bottom:1px solid #FFF;padding:0 40px}.menu-nav .nav-bot{position:relative;text-align:right}.menu-nav.show-menu{position:fixed;width:100%;top:-66px;left:0;z-index:100}.show-menu .nav-logo{top:0}.nav-margin{height:150px}</style><nav class="menu-nav inline"><div class="container"><div class="nav-slogan clearfix"><span class="fl lh30">大道至简，衍化至繁</span> <span class="fr lh30">大道无形，道法自然</span></div><div class="nav-line mt5"><img src="assets/img/zen-logo.png" alt="" class="nav-logo" v-link="#index"></div><div class="nav-left span6"><span class="nav-btn">GANLIGHT</span><ul class="nav-items"><li v-link="#blog/catalog" data-dir="blog">BLOG</li><li v-link="#design/index" data-dir="design">DESIGN</li><li v-link="#about" data-dir="about">ABOUT</li></ul></div><div class="nav-right span6"><ul class="nav-items"><li v-link="#zenjs" data-dir="zenjs">INTRO</li><li v-link="#api/index" data-dir="api">API</li><li v-link="#demo/index" data-dir="demo">DEMO</li></ul><span class="nav-btn">ZENJS</span></div></div></nav><div class="nav-margin"></div><script>$(function(){var n={init:function(){$(window).scroll(function(){$(window).scrollTop()>$(".nav-slogan").height()?$(".menu-nav").addClass("show-menu"):$(".menu-nav").removeClass("show-menu")});var n=zen.url.getHash();$(".nav-items li").each(function(a){var i=$(this),e=i.attr("data-dir");n.indexOf(e)>-1?i.addClass("active"):i.removeClass("active")})}};n.init()})</script>*/}
Zen.views["blog/article/index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.banner-area{line-height:5rem;bottom:-.1rem}.banner-area .next-btn,.banner-area .pre-btn{background:currentColor}.banner-area .catalog-type{background:#5f9ea0}.markdown-area{position:relative;margin:0 auto;max-width:900px;margin-bottom:50px;padding:1rem;display:none;color:rgba(255,255,255,.8)}.article-title{font-size:36px;font-weight:200;color:rgba(255,255,255,.8);border-bottom:1px solid rgba(255,255,255,.8);margin:0 auto;line-height:80px;margin-bottom:10px;max-width:900px}h1,h2,h3,h4{font-weight:300}.markdown-area ul{list-style:inherit;margin-left:20px}.markdown-area ul li{line-height:2rem;margin-bottom:1.5rem}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><div class="article-title"></div><div class="markdown-area content"></div></div><zen-slot name="layout/footer.html"></zen-slot></div><script v-script="views/markdown/config.js"></script>*/}
Zen.views["blog/catalog/index.html"] = function() {/*<style>.zen-stack{position:absolute;top:0;left:0;width:100%;height:100%;background:#141E30;background:linear-gradient(to left,#141E30,#243B55)}.zen-page{height:100%}.articles-area{margin:0 auto;max-width:900px;margin-top:30px;margin-bottom:50px}.article-item{position:relative;margin-bottom:30px}.article-item .title{display:inline-block;font-size:24px;font-weight:300;color:rgba(255,255,255,1);border-bottom:1px dashed rgba(255,255,255,.8);line-height:40px;height:40px;margin-bottom:10px}.article-item .desc{font-size:14px;color:#FFF;line-height:20px;letter-spacing:1px;justify-content:center;color:rgba(255,255,255,.6)}</style><div class="zen-page"><zen-slot name="layout/menu.html"></zen-slot><div class="container"><ul class="articles-area"></ul><div class="page-template hide"><div class="article-item" v-link=""><span class="font20 title"></span><div class="font16"><span class="desc"></span></div></div><div class="catalog-item"><span class="type_name"></span> <span class="type_num"></span></div></div></div><zen-slot name="layout/footer.html"></zen-slot></div><script v-script="views/markdown/config.js"></script><script>$(function(){var t={library:null,articles:[],map:{},init:function(){BOOK_LIBRARY&&(this.library=BOOK_LIBRARY,this.rend_books(this.library.booklist)),$("footer").removeClass("fix-bottom")},rend_books:function(t){var i=this;if(t&&t.length>0){var n=(t.length,t),a=$(".articles-area");a.empty();for(var e=0;e<n.length;e++){var o=n[e],r=$(".page-template .article-item").clone();zen.store.data(r,o),zen.template.values(r,o),i.bind_item(r),a.append(r)}}},bind_item:function(t){t.click(function(){var i=zen.store.data(t);i&&i.hash&&(window.location.href="#blog/article?id="+i.hash)})}},i={init:function(){this.data=t,t.init(),this.bind()},bind:function(){$(".catalog-area").click(function(){$(".zen-container").toggleClass("mask-on")})}};zen.page.ready(i)})</script>*/}
Zen.views["demo/module/index.html"] = function() {/*<style>.index-page .list-item .name{padding-bottom:5px}</style><div class="zen-page index-page"><h2 class="font24 white text-center normal">Zenjs Modules</h2><ul class="page-list" id="page-list"></ul><div class="lh15">&nbsp;</div><div class="page-template hide"><li class="list-item inline c-card clearfix"><div class="font20 name"></div><div class="font16 gray href action"></div></li></div></div><script>$(function(){var pages=[{name:"toggle-group",href:"#example/toggle-group"},{name:"multi-select",href:"#example/multi-select"},{name:"single-page toggle-group",href:"#example/single-page/toggle-group"},{name:"single-page multi-select",href:"#example/single-page/multi-select"},{name:"alert",action:"zen.message.alert('Zenjs')"},{name:"toast",action:"zen.message.toast(' A light framwork')"},{name:"confirm",action:"zen.message.confirm('Coding Zen!')"}],Service={init:function(){this.data=pages,this.rend()},rend:function(){for(var e=this,a=pages,t=$(".page-list"),n=0;n<a.length;n++){var i=a[n],l=$(".page-template .list-item").clone();zen.store.data(l,i),zen.template.values(l,i),e.bind(l),t.append(l)}},bind:function(clone){clone.click(function(){var data=zen.store.data(clone);data.href&&(window.location.href=data.href),data.action&&eval(data.action)})}};zen.page.ready(Service)})</script>*/}
Zen.views["demo/app/focus-time/index.html"] = function() {/*<style>.zen-page{position:relative;max-width:none;margin:0 auto}.work-area{height:83.33%;position:absolute;width:100%;text-align:center;background:#0ff}.rest-area{height:16.67%;position:absolute;top:83.33%;background:#008b8b;width:100%}.remain-time{font-size:8rem;color:#FFF}</style><div class="zen-page"><div class="work-area v-center"><div class="remain-time"></div></div><div class="rest-area v-center"><div class="task-opt text-center"><span class="start-btn c-btn">开始</span> <span class="stop-btn c-btn">停止</span> <span class="rest-btn c-btn">休息</span></div></div></div><script>console.log("focus time")</script>*/}
Zen.views["demo/app/gradients/index.html"] = function() {/*<style>.zen-page{max-width:none}.card{position:absolute;width:90%;height:90%;background:#FFF;top:5%;left:5%;border-radius:.5rem;transition:all .2s}.bg-info{color:#FFF;margin:1.5rem}.intro-field{position:absolute;width:100%;bottom:30px;text-align:center;margin:0 auto;background:#FFF;padding:15px 0}.intro-logo{width:110px}.intro-text{margin:0;padding:0;font-size:12px;color:#979292;letter-spacing:.03rem}.about-field{position:absolute;background:#FFF;right:0;bottom:50%;color:#564141;height:50px;font-size:1.2rem}.about-field .about-toggle{display:inline-block;width:50px;text-align:center;border-right:1px solid #eee;vertical-align:bottom}.about-field .about-toggle i{display:inline-block;height:16px;width:20px;font-size:16px;padding:17px}.about-field .about-detail{display:inline-block;padding:9px;display:none;transition:all .2s}.on .about-detail{display:inline-block}.info-field{position:absolute;color:#FFF;padding:15px;right:0;top:0;font-size:1.6rem}</style><div class="zen-page"><div class="card"><div class="font24 bg-info lh20"><div class="font16 bold name lh30"></div><div class="font14">color 1 : <span class="color1"></span></div><div class="font14">color 2 : <span class="color2"></span></div></div><div class="intro-field" v-link="#gradients/list"><img class="intro-logo" src="http://uigradients.com/assets/images/logo.png" alt="Ui Gradients"><div class="intro-text">Beautiful color gradients</div></div><div class="about-field"><span class="about-toggle"><i class="fa fa-info fa-fw green"></i> </span><span class="about-detail"><span class="yellow"><span v-link="http://uigradients.com/">Ui Gradients</span> by <span v-link="http://twitter.com/_ighosh" id="twitter-link" target="_blank">@_ighosh</span></span><br><span>rewrite zenjs by ganlight</span></span></div></div></div><script>$(function(){var e={ele:null,init:function(){var t=this.ele=$(".card"),n=zen.store.getLocal("COLOR");this.change(n),e.reset(t),$(window).resize(function(){e.reset(t)}),this.bind()},reset:function(e,t){if(!t)var t=15;var n=window.innerWidth||document.body&&document.body.clientWidth,i=window.innerHeight||document.body&&document.body.clientHeight;this.width=n-2*t,this.height=i-2*t;var o={width:n-2*t,height:i-2*t,left:t,top:t};e.css(o)},change:function(e){if(e&&e.name)var t=e;else var n=zen.gradients,i=parseInt(Math.random()*n.length),t=n[i];var o={backgroundColor:t.colors[1],backgroundImage:"linear-gradient(to left, "+t.colors[0]+", "+t.colors[1]+")"};this.ele.find(".name").text(t.name),this.ele.find(".color1").text(t.colors[0]),this.ele.find(".color2").text(t.colors[1]),this.ele.css(o)},bind:function(){this.ele.click(function(){e.change()})}},t={init:function(){e.init(),this.bind()},bind:function(){$(".about-toggle").click(function(e){e.preventDefault(),e.stopPropagation(),$(".about-field").toggleClass("on")})}};zen.page.ready(t)})</script>*/}
Zen.views["demo/app/gradients/list.html"] = function() {/*<style>.zen-page{max-width:none}.gradients-item{display:block;padding:60px 0;text-align:center;color:#FFF;font-size:1.6rem;margin:10px;transition:all .2s}</style><div class="zen-page"><ul class="gradients-list"></ul><div class="page-template hide"><li class="gradients-item"><span class="name"></span></li></div></div><script>$(function(){var n={data:null,init:function(){this.data=zen.gradients,this.rend()},rend:function(){for(var n=this,t=this.data,e=$(".gradients-list"),a=0;a<t.length;a++){var i=t[a],o=$(".page-template .gradients-item").clone(),r={backgroundColor:i.colors[1],backgroundImage:"linear-gradient(to left, "+i.colors[0]+", "+i.colors[1]+")"};o.find(".name").text(i.name),o.css(r),zen.store.data(o,i),zen.template.values(o,i),n.bind(o),e.append(o)}},bind:function(n){n.click(function(t){var e=zen.store.data(n);zen.store.setLocal("COLOR",e),zen.url.go("#gradients")})}},t={init:function(){n.init(),this.bind()},bind:function(){$(".about-toggle").click(function(n){n.preventDefault(),n.stopPropagation(),$(".about-field").toggleClass("on")})}};zen.page.ready(t)})</script>*/}
Zen.views["demo/app/todo/index.html"] = function() {/*<style>.zen-cur{background:#f5f5f5;color:#4d4d4d;max-width:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{outline:medium}.filters a{outline:0;blr:expression(this.onFocus=this.blur())}</style><div class="zen-page"><div class="todoapp"><div class="header"><h1>todos</h1><input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"></div><section class="main"><input class="toggle-all" type="checkbox" v-model="allDone"><ul class="todo-list"></ul></section><footer class="footer" v-show="todos.length" v-cloak><span class="todo-count"><strong class="remaining"></strong> items left</span><ul class="filters"><li><a href="javascript:void(0);" class="selected" filter="">All</a></li><li><a href="javascript:void(0);" filter="active">Active</a></li><li><a href="javascript:void(0);" filter="completed">Completed</a></li></ul><button class="clear-completed">Clear completed</button></footer></div><footer class="info"><p>Double-click to edit a todo</p><p>Zenjs-Todo Written by <a href="http://zenjs.cn">ganlight</a></p><p>Part of <a href="http://evanyou.me">Evan You</a> and <a href="http://todomvc.com">TodoMVC</a></p></footer><div class="page-template hide"><li class="todo-item"><div class="view"><input class="toggle" type="checkbox"><label class="todo-name title"></label><button class="destroy"></button></div><input class="edit" type="text"></li></div></div>*/}
Zen.views["demo/module/multi-select/index.html"] = function() {/*<div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div>*/}
Zen.views["demo/module/toggle-group/index.html"] = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul><div class="lh30">&nbsp;</div></div><script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)})</script>*/}
Zen.views["demo/module/single-page/multi-select.html"] = function() {/*<style>.zen-page{font-size:1.6rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Multi Select</h2><ul><li class="c-card"><span class="label-txt lh40">多选择1：</span><div id="m-type" v-zen="multi-select"></div></li><br><li class="c-card"><span class="label-txt lh40">多选择2：</span><div id="m-status" v-zen="multi-select"></div></li></ul></div><script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)})</script>*/}
Zen.views["demo/module/single-page/toggle-group.html"] = function() {/*<style>.zen-page{font-size:1.6rem}.c-card{position:relative;background:#FFF;margin:1.5rem 1.5rem 0 1.5rem;border-radius:.3rem;padding:1.5rem}</style><div class="zen-page"><h2 class="font24 white text-center normal">Toggle Group</h2><ul><li class="c-card"><div id="m-type" v-zen="toggle-group"></div></li><li class="c-card"><div id="m-status" v-zen="toggle-group"></div></li></ul></div><script v-script="views/example/single-page/toggle.js"></script>*/}
Zen.views["api/config.js"] = function() {/*<script>var books_zenjs=[{title:"Zenjs的安装使用",file:"zenjs/install"},{title:"关于 ZENJS",file:"zenjs/about-zenjs"},{title:"如何用nodejs爬取一个网站的内容",file:"zenjs/如何用nodejs爬取一个网站的内容"}],books_life=[{title:"LIFE 关于 ZENJS",file:"zenjs/about-zenjs"}],shelf_zenjs={catalog:{name:"ZENJS 相关",type:"intro",num:0},books:books_zenjs},shelf_life={catalog:{name:"LIFE 相关",type:"start",num:0},books:books_life},BookLibrary={booklist:[],bookmap:{},bookshelf:[shelf_zenjs,shelf_life],init:function(){for(var o=this,e=o.bookshelf.length,s=0;s<e;s++){var t=o.bookshelf[s];o.add(t)}return this},query:function(o){return!(!o||!this.bookmap[o])&&this.bookmap[o]},add:function(o){for(var e=this,s=o.catalog,t=o.books,n=t.length,i=0;i<n;i++){var a=t[i];a.hash="BOOK-ID-"+zen.hash(a.file),a.catalog=s.type,e.booklist.push(a),e.bookmap[a.hash]=a,s.num++}}},ZEN_ARTICLES=[],BOOK_LIBRARY=BookLibrary.init();</script>*/}
Zen.views["markdown/config.js"] = function() {/*<script>var books_zenjs=[{title:"Zenjs的安装使用",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 1",section:"begin",file:"zenjs/install"},{title:"关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"},{title:"如何用nodejs爬取一个网站的内容",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 3",section:"begin",file:"zenjs/如何用nodejs爬取一个网站的内容"}],books_life=[{title:"LIFE 关于 ZENJS",desc:"Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",public:"2016-11-25 14:00",auther:"ganlight",type:"zenjs 2",section:"begin",file:"zenjs/about-zenjs"}],shelf_zenjs={catalog:{name:"ZENJS 相关",num:0},books:books_zenjs},shelf_life={catalog:{name:"LIFE 相关",num:0},books:books_life},BookLibrary={booklist:[],bookmap:{},bookshelf:[shelf_zenjs,shelf_life],init:function(){for(var e=this,s=e.bookshelf.length,n=0;n<s;n++){var o=e.bookshelf[n];e.add(o)}return this},query:function(e){return!(!e||!this.bookmap[e])&&this.bookmap[e]},add:function(e){for(var s=this,n=e.catalog,o=e.books,i=o.length,t=0;t<i;t++){var j=o[t];j.hash="BOOK-ID-"+zen.hash(j.file),s.booklist.push(j),s.bookmap[j.hash]=j,n.num++}}},ZEN_ARTICLES=[],BOOK_LIBRARY=BookLibrary.init();</script>*/}
Zen.views["blog/article/index.js"] = function() {/*<script>$(function(){var n={converter:null,init:function(){showdown&&showdown.Converter?this.converter=new showdown.Converter:$(".article-title").html("暂不支持markdown")},rend:function(n,e){if(this.converter&&e){var t=this.converter.makeHtml(e);$(".article-title").html(n.title),$(".markdown-area").html(t).show()}},load:function(n){var e=this,t="markdown/"+n.file+".md";console.log(t);var i=zen.content(t);i&&e.rend(n,i)}},e={id:0,init:function(){n.init();var e=this.id=zen.url.getPar("id"),t=BOOK_LIBRARY.query(e);console.log(t),t&&n.load(t),this.bind()},bind:function(){$(".zen-page .pre-btn").click(function(){if(e.id>0){var n=e.id-1;ZEN_ARTICLES&&ZEN_ARTICLES[n]&&(window.location.href="#blog/article?id="+n)}else zen.message.toast("没有上一篇了.")}),$(".zen-page .next-btn").click(function(){if(e.id<ZEN_ARTICLES.length-1){var n=e.id+1;ZEN_ARTICLES&&ZEN_ARTICLES[n]&&(window.location.href="#blog/article?id="+n)}else zen.message.toast("没有下一篇了.")})}};zen.page.ready(e)});</script>*/}
Zen.views["demo/app/focus-time/index.js"] = function() {/*<script>$(function(){var t={work:25,rest:5,times:4,message:{init:"开始一个番茄钟",success:"哇，你很棒哦，又完成了一项工作！",stop:"要不再坚持一会?"}},s={loop:null,tick:function(t,s){var e=this;s&&!this.loop?this.loop=setInterval(function(){e.refresh(t)},100):(clearInterval(this.loop),this.loop=null,zen.store.setLocal("FOCUS_TIME_CURRENT",t))},format:function(t){var s={min:"00",sec:"00",str:"00:00"};if(t>=0){var e=t/1e3;s.min=parseInt(e/60)>9?parseInt(e/60):"0"+parseInt(e/60),s.sec=parseInt(e%60)>9?parseInt(e%60):"0"+parseInt(e%60),s.str=s.min+":"+s.sec}return s},refresh:function(e){var a=0,r=6e4*t.work,n=6e4*t.rest;if("WORK_INIT"==e.status&&(a=r,$(".start-btn").removeClass("hide")),"WORK_START"==e.status){var i=(new Date).getTime();a=r-(i-e.work_start),$(".stop-btn").removeClass("hide"),a<0&&(e.status="WORK_DONE",s.tick(e,!1),$(".rest-btn").removeClass("hide"))}if("WORK_DONE"==e.status&&(zen.message.alert(t.message.success),e.status="REST_INIT",a=n),"WORK_STOP"==e.status&&(a=r-(e.work_stop-e.work_start),s.tick(e,!1)),"REST_INIT"==e.status&&(a=n),"REST_START"==e.status){var i=(new Date).getTime();a=n-(i-e.rest_start),a<0&&(e.status="REST_DONE",s.tick(e,!1))}"REST_DONE"==e.status&&(e.status="WORK_INIT",a=r),zen.store.setLocal("FOCUS_TIME_CURRENT",e);var o=this.format(a).str;$(".remain-time").text(o)}},e=function(t){return this.data={},this.interval=null,t?(this.data=t,"WORK_START"!=t.status&&"REST_START"!=t.status||s.tick(t,!0)):(t=this.data,t.name="",t.work_init=(new Date).getTime(),t.work_start="",t.work_done="",t.work_stop="",t.rest_init="",t.rest_start="",t.rest_done="",t.rest_stop="",t.status="WORK_INIT"),s.refresh(t),this};e.prototype={start:function(){var t=this,e=t.data;e.work_start=(new Date).getTime(),e.status="WORK_START",s.tick(e,!0)},rest:function(){var t=this,e=t.data;e.rest_start=(new Date).getTime(),e.status="REST_START",s.tick(e,!0)},stop:function(){var t=this,e=t.data;e.work_stop=(new Date).getTime(),e.status="WORK_STOP",s.tick(e,!1)}};var a={current:null,init:function(){var t=zen.store.getLocal("FOCUS_TIME_CURRENT");t?this.current=new e(t):this.current=new e}},r={task:null,init:function(){a.init(),this.task=a.current,this.bind()},bind:function(){var t=this;$(".start-btn").click(function(){t.task.start()}),$(".stop-btn").click(function(){t.task.stop()}),$(".rest-btn").click(function(){t.task.rest()})}};zen.page.ready(r)});</script>*/}
Zen.views["demo/app/todo/index.js"] = function() {/*<script>$(function(){var t={key:"ZENJS_TODO",get:function(){var t=zen.store.getLocal(this.key)||[];return $.each(t,function(t,e){t.id=e}),this.uid=t.length,t},save:function(t){zen.store.setLocal(this.key,t)}},e={todos:[],init:function(){this.todos=t.get();for(i in this.todos)this.rend(this.todos[i]);this.watch()},rend:function(t){var e=$(".todo-list"),i=$(".page-template .todo-item").clone();zen.store.data(i,t),zen.template.values(i,t),t.completed?(i.addClass("completed"),i.find(".toggle").prop("checked",!0)):(i.addClass("active"),i.find(".toggle").prop("checked",!1)),o(i),e.append(i)},save:function(){var e=this.todos=[];$(".todo-list .todo-item").each(function(){var t=zen.store.data($(this));t&&e.push(t)}),t.save(this.todos),this.watch()},add:function(){var e=$(".new-todo").val(),o=e&&e.trim();if(o){var i={id:t.uid++,title:o,completed:!1};this.rend(i),$(".new-todo").val(""),this.save()}},watch:function(){var t=$(".todo-list .todo-item.active").length,e=$(".todo-list .todo-item.completed").length;$(".remaining").text(t),e>0?$(".clear-completed").show():$(".clear-completed").hide();var o=$(".filters a.selected"),i=o.attr("filter");i?($(".todo-list .todo-item").hide(),$(".todo-list .todo-item."+i).show()):$(".todo-list .todo-item").show()}},o=function(t){t.find(".destroy").click(function(){var o=zen.store.data(t);o&&(t.remove(),e.save())}),t.find(".toggle").click(function(){var o=zen.store.data(t);o&&(o.completed?o.completed=!1:o.completed=!0,t.toggleClass("completed"),t.toggleClass("active"),zen.store.data(t,o),e.save())}),t.find(".title").dblclick(function(){var e=zen.store.data(t);e&&(t.addClass("editing"),t.find(".edit").val(e.title),t.find(".edit").focus())}),t.find(".edit").blur(function(){var o=zen.store.data(t);o&&(o.title=t.find(".edit").val(),o.title&&o.title.trim()?(t.find(".title").text(o.title),t.removeClass("editing"),zen.store.data(t,o)):t.remove(),e.save())})},d={init:function(){e.init(),this.bind()},bind:function(){$(".new-todo").keyup(function(t){13==t.keyCode&&e.add()}),$(".filters a").click(function(){var t=$(this);$(".filters a").removeClass("selected"),t.addClass("selected"),e.watch()}),$(".clear-completed").click(function(){$(".todo-list .todo-item.completed").remove(),e.save()}),$(".toggle-all").click(function(){var t=$(".toggle-all").attr("checked");$(".todo-list .todo-item").each(function(){var e=$(this),o=zen.store.data(e);o&&(t?(o.completed=!0,e.addClass("completed"),e.removeClass("active")):(o.completed=!1,e.removeClass("completed"),e.addClass("active")),e.find(".toggle").prop("checked",o.completed),zen.store.data(e,o))}),e.save()})}};zen.page.ready(d)});</script>*/}
Zen.views["demo/module/multi-select/index.js"] = function() {/*<script>$(function(){var e={ele:"m-type",data:[{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"},{name:"例子1",value:"33"},{name:"例子2",value:"34"},{name:"例子3",value:"35"}]},a={ele:"m-status",data:[{name:"状态1",value:"33"},{name:"状态2",value:"34"},{name:"状态3",value:"35"}]},l={multi_type:null,multi_status:null,init:function(){this.multi_type=new MultiSelect(e),this.multi_status=new MultiSelect(a)}};zen.page.ready(l)});</script>*/}
Zen.views["demo/module/single-page/toggle.js"] = function() {/*<script>$(function(){var e={ele:"m-type",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!1},{name:"例子3",value:"35",selected:!1},{name:"例子1",value:"33",selected:!0},{name:"例子2",value:"34",selected:!0},{name:"例子3",value:"35",selected:!0}]},a={ele:"m-status",addAction:function(e){zen.message.toast("选择"+e.name)},delAction:function(e){zen.message.toast("取消"+e.name)},data:[{name:"状态1",value:"33",selected:!0},{name:"状态2",value:"34",selected:!1},{name:"状态3",value:"35",selected:!0}]},t={toggle_type:null,toggle_status:null,init:function(){this.toggle_type=new ToggleGroup(e),this.toggle_status=new ToggleGroup(a)}};zen.page.ready(t)});</script>*/}
Zen.views["blog/article/index.css"] = function() {/*<style>code{padding:1px 3px;border-radius:3px;background:#334;color:#fff}pre{display:block;padding:14px;margin:0 0 18px;line-height:16px;font-size:1.4rem;border:1px solid #334;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background-color:#282a36;border-radius:6px}pre code{font-size:12px;line-height:18px;padding:0;background:transparent}sup{font-size:.83em;vertical-align:super;line-height:0}*{-webkit-print-color-adjust:exact}</style>*/}
Zen.views["demo/app/focus-time/index.css"] = function() {/*<style>::-webkit-scrollbar-track-piece{background:#f5f5f5;border-left:1px solid #d2d2d2}::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-thumb{background:#c2c2c2;background-clip:padding-box;border:1px solid #979797;min-height:28px}::-webkit-scrollbar-thumb:hover{border:1px solid #636363;background:#929292}body{font-family:Tahoma,Arial,MS Trebuchet,sans-serif;font-size:14px}button,input,label{display:block;margin:10px auto}#title{margin:10px auto;width:500px;text-align:center;font-size:60px}#remainTime{text-align:center;font-size:180px}#progressBar,#progressBarBorder{width:500px;height:15px;overflow:hidden}#progressBarBorder{display:block;margin:10px auto;border:1px solid #fff;box-shadow:1px 1px 15px #000}#progressBar{background:blue}#control{margin:10px auto;width:500px}.taskLeave{background:#ff0}.taskDone{background:blue}.taskStop{background:red}.copyright{margin:50px auto;text-align:center}</style>*/}
Zen.views["demo/app/todo/index.css"] = function() {/*<style>body,button,html{margin:0;padding:0}button{border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-font-smoothing:antialiased}body,button{-moz-osx-font-smoothing:grayscale}body{font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;font-weight:300}:focus{outline:0}.hidden{display:none}.todoapp{background:#fff;margin:130px 0 40px;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp input::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todoapp h1{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.edit,.new-todo{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}label[for=toggle-all]{display:none}.toggle-all{position:absolute;top:-55px;left:-12px;width:60px;height:34px;text-align:center;border:none}.toggle-all:before{content:'❯';font-size:22px;color:#e6e6e6;padding:10px 27px}.toggle-all:checked:before{color:#737373}.todo-list{margin:0;padding:0;list-style:none}.todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li:last-child{border-bottom:none}.todo-list li.editing{border-bottom:none;padding:0}.todo-list li.editing .edit{display:block;width:506px;padding:12px 16px;margin:0 0 0 43px}.todo-list li.editing .view{display:none}.todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.todo-list li .toggle:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')}.todo-list li .toggle:checked:after{content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')}.todo-list li label{word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-list li.completed label{color:#d9d9d9;text-decoration:line-through}.todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out}.todo-list li .destroy:hover{color:#af5b5e}.todo-list li .destroy:after{content:'×'}.todo-list li:hover .destroy{display:block}.todo-list li .edit{display:none}.todo-list li.editing:last-child{margin-bottom:-1px}.footer{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer:before{content:'';position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.clear-completed,html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}.info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio:0){.todo-list li .toggle,.toggle-all{background:none}.todo-list li .toggle{height:40px}.toggle-all{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-appearance:none;-moz-appearance:none;appearance:none}}@media (max-width:430px){.footer{height:50px}.filters{bottom:10px}}</style>*/}
Zen.views["demo/module/multi-select/index.css"] = function() {/*<style>.zen-page{font-size:1.6rem}</style>*/}
Zen.views["markdown/frontend/js-modules.md"] = function() {/*# js模板
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
Zen.views["markdown/zenjs/about-zenjs.md"] = function() {/*

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
Zen.views["markdown/zenjs/install.md"] = function() {/*##Zenjs的安装使用

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
Zen.views["markdown/zenjs/如何用nodejs爬取一个网站的内容.md"] = function() {/*如何用nodejs爬取一个网站的内容

1.代码演示目录结构

2.curl.js部分：根据一个url地址，获取该地址的html内容
此处参考《Node.js使用cheerio抓取网页数据DEMO》【http://www.sufeinet.com/thread-8413-1-1.html】，在根据http和https做简单的修改
```
var http = require("http");
var https = require("https");

function download(url, callback) {
    var server = http;
    if (url.indexOf('https:') > -1) {
        server = https;
    }
    server.get(url, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

exports.download = download;
```
3.index.js部分：定义了一个WebMonitor的对象，采用cheerio对网页的内容进行解析，本例中获取https://www.baidu.com 中带有srcript标签的src中内容
```
var cheerio = require("cheerio");
var server = require("./curl");

var WebMonitor = function(url) {
    this.url = url;
    this.init(url);
}
WebMonitor.prototype = {
    init: function(url) {
        var self = this;
        server.download(url, function(data) {
            if (data) {
                self.data = data;
                self.action(data);
                console.log("done");
            } else {
                console.log("error");
            }
        });
    },
    action: function(data) {
        var $ = cheerio.load(data);
        $("script[src]").each(function(i, e) {
            console.log($(e).attr("src"));
        });
    }
}

var web_baidu = new WebMonitor("https://www.baidu.com");
```

4.运行结果：
运行node index.js 即可看到运行结果
*如果缺少cheerio module，可以通过npm install -g cheerio 进行安装


总结：
此参照《 Node.js使用cheerio抓取网页数据DEMO》做的一个小尝试，代码虽短，但也包含基本操作了，其他的可以根据这个进行扩展。

文章参考：
1.[node.js] Node.js使用cheerio抓取网页数据DEMO
http://www.sufeinet.com/thread-8413-1-1.html
*/}
Zen.views["markdown/zenjs/如何用zenjs写一个博客系统.md"] = function() {/*##如何用Zenjs写一个博客系统

##只需要一百来行代码就可以轻松完成
-目录结构
*/}