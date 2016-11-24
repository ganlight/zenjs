$(function() {
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
