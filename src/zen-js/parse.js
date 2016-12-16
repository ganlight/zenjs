zen.parse = function(fn) {
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
}
