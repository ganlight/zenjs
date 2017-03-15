var books_zenjs = [{
    title: "Zenjs的安装使用",
    desc: "Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 1",
    section: "begin",
    file: "zenjs/install"
}, {
    title: "关于 ZENJS",
    desc: "Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 2",
    section: "begin",
    file: "zenjs/about-zenjs"
}, {
    title: "如何用nodejs爬取一个网站的内容",
    desc: "Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 3",
    section: "begin",
    file: "zenjs/如何用nodejs爬取一个网站的内容"
}]

var books_life = [{
    title: "LIFE 关于 ZENJS",
    desc: "Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 2",
    section: "begin",
    file: "zenjs/about-zenjs"
}]

var shelf_zenjs = {
    catalog: {
        name: "ZENJS 相关",
        num: 0,
    },
    books: books_zenjs
}

var shelf_life = {
    catalog: {
        name: "LIFE 相关",
        num: 0,
    },
    books: books_life
}

var SHELFS = [shelf_zenjs, shelf_life];
var BOOK_LIBRARY = new zen.blog(SHELFS);
