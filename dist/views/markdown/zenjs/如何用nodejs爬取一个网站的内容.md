如何用nodejs爬取一个网站的内容

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
