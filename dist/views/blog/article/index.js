$(function() {
    var MarkDown = {
        converter: null,
        init: function() {
            if (showdown && showdown.Converter) {
                this.converter = new showdown.Converter();
            } else {
                $(".title").html("暂不支持markdown");
            }
        },
        rend: function(article, data) {
            if (this.converter && data) {
                var html = this.converter.makeHtml(data);
                $(".title").html(article.title);
                $(".markdown-area").html(html).show();
            }
        },
        load: function(article) {
            var self = this;
            var url = "views" + '["blog/markdown/' + article.file + '.md"]';
            var data = Zen.parse(eval(url));
            if (data) {
                data = data.replace(/__block_head__/g, '/*').replace(/__block_foot__/g, "*\/");
                self.rend(article, data);
            }
        },
        load_file: function(article) {
            var self = this;
            var url = "blog/" + article.type + "/" + article.file + ".md";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    $(".catalog-area").hide();
                    $(".markdown-area").show();
                    self.rend(article, data);
                },
                error: function(e) {
                    $(".markdown-area").hide();
                    $(".catalog-area").show();
                    Message.toast("当前文章" + article.file + "不存在，请返回其他文章");
                }
            });
        }
    }
    var Service = {
        id: 0,
        init: function() {
            MarkDown.init();
            var id = this.id = parseInt(URL.getPar("id")) || 0;
            if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                MarkDown.load(ZEN_ARTICLES[id]);
            } else {
                window.location.href = "#blog/article?id=0";
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
                    Message.toast("没有上一篇了.");
                }
            })
            $(".zen-page .next-btn").click(function() {
                if (Service.id < ZEN_ARTICLES.length - 1) {
                    var id = Service.id + 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    Message.toast("没有下一篇了.");
                }
            })
        }
    }
    Zen.ready(Service);
})
