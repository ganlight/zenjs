var Store = {
    data: function(clone, obj) {
        if (obj) {
            if (typeof(obj) == 'string') {
                clone.data("data", obj);
            } else {
                clone.data("data", JSON.stringify(obj));
            }
        } else {
            var _data = clone.data("data");
            return _data;
        }
    },
    gData: function(item) {
        var item_value = window.sessionStorage.getItem(item);
        if (item_value == null || item_value == "") {
            return null;
        };
        item_value = JSON.parse(window.sessionStorage.getItem(item));
        return item_value;
    },
    sData: function(name, json) {
        window.sessionStorage.setItem(name, JSON.stringify(json));
    },
    sValue: function(name, value) {
        window.sessionStorage.setItem(name, value);
    },
    gValue: function(name) {
        var value = window.sessionStorage.getItem(name);
        return value;
    },
    sLocal: function(name, value) {
        localStorage.setItem(name, value);
    },
    gLocal: function(name) {
        var value = localStorage.getItem(name);
        return value;
    },
    setLocal: function(name, json) {
        //保存json对象
        localStorage.setItem(name, JSON.stringify(json));
    },
    getLocal: function(name) {
        var value = localStorage.getItem(name);
        if (value == null || value == "") {
            return null;
        };
        try {
            value = JSON.parse(localStorage.getItem(name));
            return value;
        } catch (e) {
            console.log(e);
        }
        return null;
    },
    dLocal: function(name) {
        localStorage.removeItem(name);
    },
    sHref: function(url) {
        if (!url) {
            window.sessionStorage.setItem("redirect_url", window.location.href);
        } else {
            window.sessionStorage.setItem("redirect_url", url);
        }
    },
    goHref: function() {
        var redirect_url = window.sessionStorage.getItem("redirect_url");
        if (redirect_url == null || redirect_url == "") {
            redirect_url = '/';
        }
        window.location.href = redirect_url;
    },
    gHref: function() {
        var redirect_url = window.sessionStorage.getItem("redirect_url");
        if (redirect_url == null || redirect_url == "") {
            redirect_url = '/';
        }
        return redirect_url;
    }
}
