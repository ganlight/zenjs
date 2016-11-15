$(function() {
    var pages = [{
        "name": "toggle-group",
        "href": "#example/toggle-group"
    }, {
        "name": "multi-select",
        "href": "#example/multi-select"
    }, {
        "name": "alert",
        "action": "Message.alert('Light Zen')"
    }, {
        "name": "toast",
        "action": "Message.toast('Light Zen')"
    }, {
        "name": "confirm",
        "action": "Message.confirm('Light Zen')"
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
                if (data.href) {
                    window.location.href = data.href;
                }
                if (data.action) {
                    eval(data.action);
                }

            })
        }
    }
    Zen.ready(Service);
})
