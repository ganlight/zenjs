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