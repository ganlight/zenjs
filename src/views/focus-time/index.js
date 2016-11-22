$(function() {
    var tomato = {
        work: 25,
        break: 5,
        times: 4
    }
    var Task = function() {
        this.name = "";
        this.create_time = new Date().getTime();
        this.begin_time = "";
        this.end_time = "";
        this.used_time = "";
        this.remain_time = "";
        this.status = "INIT";
        this.interval = null;
        $(".remain-time").text("25:00");
    }

    Task.prototype = {
        format: function(num) {
            var time = {
                min: "00",
                sec: "00",
                str: "00:00"
            }
            var seconds = num / 1000;
            time.min = parseInt(seconds / 60) > 9 ? parseInt(seconds / 60) : "0" + parseInt(seconds / 60)
            time.sec = parseInt(seconds % 60) > 9 ? parseInt(seconds % 60) : "0" + parseInt(seconds % 60);
            time.str = time.min + ":" + time.sec;
            return time;
        },
        start: function() {
            var self = this;
            this.begin_time = new Date().getTime();
            this.status = "BEGIN";
            this.interval = setInterval(function() {
                self.refresh();
            }, 1000);
        },
        stop: function() {
            this.end_time = new Date().getTime();
            this.used_time = this.end_time - this.begin_time;
            if (this.format(this.used_time).min >= 30) {
                this.status = "FINISH";
            } else {
                this.status = "STOP";
                clearInterval(self.interval);
            }
        },
        refresh: function() {
            var self = this;
            if (self.status == "BEGIN") {
                var current_time = new Date().getTime();
                self.used_time = current_time - self.begin_time;
                var remain_time = tomato.work * 60000 - self.used_time;
                if (self.format(self.used_time).min >= 30) {
                    self.status = "FINISH";
                    $(".remain-time").text("25:00");
                    clearInterval(self.interval);
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

        }
    }

    var Service = {
        task:null,
        init: function() {
            this.task = new Task();
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
        }
    }
    Zen.ready(Service);
})
