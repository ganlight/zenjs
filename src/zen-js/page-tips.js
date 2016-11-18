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
