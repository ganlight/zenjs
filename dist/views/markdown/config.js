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

// library > shelf > book
//query 根据hash来找
var BookLibrary = {
    booklist: [],
    bookmap: {},
    bookshelf: [shelf_zenjs, shelf_life],
    init: function() {
        var self = this;
        var len = self.bookshelf.length;
        for (var i = 0; i < len; i++) {
            var shelf = self.bookshelf[i];
            self.add(shelf);
        }
        return this;
    },
    query: function(hash) {
        if (hash && this.bookmap[hash]) {
            return this.bookmap[hash];
        }
        return false;
    },
    add: function(shelf) {
        var self = this;
        var catalog= shelf.catalog;
        var books = shelf.books;
        var len = books.length;
        for (var i = 0; i < len; i++) {
            var book = books[i];
            book.hash = "BOOK-ID-"+zen.hash(book.file);
            self.booklist.push(book);
            self.bookmap[book.hash] = book;
            catalog.num++;
        }
    }
}

var ZEN_ARTICLES = [];
var BOOK_LIBRARY = BookLibrary.init();
