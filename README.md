# LightZen

##特点

##为什么这么做

##说明

###zen目录
###views目录
modules文件夹这里面的每一个控件可以单独打开，可以使用。
模块划定，module的template部分，css部分，js部分和页面的html，css，js相分离，更加方便构建大型应用

###js目录
###css目录

##如果去构建
通过运行 gulp -sw 就可以生成dist目录，会自动启动一个web服务器

##如何排除bug
在console中输入Zen.current就能看到该页面相关的对象信息了

##其他
本框架采用接近与js的方式去些，尽量去除其他的框架所带来的负担，为的的是能让这个工具小巧而灵活。
虽然js的框架写法有很多做，但个人建议你按照当前简单的方式来，大道若简是我所崇尚的。
本框架采用zepto，而不是jQuery，所以需要讲原有框架中的Store.data的部分换成jQuery的obj.data,这个需要特别注意
