var ToggleGroup = function(config) {
    this.ele = $("#" + config.ele);
    this.data = config.data;
    this.para = "";
    this.addAction = config.addAction;
    this.delAction = config.delAction;
    this.rend(config.data);
    this.bind();
}
ToggleGroup.prototype = {
    rend: function(data) {
        var self = this;
        var parent = self.ele;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var clone = parent.find(".template-area .toggle-item").clone();
            Store.data(clone, item);
            clone.text(item.name);
            if (item.selected) {
                parent.find("*[data-type='selected'] .toggle-list").append(clone);
            } else {
                parent.find("*[data-type='none'] .toggle-list").append(clone);
            }
            self.bind(clone);
        }
    },
    add: function(obj) {
        var parent = this.ele;
        var data = Store.data(obj);
        // obj.remove();
        parent.find("*[data-type='selected'] .toggle-list").append(obj);
        data.selected = true;
        Store.data(obj,data);
        this.addAction && this.addAction(data);
    },
    del: function(obj) {
        var parent = this.ele;
        var data = Store.data(obj);
        // obj.remove();
        parent.find("*[data-type='none'] .toggle-list").append(obj);
        data.selected = false;
        Store.data(obj,data);
        this.addAction && this.delAction(data);
    },
    bind: function(clone) {
        var self = this;
        if (clone) {
            clone.click(function() {
                var data = Store.data(clone);
                if (data.selected) {
                    self.del(clone);
                } else {
                    self.add(clone);
                }
            })
        }
    }
}
