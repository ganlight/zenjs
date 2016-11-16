views.example.js.multi_select = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        data: [{
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }]
    }
    var config_status = {
        ele: "m-status",
        data: [{
            name: "状态1",
            value: "33"
        }, {
            name: "状态2",
            value: "34"
        }, {
            name: "状态3",
            value: "35"
        }]
    }

    var Service = {
        multi_type:null,
        multi_status:null,
        init: function() {
            this.multi_type = new MultiSelect(config_type);
            this.multi_status = new MultiSelect(config_status);
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.example.js.toggle_group = function() {/*<script>$(function() {
    var toggle_type, toggle_status;
    var config_type = {
        ele: "m-type",
        addAction: function(item) {
            alert("选择"+item.name);
        },
        delAction: function(item) {
            alert("取消"+item.name);
        },
        data: [{
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: false
        }, {
            name: "例子3",
            value: "35",
            selected: false
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }]
    }
    var config_status = {
        ele: "m-status",
        addAction: function(item) {
            alert("选择"+item.name);
        },
        delAction: function(item) {
            alert("取消"+item.name);
        },
        data: [{
            name: "状态1",
            value: "33",
            selected: true
        }, {
            name: "状态2",
            value: "34",
            selected: false
        }, {
            name: "状态3",
            value: "35",
            selected: true
        }]
    }
    toggle_type = new ToggleGroup(config_type);
    toggle_status = new ToggleGroup(config_status);
})
</script>*/}
views.front.js.index = function() {/*<script>$(function() {
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
</script>*/}