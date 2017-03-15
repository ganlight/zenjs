var books_zenjs = [{
    title: "Zenjs的安装使用",
    file: "zenjs/install"
}, {
    title: "关于 ZENJS",
    file: "zenjs/about-zenjs"
}, {
    title: "如何用nodejs爬取一个网站的内容",
    file: "zenjs/如何用nodejs爬取一个网站的内容"
}]

var books_life = [{
    title: "LIFE 关于 ZENJS",
    file: "zenjs/about-zenjs"
}]

var shelf_zenjs = {
    catalog: {
        name: "ZENJS 相关",
        type: "intro",
        num: 0,
    },
    books: books_zenjs
}

var shelf_life = {
    catalog: {
        name: "LIFE 相关",
        type: "start",
        num: 0,
    },
    books: books_life
}

var SHELFS = [shelf_zenjs, shelf_life];
var BOOK_LIBRARY = new zen.blog(SHELFS);
