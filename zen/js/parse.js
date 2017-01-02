zen.parse_decode = function(str) {
    str.replace(/__block_head__/g, '/*').replace(/__block_foot__/g, "*\/");
    return str;
}

zen.parse = function(fn) {
    //这里面主要将html和js代码转化成js函数，通过这样的方式，可以获取里面的内容
    //如果是多行文本采用下面的方式
    // return fn.toString().split('\n').slice(1, -1).join('\n') + '\n';
    function decode(str) {
        str.replace(/__block_head__/g, '/*').replace(/__block_foot__/g, "*\/");
        return str;
    }
    if (typeof fn === 'function') {
        var string = fn.toString();
        if (string.length > 20) {
            return string.slice(15, -3);
        }
    }
    return "";
}

zen.content = function(path) {
    var content = "";
    if (path.indexOf("views/") > -1) {
        //views内部的文件从common.js获取,路径是去掉views的
        path = path.replace("views/", "");
    }
    var script_name = 'Zen.views["' + path + '"]';
    content = zen.parse(eval(script_name));
    return content.replace(/__block_head__/g, '/*').replace(/__block_foot__/g, "*\/");
}
