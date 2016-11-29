$(function() {
    var tomato = {
        work: 25,
        rest: 5,
        times: 4,
        message: {
            init: "开始一个番茄钟",
            success: "哇，你很棒哦，又完成了一项工作！",
            stop: "要不再坚持一会?"
        }
    }
    var TimeUtil = {
        loop: null,
        tick: function(task, on) {
            var self = this;
            if (on && !this.loop) {
                this.loop = setInterval(function() {
                    self.refresh(task);
                }, 100);
            } else {
                clearInterval(this.loop);
                this.loop = null;
                Store.setLocal("FOCUS_TIME_CURRENT", task);
            }
        },
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
        refresh: function(task) {
            var remain_time = 0,
                work_time = tomato.work * 60000,
                rest_time = tomato.rest * 60000;
            if (task.status == "WORK_INIT") {
                remain_time = work_time;
                $(".start-btn").removeClass("hide");
            }
            if (task.status == "WORK_START") {
                var current_time = new Date().getTime();
                remain_time = work_time - (current_time - task.work_start);
                $(".stop-btn").removeClass("hide");
                if (remain_time < 0) {
                    task.status = "WORK_DONE"
                    TimeUtil.tick(task, false);
                    $(".rest-btn").removeClass("hide");
                }
            }
            if (task.status == "WORK_DONE") {
                Message.alert(tomato.message.success);
                task.status = "REST_INIT";
                remain_time = rest_time;
            }
            if (task.status == "WORK_STOP") {
                remain_time = work_time - (task.work_stop - task.work_start);
                TimeUtil.tick(task, false);
            }
            if (task.status == "REST_INIT") {
                remain_time = rest_time;
            }
            if (task.status == "REST_START") {
                var current_time = new Date().getTime();
                remain_time = rest_time - (current_time - task.rest_start);
                if (remain_time < 0) {
                    task.status = "REST_DONE"
                    TimeUtil.tick(task, false);
                }
            }
            if (task.status == "REST_DONE") {
                task.status = "WORK_INIT";
                remain_time = work_time;
            }
            Store.setLocal("FOCUS_TIME_CURRENT", task);
            var str = this.format(remain_time).str;
            $(".remain-time").text(str);
        }
    }
    var Task = function(task) {
        var self = this;
        this.data = {};
        this.interval = null;
        if (task) {
            this.data = task;
            if (task.status == "WORK_START" || task.status == "REST_START") {
                TimeUtil.tick(task, true);
            }
        } else {
            task = this.data;
            task.name = "";
            task.work_init = new Date().getTime();
            task.work_start = "";
            task.work_done = "";
            task.work_stop = "";
            task.rest_init = "";
            task.rest_start = "";
            task.rest_done = "";
            task.rest_stop = "";
            task.status = "WORK_INIT";
        }
        TimeUtil.refresh(task);
        return this;
    }

    Task.prototype = {
        start: function() {
            var self = this;
            var task = self.data;
            task.work_start = new Date().getTime();
            task.status = "WORK_START";
            TimeUtil.tick(task, true);
        },
        rest: function() {
            var self = this;
            var task = self.data;
            task.rest_start = new Date().getTime();
            task.status = "REST_START";
            TimeUtil.tick(task, true);
        },
        stop: function() {
            var self = this;
            var task = self.data;
            task.work_stop = new Date().getTime();
            task.status = "WORK_STOP";
            TimeUtil.tick(task, false);
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
