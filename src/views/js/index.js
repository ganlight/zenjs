$(function() {
    var pages = [{
        "name": "red",
        "href": "#red"
    }, {
        "name": "green",
        "href": "#green"
    }, {
        "name": "page",
        "href": "#page"
    }, {
        "name": "front-page",
        "href": "#views/front/page"
    }, {
        "name": "multi-select",
        "href": "#example/multi-select"
    }];
    var Service = {
        init: function() {
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

    Service.init();
    delete Zen.current;
    Zen.current = Service;
})
