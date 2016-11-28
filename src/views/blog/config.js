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

var Catalog = {
    articles: [],
    types: null,
    sections: null,
    map: {},
    init: function() {
        if (articles) {
            this.articles = articles;
            this.rend();
        }
    },
    rend: function() {
        var self = this;
        if (this.articles && this.articles.length > 0) {
            var len = this.articles.length;
            var data = this.articles;
            var parent = $(".catalog-area");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                item.id = i;
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
    getIndex: function(type, file) {
        var item = this.map[type + "/" + file] || "";
        return item;
    },
    bind: function(clone) {
        var self = this;
        clone.click(function() {
            var data = Store.data(clone);
            if (data && data.id > -1) {
                window.location.href = "#blog/article" + "?id=" + data.id;
            }
        })
    }
}

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
        var url = "views" + '["blog/markdown/' + article.type + "/" + article.file + '.md"]';
        var data = Zen.parse(eval(url));
        if (data) {
            data = data.replace(/__block_head__/g, '/*')
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
