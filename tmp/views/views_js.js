Zen.views["blog/config.js"] = function() {/*<script>var ZEN_ARTICLES = [{
    title: "Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 1",
    section: "begin",
    file: "zenjs/install"
}, {
    title: "关于 ZENJS",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 2",
    section: "begin",
    file: "zenjs/about-zenjs"
}, {
    title: "如何用zenjs写一个博客系统",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs 3",
    section: "begin",
    file: "zenjs/如何用zenjs写一个博客系统"
}];


var CATALOG_TMP = {
    "type": "catalog",
    "name": "zenjs 框架",
    "data": [{}]
}

var ARTICLE_TMP = {
    "type": "article",
    "name": "zenjs 框架",
    "path": "zen/zenjs 框架.md",
    "public": "2016-11-25 14:00",
    "auther": "ganlight",
    "tag": "zenjs javascript",
}

var ZENJS_BLOG = {
    "zenjs": {
        "type": "catalog",
        "name": "zenjs 框架",
        "data": [{
            "type": "article",
            "title": "Zenjs的安装使用",
            "public": "2016-11-25 14:00",
            "auther": "ganlight",
            "file": "install"
        }]
    }
}
</script>*/}
Zen.views["focus-time/index.js"] = function() {/*<script>$(function() {
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
                zen.store.setLocal("FOCUS_TIME_CURRENT", task);
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
                zen.message.alert(tomato.message.success);
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
            zen.store.setLocal("FOCUS_TIME_CURRENT", task);
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
            var task = zen.store.getLocal("FOCUS_TIME_CURRENT");
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
    zen.page.ready(Service);
})
</script>*/}
Zen.views["todo/index.js"] = function() {/*<script>$(function() {
    var TodoData = {
        key: "ZENJS_TODO",
        get: function() {
            var todos = zen.store.getLocal(this.key) || [];
            $.each(todos, function(todo, index) {
                todo.id = index
            })
            this.uid = todos.length;
            return todos;
        },
        save: function(todos) {
            zen.store.setLocal(this.key, todos);
        }
    }

    var Todo = {
        todos: [],
        init: function() {
            this.todos = TodoData.get();
            for (i in this.todos) {
                this.rend(this.todos[i]);
            }
            this.watch();
        },
        rend: function(item) {
            var self = this;
            var parent = $(".todo-list");
            var clone = $(".page-template .todo-item").clone();
            zen.store.data(clone, item);
            zen.template.values(clone, item);
            if (item.completed) {
                clone.addClass("completed");
                clone.find(".toggle").prop("checked", true);
            } else {
                clone.addClass("active");
                clone.find(".toggle").prop("checked", false);
            }
            TodoEvent(clone);
            parent.append(clone);
        },
        save: function() {
            var todos = this.todos = [];
            $(".todo-list .todo-item").each(function() {
                var data = zen.store.data($(this));
                if (data) {
                    todos.push(data);
                }
            })
            TodoData.save(this.todos);
            this.watch();
        },
        add: function() {
            var newTodo = $(".new-todo").val();
            var value = newTodo && newTodo.trim()
            if (!value) {
                return;
            }
            var _new = {
                id: TodoData.uid++,
                title: value,
                completed: false
            };
            this.rend(_new);
            $(".new-todo").val("");
            this.save();
        },
        watch: function() {
            var active_num = $(".todo-list .todo-item.active").length;
            var completed_num = $(".todo-list .todo-item.completed").length;
            $(".remaining").text(active_num);
            if (completed_num > 0) {
                $(".clear-completed").show();
            } else {
                $(".clear-completed").hide();
            }
            var filter = $(".filters a.selected");
            var type = filter.attr("filter");
            if (type) {
                $(".todo-list .todo-item").hide();
                $(".todo-list .todo-item." + type).show();
            } else {
                $(".todo-list .todo-item").show();
            }
        }
    }

    var TodoEvent = function(target) {
        //这里负责元素的事件的绑定
        target.find(".destroy").click(function() {
            var data = zen.store.data(target);
            if (data) {
                target.remove();
                Todo.save();
            }
        });
        target.find(".toggle").click(function() {
            var data = zen.store.data(target);
            if (data) {
                if (data.completed) {
                    data.completed = false;
                } else {
                    data.completed = true;
                }
                target.toggleClass("completed");
                target.toggleClass("active");
                zen.store.data(target, data);
                Todo.save();
            }
        });
        target.find(".title").dblclick(function() {
            var data = zen.store.data(target);
            if (data) {
                target.addClass("editing");
                target.find(".edit").val(data.title);
                target.find(".edit").focus();
            }
        });
        target.find(".edit").blur(function() {
            var data = zen.store.data(target);
            if (data) {
                data.title = target.find(".edit").val();
                if (data.title && data.title.trim()) {
                    target.find(".title").text(data.title);
                    target.removeClass("editing");
                    zen.store.data(target, data);
                } else {
                    target.remove();
                }
                Todo.save();
            }
        });
    }

    var Service = {
        init: function() {
            Todo.init();
            this.bind();
        },
        bind: function() {
            //这里负责全局的绑定
            $(".new-todo").keyup(function(event) {
                //监听回车事件,添加一条todo
                if (event.keyCode == 13) {
                    Todo.add();
                }
            });
            $(".filters a").click(function() {
                //对todo进行筛选
                var $this = $(this);
                $(".filters a").removeClass("selected");
                $this.addClass("selected");
                Todo.watch();
            });
            $(".clear-completed").click(function() {
                $(".todo-list .todo-item.completed").remove();
                Todo.save();
            });
            $(".toggle-all").click(function() {
                var status = $(".toggle-all").attr("checked");
                $(".todo-list .todo-item").each(function() {
                    var target = $(this);
                    var data = zen.store.data(target);
                    if (data) {
                        if (!status) {
                            data.completed = false;
                            target.removeClass("completed");
                            target.addClass("active");
                        } else {
                            data.completed = true;
                            target.addClass("completed");
                            target.removeClass("active");
                        }
                        target.find(".toggle").prop("checked", data.completed);
                        zen.store.data(target, data);
                    }
                });
                Todo.save();
            })
        }
    }
    zen.page.ready(Service);
})
</script>*/}
Zen.views["example/multi-select/index.js"] = function() {/*<script>$(function() {
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
    zen.page.ready(Service);
})
</script>*/}
Zen.views["example/single-page/toggle.js"] = function() {/*<script>$(function() {
    var config_type = {
        ele: "m-type",
        addAction: function(item) {
            zen.message.toast("选择"+item.name);
        },
        delAction: function(item) {
            zen.message.toast("取消"+item.name);
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
            zen.message.toast("选择"+item.name);
        },
        delAction: function(item) {
            zen.message.toast("取消"+item.name);
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
    zen.page.ready(Service);
})
</script>*/}
Zen.views["blog/article/index.js"] = function() {/*<script>$(function() {
    var MarkDown = {
        converter: null,
        init: function() {
            if (showdown && showdown.Converter) {
                this.converter = new showdown.Converter();
            } else {
                $(".title").html("暂不支持markdown");
            }
        },
        rend: function(article, data) {
            if (this.converter && data) {
                var html = this.converter.makeHtml(data);
                $(".title").html(article.title);
                $(".markdown-area").html(html).show();
            }
        },
        load: function(article) {
            var self = this;
            var url = "Zen.views" + '["blog/markdown/' + article.file + '.md"]';
            var data = zen.parse(eval(url));
            if (data) {
                data = data.replace(/__block_head__/g, '__block_head__').replace(/__block_foot__/g, "*\/");
                self.rend(article, data);
            }
        },
        load_file: function(article) {
            var self = this;
            var url = "blog/" + article.type + "/" + article.file + ".md";
            $.ajax({
                url: url,
                type: 'get',
                async: false,
                dataType: 'html',
                success: function(data) {
                    $(".catalog-area").hide();
                    $(".markdown-area").show();
                    self.rend(article, data);
                },
                error: function(e) {
                    $(".markdown-area").hide();
                    $(".catalog-area").show();
                    zen.message.toast("当前文章" + article.file + "不存在，请返回其他文章");
                }
            });
        }
    }
    var Service = {
        id: 0,
        init: function() {
            MarkDown.init();
            var id = this.id = parseInt(zen.url.getPar("id")) || 0;
            if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                MarkDown.load(ZEN_ARTICLES[id]);
            } else {
                window.location.href = "#blog/article?id=0";
            }
            this.bind();
        },
        bind: function() {
            $(".zen-page .pre-btn").click(function() {
                if (Service.id > 0) {
                    var id = Service.id - 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    zen.message.toast("没有上一篇了.");
                }
            })
            $(".zen-page .next-btn").click(function() {
                if (Service.id < ZEN_ARTICLES.length - 1) {
                    var id = Service.id + 1;
                    if (ZEN_ARTICLES && ZEN_ARTICLES[id]) {
                        window.location.href = "#blog/article?id=" + id;
                    }
                } else {
                    zen.message.toast("没有下一篇了.");
                }
            })
        }
    }
    zen.page.ready(Service);
})
</script>*/}