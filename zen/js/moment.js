zen.monment = {
    init: function() {
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
    }
}
zen.monment.init();
