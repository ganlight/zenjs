# js模板
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
