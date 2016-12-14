//SimpleClick 参照weui中的的fastclick函数
var SimpleClick = {
    support: false,
    init: function() {
        this.support = this.check();
        this.bind();
    },
    check: function() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    },
    bind: function() {
        var onEvent = $.fn.on;
        var support = this.support;
        $.fn.on = function() {
            if (/click/.test(arguments[0]) && typeof arguments[1] == 'function' && support) { // 只扩展支持touch的当前元素的click事件
                var touchStartY, callback = arguments[1];
                onEvent.apply(this, ['touchstart', function(e) {
                    touchStartY = e.changedTouches[0].clientY;
                }]);
                onEvent.apply(this, ['touchend', function(e) {
                    if (Math.abs(e.changedTouches[0].clientY - touchStartY) > 10) return;
                    e.preventDefault();
                    callback.apply(this, [e]);
                }]);
            } else {
                onEvent.apply(this, arguments);
            }
            return this;
        };
    }
}
