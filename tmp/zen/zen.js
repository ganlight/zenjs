/*
系统全局相关
*/
//ENV 可设置为 DEV 和 PUB
var CGI = {
    //不同环境的配置，可设置为 DEV , PUB , TEST
    ENV: 'DEV',
    SET: {
        PUBLIC: {
            COACH_TYPE: 'public/coach/types',
            COACH_LIST: 'public/coach/list',
            COACH_DETAIL: 'public/coach/detail',
            JOB_LIST: 'public/job/list',
            JOB_DETAIL: 'public/job/detail'
        },
        TYPE: {
            //用来设置不同环境的类型
            DEV: 'get',
            TEST: 'post',
            PUB: 'post'
        },
        ROOT: {
            //用来设置不同环境的API地址
            DEV: '/assets/json/',
            TEST: 'http://localhost/',
            PUB: '/server/api/'
        }
    },
    TYPE: function() {
        var ajaxType = CGI.SET.TYPE[CGI.ENV] || "post";
        return ajaxType;
    },
    URL: function(module, name) {
        var suffix = "?t=" + new Date().getTime();
        if (CGI.ENV == "PUB") {
            suffix = ".php?t=" + new Date().getTime();
        }
        return CGI.SET.ROOT[CGI.ENV] + CGI.SET[module][name] + suffix;
    },
    ajax: function(url, data, success) {
        var type = CGI.TYPE();
        $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            data: data,
            success: function(json) {
                success(json);
            }
        });
    },
    ajaxModule: function(url, data, success) {
        var type = CGI.TYPE();
        $.ajax({
            url: url,
            type: type,
            async: false,
            dataType: 'json',
            data: data,
            success: function(json) {
                success(json);
            }
        });
    },
    getView: function(name) {
        var url = "views/" + name + ".html";
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                $("#app").html(data);
                Zen.init();
            },
            error: function(e) {
                window.location.hash = "index";
                // CGI.getView("views/red");
            }
        });
    }
}

var Check = {
    name: function(s) {
        //检验姓名：姓名是2-15字的汉字
        var patrn = /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;
        if (!patrn.exec(s)) {
            return false;
        }
        return true;
    },
    idCard: function(card) {
        //检查身份证
        return IDCard.check(card);
    },
    number: function(s) {
        if (s.length == 0) {
            return false;
        }
        if (s.length != 6) {
            return false;
        }
        var patrn = /^\s*\d+\s*$/;
        //var patrn1=/^\s*\d{16}[\dxX]{2}\s*$/;
        if (!patrn.exec(s)) {
            return false;
        }
        return true;
    },
    phone: function(phone) {
        if (phone.length == 0) {
            return false;
        }
        if (phone.length != 11) {
            return false;
        }
        if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone))) {
            return false;
        }
        return true;
    },
    password: function(password) {
        if (password.length == 0) {
            return false;
        }
        if (password.length < 6 || password.length > 16) {
            return false;
        }
        return true;
    },
    code: function(code) {
        if (code.length == 0) {
            return false;
        }
        if (code.length == 6) {
            return true;
        }
        return false;
    },
    bankcard: function(bankno) {
        if (bankno.length < 8 || bankno.length > 19) {
            //$("#banknoInfo").html("银行卡号长度必须在16到19之间");
            return false;
        }
        var num = /^\d*$/; //全数字
        if (!num.exec(bankno)) {
            //$("#banknoInfo").html("银行卡号必须全为数字");
            return false;
        }
        return true;
    },
    agreement: function() {
        if ($(".agreement").length) {
            if (!$(".agreement").hasClass("selected")) {
                Message.toast("您需要阅读并同意《用户协议》");
                return false;
            };
            return true;
        };
    }
}

/**
*Encrypt 原理参照 字符串的加密解密,还有uft8的转化
http://www.codefans.net/jscss/code/3406.shtml
http://files.cnblogs.com/files/mofish/base64.js
*/
var Encrypt = {
    encode: function(str, pwd) {
        if (pwd == null || pwd.length <= 0) {
            pwd = "zenjs";
        }
        str = this.utf8_encode(str);
        var prand = "";
        for (var i = 0; i < pwd.length; i++) {
            prand += pwd.charCodeAt(i).toString();
        }
        var sPos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
        var incr = Math.ceil(pwd.length / 2);
        var modu = Math.pow(2, 31) - 1;
        if (mult < 2) {
            return null;
        }
        var salt = Math.round(Math.random() * 1000000000) % 100000000;
        prand += salt;
        while (prand.length > 10) {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr = "";
        var enc_str = "";
        for (var i = 0; i < str.length; i++) {
            enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
            if (enc_chr < 16) {
                enc_str += "0" + enc_chr.toString(16);
            } else enc_str += enc_chr.toString(16);
            prand = (mult * prand + incr) % modu;
        }
        salt = salt.toString(16);
        while (salt.length < 8) salt = "0" + salt;
        enc_str += salt;
        return enc_str;
    },
    decode: function(str, pwd) {
        if (str == null || str.length < 8) {
            return;
        }
        if (pwd == null || pwd.length <= 0) {
            pwd = "zenjs";
        }
        var prand = "";
        for (var i = 0; i < pwd.length; i++) {
            prand += pwd.charCodeAt(i).toString();
        }
        var sPos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
        var incr = Math.round(pwd.length / 2);
        var modu = Math.pow(2, 31) - 1;
        var salt = parseInt(str.substring(str.length - 8, str.length), 16);
        str = str.substring(0, str.length - 8);
        prand += salt;
        while (prand.length > 10) {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr = "";
        var enc_str = "";
        for (var i = 0; i < str.length; i += 2) {
            enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
            enc_str += String.fromCharCode(enc_chr);
            prand = (mult * prand + incr) % modu;
        }
        enc_str = this.utf8_decode(enc_str);
        return enc_str;
    },
    utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    },
    utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

var Filter = {
    money: function(value) {
        if (value == "" || isNaN(value) || value == Infinity) {
            value = parseFloat("0").toFixed(2);
        } else {
            value = parseFloat(value).toFixed(2);
        }
        return value;
    },
    fmoney: function(s, n) {
        if (n < 0 || n > 20) {
            n = 2;
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        len = l.length;
        if (l[len - 1] == '-') {
            len = len - 1;
        }
        for (i = 0; i < len; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != len ? "," : "");
        }
        if (l[len] == '-') {
            t += '-';
        }
        if (n == 0) {
            return t.split("").reverse().join("");
        }
        return t.split("").reverse().join("") + "." + r;
    },
    times: function(datepicker1, datepicker2) {
        var _times = "";
        if ($('#' + datepicker1).length && $('#' + datepicker2).length) {
            var start_time = $('#' + datepicker1).val().replace(/\//g, '');
            var end_time = $('#' + datepicker2).val().replace(/\//g, '');
            if (start_time) {
                _times = start_time + '-';
            } else {
                _times = '-';
            }
            if (end_time) {
                _times += end_time;
            } else {
                end_time = '';
            }
        }
        return _times;
    },
    time: function(time, type, fm) {
        if (!time) {
            return "";
        }
        var date = new Date();
        date.setTime(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var mm = date.getMinutes();
        mm = mm < 10 ? ('0' + mm) : mm;
        var s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var mm = date.getMinutes();
        mm = mm < 10 ? ('0' + mm) : mm;
        var s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        if (type) {
            return y + '-' + m + '-' + d;
        }
        if (fm) {
            return y + '/' + m + '/' + d + " " + h + ":" + mm + ":" + s;
        }
        return y + '-' + m + '-' + d + " " + h + ":" + mm + ":" + s;
    },
    date: function(time) {
        var date = new Date();
        date.setTime(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '/' + m + '/' + d;
    },
    datestr: function(time) {
        var date = new Date();
        date.setTime(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '' + m + '' + d;
    }
}

var Message = {};
Message.close = function() {
    $(".c-confirm").hide(300);
    $(".c-alert").hide(300);
    $(".c-select").hide(300);
    $(".c-dropdown").hide(300);
    $(".custom-confirm").hide(300);
}

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

var Template = {
    select: function(data, sname) {
        var sdata = data[sname];
        if ($("select[name=" + sname + "]").length) {
            for (var i in sdata) {
                $("select[name=" + sname + "]").append('<option value="' + i + '">' + sdata[i] + '</option>');
            }
        }
    },
    input: function(sname) {
        var input = $("input[name=" + sname + "]");
        if (input.length && input.val()) {
            if (sname.indexOf("date") > -1) {
                var value = input.val();
                var date = new Date(value).getTime();
                return date;
            }
            return input.val();
        }
        return "";
    },
    values: function(item, data) {
        for (var key in data) {
            if (key.indexOf("times") == -1 && key.indexOf("time") > -1) {
                item.find('.' + key).text(Filter.time(data[key]));
            } else if (key.indexOf("date") > -1) {
                item.find('.' + key).text(Filter.date(data[key]));
            } else {
                item.find('.' + key).text(data[key]);
            }
        }
    }
}

var URL = {
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

var Util = {
    lastClick: null,
    once: function(fn) {
        var now = new Date().getTime();
        if (now - Util.lastClick < 2000) {
            Message.toast("您的操作过快，请稍后尝试");
            return;
        };
        Util.lastClick = now;
        fn && fn();
    },
    join: function(des, src, override) {
        if (src instanceof Array) {
            for (var i = 0, len = src.length; i < len; i++)
                Util.join(des, src[i], override);
        }
        for (var i in src) {
            if (override || !(i in des)) {
                des[i] = src[i];
            }
        }
        return des;
    },
    _date: function() {
        /*
        时间格式化
        */
        Date.prototype.format = function(fmt) {
            var o = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S": this.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt
        };
        Date.parseJsonDate = function(jsonDate) {
            if (Object.prototype.toString.call(jsonDate) == "[object Date]") {
                return jsonDate
            }
            var reg = /\((\d+)\)/;
            if (reg.test(jsonDate)) return new Date(reg.exec(jsonDate)[1] - 0);
            return utlis.servertime()
        };
    },
    dateFull: function(time) {
        return new Date(time).format("yyyy年MM月dd日 hh:mm");
    },
    dateStr: function(time) {
        return new Date(time).format("yyyy-MM-dd hh:mm");
    },
    dateShort: function(time) {
        return new Date(time).format("hh:mm:ss");
    },
    dateDot: function(time) {
        return new Date(time).format("yyyy.MM.dd");
    },
    date: function(time) {
        return new Date(time).format("yyyy-MM-dd");
    },
    _resize: function() {
        var SCALE = (window.innerWidth || document.body && document.body.clientWidth) / 320;
        // $('html').css('font-size', SCALE * 62.5 + '%');
        //针对小手机，此处都不缩放
        $('html').css('font-size', 62.5 + '%');
    },
    resize: function() {
        Util._resize();
        $(window).resize(function() {
            Util._resize();
        });
    },
    min: function(a, b) {
        if (a < b) {
            return a
        } else {
            return b
        };
    },
    check: function(prams) {
        if (typeof(prams) == "undefined" || prams == null || prams == "") {
            return true;
        } else {
            return false;
        }
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
    isMobile: function() {
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if (system.win || system.mac || system.xll) {
            return false;
        } else {
            return true;
        }
    },
    trim: function(str, is_global) { //去掉空格
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    },
    fmoney: function(s, n) {
        if (n < 0 || n > 20) {
            n = 2;
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        len = l.length;
        if (l[len - 1] == '-') {
            len = len - 1;
        }
        for (i = 0; i < len; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != len ? "," : "");
        }
        if (l[len] == '-') {
            t += '-';
        }
        if (n == 0) {
            return t.split("").reverse().join("");
        }
        return t.split("").reverse().join("") + "." + r;
    },
    fixMoney: function(value) {
        if (value == "" || isNaN(value) || value == Infinity) {
            value = parseFloat("0").toFixed(2);
        } else {
            value = parseFloat(value).toFixed(2);
        }
        return value;
    },
    getTimes: function(datepicker1, datepicker2) {
        var _times = "";
        if ($('#' + datepicker1).length && $('#' + datepicker2).length) {
            var start_time = $('#' + datepicker1).val().replace(/\//g, '');
            var end_time = $('#' + datepicker2).val().replace(/\//g, '');
            if (start_time) {
                _times = start_time + '-';
            } else {
                _times = '-';
            }
            if (end_time) {
                _times += end_time;
            } else {
                end_time = '';
            }
        }
        return _times;
    },
    rendSelect: function(data, sname) {
        var sdata = data[sname];
        if ($("select[name=" + sname + "]").length) {
            for (var i in sdata) {
                $("select[name=" + sname + "]").append('<option value="' + i + '">' + sdata[i] + '</option>');
            }
        }
    },
    rendValue: function(item, data) {
        for (var key in data) {
            if (key.indexOf("times") == -1 && key.indexOf("time") > -1) {
                item.find('.' + key).text(Util.dateStr(data[key]));
            } else if (key.indexOf("date") > -1) {
                item.find('.' + key).text(Util.date(data[key]));
            } else {
                item.find('.' + key).text(data[key]);
            }
        }
    },
    getCommonPart: function(url, tag) {
        $.ajax({
            url: url,
            type: 'get',
            async: false,
            dataType: 'html',
            success: function(data) {
                $(tag).html(data);
            }
        });
    },
    fmoney: function(s, n) {
        if (n < 0 || n > 20) {
            n = 2;
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        if (n == 0) {
            return t.split("").reverse().join("");
        }
        return t.split("").reverse().join("") + "." + r;
    },
    scrollShow: function(obj) {
        $(window).scroll(function() {
            if (window.scrollY > 200) {
                $(obj).show(300);
            } else {
                $(obj).hide();
            }
        });
    },
    alertOver: function() {
        Message.alert("当前活动已经结束，请关注盈火虫公众号参与更多活动！", function() {
            window.location.href = "/";
        });
    }
}

var views = {
}

var Zen = {
    mode: "normal",
    boot: function() {
        // this.support();
        $(document).ready(function() {
            Zen.init();
            Zen.load();
            Zen.bind();
        });
    },
    bind: function() {
        if (FastClick) {
            FastClick.attach(document.body);
        }
        $(window).on('hashchange', function() {
            var name = Util.getHash() || "index";
            Zen.load()
        });
    },
    debug: function(status) {
        var mode = "normal";
        if (status == "debug") {
            mode = "debug";
        }
        Store.sLocal("ZEN_DEBUG", mode);
        this.isDebug = mode;
    },
    support: function() {
        //用于加载其他cdn库，zepto必须先引入，只引入其他的need的选项
        var libs = {
            "zepto": {
                type: "script",
                import: "must",
                cdn: "<script src='//cdn.bootcss.com/zepto/1.2.0/zepto.min.js'></script>"
            },
            "fastclick": {
                type: "script",
                import: "need",
                cdn: "<script src='//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js'></script>"
            },
            "showdown": {
                type: "script",
                import: "need",
                cdn: "<script src='//cdn.bootcss.com/showdown/1.5.0/showdown.min.js'></script>"
            },
            "font-awesome": {
                type: "style",
                import: "need",
                cdn: "<link href='//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>"
            }
        }
        for (var lib in libs) {
            if (libs[lib].import == "need") {
                var ele = $(libs[lib]["cdn"]);
                if (libs[lib].type == "style") {
                    $("title").after(ele);
                } else {
                    $("head").append(ele);
                }
            }
        }
    },
    init: function() {
        this.isDebug = Store.gLocal("ZEN_DEBUG") || false;
        if (Zen.modules) {
            var modules = Zen.parse(Zen.modules);
            var moudles_div = $("<div>").addClass("zen-modules");
            moudles_div.append(modules);
            $("body").append(moudles_div);
        }
        if (Zen.css) {
            var css = Zen.parse(Zen.css);
            $("title").after(css);
        }
        if (views.common_css) {
            var common_css = Zen.parse(views.common_css);
            $("head").append(common_css);
        }
        if (views.common_js) {
            var common_js = Zen.parse(views.common_js);
            $("head").append(common_js);
        }
    },
    load: function() {
        console.time("load");
        delete Zen.current;
        var page = Util.getHash() || "index";
        console.log("###Zen enter : " + page);
        this.load_view();
        this.load_module();
        this.load_script();
        console.timeEnd("load");
    },
    getModule: function(type) {
        var module = "";
        var hash = Util.getHash() || "index";
        var name = "views." + this.pathname(hash) + "_" + type;
        var name_index = "views." + this.pathname(hash) + "__index_" + type;
        if (eval(name)) {
            module = this.parse(eval(name));
            console.log("Zen module : " + name);
            return module;
        }
        if (eval(name_index)) {
            module = this.parse(eval(name_index));
            console.log("Zen module : " + name);
            return module;
        }
        return;
    },
    load_view: function() {
        console.time("load_view");
        var view = "",
            css, html, js;
        var page = $("#app");
        page.empty();
        css = this.getModule("css");
        html = this.getModule("html");
        js = this.getModule("js");
        if (css) {
            view += css;
        }
        if (html) {
            view += html;
        }
        if (js) {
            if (this.isDebug == "debug") {
                this.debug_script();
            } else {
                view += js;
                this.debug_clear();
            }
        }
        if (view) {
            page.append(view);
        }
        console.timeEnd("load_view");
    },
    load_module: function() {
        console.time("load_module");
        var app = $("#app");
        app.find('*[v-zen]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var name = $(this).attr('v-zen');
            if (!name) return;
            var zen = $(".zen-modules .c-" + name).clone();
            _this.html(zen);
        });
        $('*[v-insert]').each(function() {
            //对包含v-insert的加载html
            var _this = $(this);
            var _insert = $(this).attr('v-insert');
            if (!_insert) return;
            var url = _insert + ".html";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    _this.html(data);
                }
            });
        });
        $('*[v-slot]').each(function() {
            //对包含v-slot的加载特定id的代码块
            var _this = $(this);
            var _slot = $(this).attr('v-slot');
            if (!_slot) return;
            _this.html($("#" + _slot));
        });
        $('*[v-send]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms,fn
            var _send = $(this).attr('v-send');
            if (!_send) return;
            var _para = _send.split(',')
            Message.send(_para[0], _para[1], _para[2]);
        });
        $('*[v-select]').click(function() {
            //对包含v-send相关的控件，直接进行发送短信或语音验证码
            //这里包含多个参数例如，regist,sms
            var _select = $(this).attr('v-select');
            if (!_select) return;
            Message.select('', _select);
        });
        $('*[v-toggle]').click(function() {
            //对包含v-toggle相关的控件，直接进行绑定操作
            var _toggle = $(this).attr('v-toggle');
            if (!_toggle) return;
            $("#" + _toggle).toggle();
            $(this).toggleClass("selected");
        });
        $('*[v-link]').click(function() {
            //对包含v-link相关的地址，直接绑定事件跳转
            var _link = $(this).attr('v-link');
            if (!_link) return;
            window.location.href = _link;
        });
        $(".zen-page").attr("data-ready", "ready");
        // $(".zen-page").addClass("slideIn");
        console.timeEnd("load_module");
    },
    load_script: function(href) {
        //用于加载外部引用的script脚本
        var head = $('head');
        head.find("*[data-type='page-script']").remove();
        var items = $('*[v-script]');
        for (var i = 0; i < items.length; i++) {
            var item = items.eq(i);
            var clone = $('<script>').attr("type", "text/javascript");
            if (item && item.attr("v-script")) {
                var script_src = item.attr("v-script");
                if (script_src.indexOf("views") == -1) {
                    clone.attr("src", script_src);
                    clone.attr("data-type", 'page-script');
                    head.append(clone);
                    item.remove();
                } else {
                    var script_name = this.pathname(script_src).replace("views__", "views.");
                    script = this.parse(eval(script_name));
                    item.after(script);
                    item.remove();
                }
            }
        }
    },
    debug_clear: function() {
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
    },
    debug_script: function() {
        //用于调试单页的script脚本(模块下的index.js)
        var href = "views/" + Util.getHash() + "/index.js";
        var head = $('head');
        head.find("*[data-type='debug-script']").remove();
        var clone = $('<script>').attr("type", "text/javascript");
        clone.attr("src", href);
        clone.attr("data-type", 'debug-script');
        head.append(clone);
    },
    parse: function(fn) {
        //这里面主要将html和js代码转化成js函数，通过这样的方式，可以获取里面的内容
        //如果是多行文本采用下面的方式
        // return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
        if (typeof fn === 'function') {
            var string = fn.toString();
            if (string.length > 20) {
                return string.slice(15, -3);
            }
        }
        return;
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
    },
    delay: function(fn) {
        if ($(".zen-page").attr("data-ready") == "ready") {
            fn && fn();
            return;
        } else {
            console.log("Zen delay : 5ms");
            setTimeout(function() {
                Zen.delay(fn)
            }, 5)
        }
    },
    ready: function(service) {
        console.time("ready");
        //用于引导页面，并且便于获取调试信息
        var page = Util.getHash() || "index";
        //如果前面的zen-page沒有渲染好，需要等待
        this.delay(function() {
            service && service.init && service.init();
            Zen.current = service || page;
            console.log("***Zen ready : " + page);
        });
        console.timeEnd("ready");
    }
}
Zen.boot();

Message.alert = function(message, fn) {
    var $toast = $(".c-alert");
    $(".c-alert .message-text").html(message);
    $toast.show(300);
    $(".c-alert .alert-ok").unbind('click').click(function() {
        fn && fn();
        Message.close();
    });
}

Message.confirm = function(message, fn) {
    var $toast = $(".c-confirm");
    $(".c-confirm .message-text").html(message);
    $toast.show(300);
    $(".c-confirm .confirm-ok").unbind('click').click(function() {
        fn && fn();
        Message.close();
    });
    $(".c-confirm .confirm-cancel").unbind('click').click(function() {
        Message.close();
    });
    $(".c-confirm .mask").unbind('click').click(function() {
        Message.close();
    });
}

var Message1 = {
    toast: function(message) {
        var $toast = $(".c-toast");
        $(".c-toast .message-text").text(message);
        $toast.show(300);
        setTimeout(function() {
            $(".c-toast").hide(500);
        }, 2000);
    },
    alert: function alert(message, fn) {
        var $toast = $(".c-alert");
        $(".c-alert .message-text").html(message);
        $toast.show(300);
        $(".c-alert .alert-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
    },
    confirm: function(message, fn) {
        var $toast = $(".c-confirm");
        $(".c-confirm .message-text").html(message);
        $toast.show(300);
        $(".c-confirm .confirm-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
        $(".c-confirm .confirm-cancel").unbind('click').click(function() {
            Message.close();
        });
        $(".c-confirm .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    custom: function(name) {
        var $toast = $("#" + name);
        $toast.show(300);
        $(".custom-confirm .confirm-cancel").unbind('click').click(function() {
            Message.close();
        });
        $(".custom-confirm .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    select: function(title, slot, fn) {
        var $toast = $("#" + slot);
        $toast.find(".header-div .title").text(title);
        $toast.show(300);
        $(".c-select .select-ok").unbind('click').click(function() {
            fn && fn();
            Message.close();
        });
        $(".c-select .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    dropdown: function(slot) {
        var $toast = $("#" + slot);
        $toast.show(300);
        $(".c-dropdown .dropdown-btn").unbind('click').click(function() {
            Message.close();
        });
        $(".c-dropdown .mask").unbind('click').click(function() {
            Message.close();
        });
    },
    close: function() {
        $(".c-confirm").hide(300);
        $(".c-alert").hide(300);
        $(".c-select").hide(300);
        $(".c-dropdown").hide(300);
        $(".custom-confirm").hide(300);
    },
    send: function(verify_type, send_type, fn) {
        //回调函数，在执行先执行
        if (fn) {
            //如果执行结果为false，则不往下走
            var fun = eval(fn)
            if (!fun()) return;
        }
        var sms = $(".sms-btn");
        var voice = $(".voice-btn");
        if (sms.hasClass("gray")) {
            return;
        }
        if (voice.hasClass("gray")) {
            return;
        }
        var url = CGI.URL('USER', 'R_VERIFY_CODE');
        $.ajax({
            url: url,
            dataType: 'json',
            beforeSend: function() {
                sms.addClass("gray");
                voice.addClass("gray");
            },
            data: {
                "phone": $("input[name='phone']").val(),
                "verify_type": verify_type,
                "send_type": send_type
            },
            success: function(json) {
                if (json.code == "00000") {
                    Message.nextClick(60, send_type);
                } else {
                    if (json.code == "50025" || json.code == "50027") {
                        Message.nextClick(json.result.time_left, send_type);
                    } else {
                        Message.alert(json.message);
                        $(".custom-confirm .error-message").text(json.message).removeClass('hide');
                        voice.removeClass("gray");
                        sms.removeClass("gray").text("获取验证码");
                        voice.text("收不到短信?试试语音验证");
                        wait = 60;
                    }
                }
            }
        });
    },
    nextClick: function(wait, send_type) {
        var sms = $(".sms-btn");
        var voice = $(".voice-btn");
        if (wait == 0) {
            voice.removeClass("gray");
            sms.removeClass("gray").text("获取验证码");
            voice.text("收不到短信?试试语音验证");
            wait = 60;
        } else {
            if (!sms.hasClass("gray")) {
                sms.addClass("gray");
            }
            if (!voice.hasClass("gray")) {
                voice.addClass("gray");
            }
            sms.text(wait + "秒重获");
            if (send_type == "voice") {
                voice.text("请注意接听随机电话号码的语音验证码");
            } else {
                voice.text("请等候" + wait + "秒后再试试语音验证");
            };
            wait--;
            setTimeout(function() {
                Message.nextClick(wait, send_type);
            }, 1000);
        }
    }
}

var MultiSelect = function(config) {
    if (config && config.ele && config.data) {
        this.ele = $("#" + config.ele);
        this.data = config.data;
        this.para = "";
        this.rend(config.data);
        this.bind();
    }
    return this;
}

MultiSelect.prototype = {
    rend: function(data) {
        var _this = this;
        var parent = _this.ele.find(".select-list");
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var clone = $("<div>").addClass("select-item");
            Store.data(clone, item);
            clone.attr("data-value", item.value).text(item.name);
            // MultiSelect.bind(clone);
            parent.append(clone);
        }
    },
    bind: function() {
        var _this = this;
        this.ele.find(".select-item").click(function() {
            var $this = $(this);
            if (!$this.attr("data-value")) {
                _this.ele.find(".select-item").removeClass("selected");
            } else {
                _this.ele.find(".select-item").eq(0).removeClass("selected");
            }
            $this.toggleClass("selected");
            _this.rendValue();
        });
    },
    rendValue: function() {
        var _this = this;
        var parent = _this.ele.find(".select-list");
        var value = "";
        var name = "";
        parent.find(".selected").each(function() {
            var $this = $(this);
            if ($this.attr("data-value")) {
                if (value == "") {
                    value += $this.attr("data-value");
                    name += $this.text();
                } else {
                    value += "," + $this.attr("data-value");
                    name += "," + $this.text();
                }
            }
        });
        if (value == "") {
            name = "请选择";
        }
        _this.ele.find(".select-area").text(name);
        _this.ele.attr("data-value", value);
        _this.para = value;
    }
}

var PageTips = {
    tips: null,
    page: null,
    init: function(page) {
        this.tips = $('.c-page-tips');
        this.tips.show();
        this.page = page;
        PageTips.rend();
        setInterval(function() {
            PageTips.rend();
        }, 1000);
    },
    list: function() {
        var tips = this.tips;
        var page = this.page;
        var text = "当前加载" + page.current_page + "/" + page.page_count + "页，共" + page.item_count + "条数据"
        tips.find('.text').text(text);
        tips.attr("data-status", 'enable');
    },
    loading: function() {
        var tips = this.tips;
        tips.find('.text').text("数据加载中……");
        tips.attr("data-status", 'disable');
    },
    none: function() {
        var tips = this.tips;
        tips.find('.text').text("当前暂无记录");
        tips.attr("data-status", 'disable');
    },
    end: function() {
        var tips = this.tips;
        tips.find('.text').text("当前数据已经加载完成");
        tips.attr("data-status", 'disable');
    },
    rend: function(page) {
        var page = this.page;
        this.loading();
        if (!page) {
            this.none();
            return;
        }
        if (page && page.item_count == 0) {
            this.none();
            return;
        }
        if (page && page.current_page == page.page_count) {
            this.end();
            return;
        }
        if (page && page.current_page < page.page_count) {
            this.list();
            return;
        }
        this.loading();
    }
}

var SideNav = {
    top: null,
    right: null,
    bottom: null,
    left: null,
    toggle: function(type) {
        if ($("#app").hasClass("nav-" + type)) {
            this.close();
        } else {
            this.show(type);
        }
    },
    show: function(type) {
        this.close(type);
        $(".c-side-nav.nav-" + type).show();
        $("#app").addClass("nav-" + type);
    },
    close: function(type) {
        $("#app").removeClass("nav-top");
        $("#app").removeClass("nav-right");
        setTimeout(function() {
            $(".c-side-nav").hide(200);
            if (type) {
                $(".c-side-nav.nav-" + type).show();
            }
        }, 200);
    }
}

Message.toast = function(message) {
    var $toast = $(".c-toast");
    $(".c-toast .message-text").text(message);
    $toast.show(300);
    setTimeout(function() {
        $(".c-toast").hide(500);
    }, 2000);
}

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
