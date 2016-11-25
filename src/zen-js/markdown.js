var MarkDown = {
    converter: null,
    init: function(articles) {
        if (showdown && showdown.Converter) {
            this.converter = new showdown.Converter();
            Catalog.init(articles);
            var type = Util.getPar("type");
            var file = Util.getPar("file");
            var article = Catalog.get(type, file);
            if (article) {
                MarkDown.load(article);
            } else {
                $(".markdown-area").hide();
                $(".catalog-area").show();
            }
        } else {
            $(".title").html("暂不支持markdown");
        }
    },
    rend: function(article, data) {
        if (this.converter && data) {
            var html = this.converter.makeHtml(data);
            $(".title").html(article.title);
            $(".markdown-area").html(html);
        }
    },
    load: function(article) {
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

var Catalog = {
    articles: [],
    types: null,
    sections: null,
    map: {},
    init: function(articles) {
        this.articles = articles || [];
        this.rend();
    },
    rend: function() {
        var self = this;
        if (this.articles && this.articles.length > 0) {
            var len = this.articles.length;
            var data = this.articles;
            var parent = $(".catalog-area");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var clone = $(".page-template .list-item").clone();
                Store.data(clone, item);
                self.map[item.type + "/" + item.file] = item;
                Util.rendValue(clone, item);
                self.bind(clone);
                parent.append(clone);
            }
        }
    },
    get: function(type, file) {
        var item = this.map[type + "/" + file] || "";
        return item;
    },
    bind: function(clone) {
        var self = this;
        clone.click(function() {
            var data = Store.data(clone);
            if (data && data.file) {
                window.location.href = "#" + Util.getHash() + "?type=" + data.type + "&file=" + data.file;
            }
        })
    }
}
