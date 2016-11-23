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
