views.focus_time__index_js = function() {/*<script>$(function() {
    var tomato = {
        work: 25,
        rest: 5,
        times: 4
    }
    var Task = function(task) {
        var self = this;
        this.data = {};
        if (task) {
            this.data = task;
            if (task.status == "BEGIN") {
                this.data.interval = setInterval(function() {
                    self.refresh();
                }, 1000);
            }
            var current_time = new Date().getTime();
            task.used_time = current_time - task.begin_time;
            var remain_time = tomato.work * 60000 - task.used_time;
            var str = self.format(remain_time).str;
            $(".remain-time").text(str);

        } else {
            this.data.name = "";
            this.data.create_time = new Date().getTime();
            this.data.begin_time = "";
            this.data.end_time = "";
            this.data.used_time = "";
            this.data.remain_time = "";
            this.data.status = "INIT";
            this.data.interval = null;
            $(".remain-time").text("25:00");
        }
        return this;
    }

    Task.prototype = {
        format: function(num) {
            var time = {
                min: "00",
                sec: "00",
                str: "00:00"
            }
            if (num >= 0) {
                var seconds = num / 1000;
                time.min = parseInt(seconds / 60) > 9 ? parseInt(seconds / 60) : "0" + parseInt(seconds / 60)
                time.sec = parseInt(seconds % 60) > 9 ? parseInt(seconds % 60) : "0" + parseInt(seconds % 60);
                time.str = time.min + ":" + time.sec;
            }
            return time;
        },
        start: function() {
            var self = this;
            var props = self.data;
            props.begin_time = new Date().getTime();
            props.status = "BEGIN";
            props.interval = setInterval(function() {
                self.refresh();
            }, 1000);
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        rest: function() {
            var self = this;
            var props = self.data;
            props.begin_time = new Date().getTime();
            props.status = "REST";
            if (!props.interval) {
                props.interval = setInterval(function() {
                    self.refresh();
                }, 1000);
            }
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        stop: function() {
            var self = this;
            var props = self.data;
            props.end_time = new Date().getTime();
            props.used_time = props.end_time - props.begin_time;
            if (self.format(props.used_time).min >= tomato.work) {
                props.status = "FINISH";
            } else {
                props.status = "STOP";
                clearInterval(props.interval);
            }
            Store.setLocal("FOCUS_TIME_CURRENT", this.data);
        },
        refresh: function() {
            var self = this;
            var props = self.data;
            if (props.status == "BEGIN") {
                var current_time = new Date().getTime();
                props.used_time = current_time - props.begin_time;
                var remain_time = tomato.work * 60000 - props.used_time;
                if (self.format(self.used_time).min >= tomato.work) {
                    props.status = "FINISH";
                    $(".remain-time").text("25:00");
                    clearInterval(props.interval);
                    Store.setLocal("FOCUS_TIME_CURRENT", "");
                    Message.alert("哇，你很棒哦，又完成了一项工作！");
                } else {
                    var str = self.format(remain_time).str;
                    $(".remain-time").text(str);
                }
            }
            if (props.status == "REST") {
                var current_time = new Date().getTime();
                props.used_time = current_time - props.begin_time;
                var remain_time = tomato.rest * 60000 - props.used_time;
                if (self.format(props.used_time).min >= tomato.rest) {
                    props.status = "INIT";
                    $(".remain-time").text("25:00");
                    clearInterval(props.interval);
                    Message.alert("休息完成，继续开始工作吧！");
                } else {
                    var str = self.format(remain_time).str;
                    $(".remain-time").text(str);
                }
            }

        }
    }

    var TaskList = {
        current: null,
        init: function() {
            var task = Store.getLocal("FOCUS_TIME_CURRENT");
            if (task) {
                this.current = new Task(task);
            } else {
                this.current = new Task();
            }
        }
    }

    var Service = {
        task: null,
        init: function() {
            console.log("focus-time");
            TaskList.init();
            this.task = TaskList.current;
            this.bind();
        },
        bind: function() {
            var self = this;
            $(".start-btn").click(function() {
                self.task.start();
            });
            $(".stop-btn").click(function() {
                self.task.stop();
            });
            $(".rest-btn").click(function() {
                self.task.rest();
            });
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.example__multi_select__index_js = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        data: [{
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }, {
            name: "例子1",
            value: "33"
        }, {
            name: "例子2",
            value: "34"
        }, {
            name: "例子3",
            value: "35"
        }]
    }
    var config_status = {
        ele: "m-status",
        data: [{
            name: "状态1",
            value: "33"
        }, {
            name: "状态2",
            value: "34"
        }, {
            name: "状态3",
            value: "35"
        }]
    }

    var Service = {
        multi_type:null,
        multi_status:null,
        init: function() {
            this.multi_type = new MultiSelect(config_type);
            this.multi_status = new MultiSelect(config_status);
        }
    }
    Zen.ready(Service);
})
</script>*/}
views.example__single_page__toggle_js = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        addAction: function(item) {
            Message.toast("选择"+item.name);
        },
        delAction: function(item) {
            Message.toast("取消"+item.name);
        },
        data: [{
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: false
        }, {
            name: "例子3",
            value: "35",
            selected: false
        }, {
            name: "例子1",
            value: "33",
            selected: true
        }, {
            name: "例子2",
            value: "34",
            selected: true
        }, {
            name: "例子3",
            value: "35",
            selected: true
        }]
    }
    var config_status = {
        ele: "m-status",
        addAction: function(item) {
            Message.toast("选择"+item.name);
        },
        delAction: function(item) {
            Message.toast("取消"+item.name);
        },
        data: [{
            name: "状态1",
            value: "33",
            selected: true
        }, {
            name: "状态2",
            value: "34",
            selected: false
        }, {
            name: "状态3",
            value: "35",
            selected: true
        }]
    }

    var Service = {
        toggle_type:null,
        toggle_status:null,
        init: function() {
          this.toggle_type = new ToggleGroup(config_type);
          this.toggle_status = new ToggleGroup(config_status);
        }
    }
    Zen.ready(Service);
})
</script>*/}