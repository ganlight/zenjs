$(function() {
    var pages = [{
        "name": "red",
        "href": "#front/red"
    }, {
        "name": "green",
        "href": "#front/green"
    }, {
        "name": "page",
        "href": "#front/page"
    }, {
        "name": "toggle-group",
        "href": "#example/toggle-group"
    }, {
        "name": "multi-select",
        "href": "#example/multi-select"
    }];
    var Service = {
        init: function() {
            this.data = pages;
            this.rend();
        },
        rend: function() {
            var self = this;
            var data = pages;
            var parent = $(".page-list");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var clone = $(".page-template .list-item").clone();
                Store.data(clone, item);
                Util.rendValue(clone, item);
                self.bind(clone);
                parent.append(clone);
            }
        },
        bind: function(clone) {
            clone.click(function() {
                var data = Store.data(clone);
                window.location.href = data.href;
            })
        }
    }
    Zen.ready(Service);
})
