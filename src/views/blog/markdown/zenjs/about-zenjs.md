

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
