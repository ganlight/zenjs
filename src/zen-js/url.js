var URL = {
    go: function(href) {
        //通过加时间戳可以,去除微信的缓存
        if (!href) return;
        window.location.href = href;
    },
    getPar: function(par) {
        var local_url = document.location.href;
        //获取要取得的get参数位置
        var get = local_url.indexOf(par + "=");
        if (get == -1) {
            return false;
        }
        //截取字符串
        var get_par = local_url.slice(par.length + get + 1);
        //判断截取后的字符串是否还有其他get参数
        var nextPar = get_par.indexOf("&");
        if (nextPar != -1) {
            get_par = get_par.slice(0, nextPar);
        }
        return get_par;
    },
    getHash: function() {
        var hash = window.location.hash.replace("#", "");
        hash = hash.split("?")[0];
        return hash;
    },
    toCamel: function(name) {
        //例如foo-style-css 变为fooStyleCss
        var name = name.replace(/\-(\w)/g, function(all, letter) {　　　　　
            return letter.toUpperCase();　　　　
        });
        return name;
    },
    toName: function(name) {
        //例如fooStyleCss变为foo-style-css
        var name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
        return name;
    },
    pathname: function(path) {
        // change path to the function name
        var pathname = path.replace(".js", "_js").replace(".html", "_html").replace(/-/g, "_").replace(/\//g, "__");
        return pathname;
    }
}
