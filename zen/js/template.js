zen.template = {
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
