$(function() {
    var MarkDown = {
        converter: null,
        init: function() {
            if (showdown && showdown.Converter) {
                this.converter = new showdown.Converter();
            } else {
                $(".article-title").html("暂不支持markdown");
            }
        },
        rend: function(article, data) {
            if (this.converter && data) {
                var html = this.converter.makeHtml(data);
                $(".article-title").html(article.title);
                $(".markdown-area").html(html).show();
            }
        },
        load: function(article) {
            var self = this;
            var path = "markdown/" + article.file + ".md";
            console.log(path);
            var data = zen.content(path);
            if (data) {
                self.rend(article, data);
            }
        }
    }
    var Service = {
        id: 0,
        init: function() {
            MarkDown.init();
            var id = this.id = zen.url.getPar("id");
            var book = BOOK_LIBRARY.query(id);
            console.log(book);
            if (book) {
                MarkDown.load(book);
            } else {
                // window.location.href = "#ganlight/blog/catalog";
            }
            this.bind();
        },
        bind: function() {
            $(".zen-page .pre-btn").click(function() {
                if (Service.id > 0) {
                    var id = Service.id - 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    zen.message.toast("没有上一篇了.");
                }
            })
            $(".zen-page .next-btn").click(function() {
                if (Service.id < ZEN_ARTICLES.length - 1) {
                    var id = Service.id + 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    zen.message.toast("没有下一篇了.");
                }
            })
        }
    }
    zen.page.ready(Service);
})
