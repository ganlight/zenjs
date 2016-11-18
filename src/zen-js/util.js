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
