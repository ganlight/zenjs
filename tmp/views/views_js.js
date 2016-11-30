views.blog__config_js = function() {/*<script>var articles = [{
    title: "Zenjs的安装使用",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs",
    section: "begin",
    file: "install"
},{
    title: "关于 ZENJS",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs",
    section: "begin",
    file: "about-zenjs"
}, {
    title: "如何用zenjs写一个博客系统",
    public: "2016-11-25 14:00",
    auther: "ganlight",
    type: "zenjs",
    section: "begin",
    file: "如何用zenjs写一个博客系统"
}];

var Catalog = {
    articles: [],
    types: null,
    sections: null,
    map: {},
    init: function() {
        if (articles) {
            this.articles = articles;
            this.rend();
        }
    },
    rend: function() {
        var self = this;
        if (this.articles && this.articles.length > 0) {
            var len = this.articles.length;
            var data = this.articles;
            var parent = $(".catalog-area");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                item.id = i;
                var clone = $(".page-template .list-item").clone();
                Store.data(clone, item);
                self.map[item.type + "/" + item.file] = item;
                Util.rendValue(clone, item);
                self.bind(clone);
                parent.append(clone);
            }
        }
    },
    get: function(type, file) {
        var item = this.map[type + "/" + file] || "";
        return item;
    },
    getIndex: function(type, file) {
        var item = this.map[type + "/" + file] || "";
        return item;
    },
    bind: function(clone) {
        var self = this;
        clone.click(function() {
            var data = Store.data(clone);
            if (data && data.id > -1) {
                window.location.href = "#blog/article" + "?id=" + data.id;
            }
        })
    }
}

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
        var url = "views" + '["blog/markdown/' + article.type + "/" + article.file + '.md"]';
        var data = Zen.parse(eval(url));
        if (data) {
            data = data.replace(/__block_head__/g, '/*')
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
                Message.toast("当前文章" + article.file + "不存在，请返回其他文章");
            }
        });
    }
}
</script>*/}
views.focus_time__index_js = function() {/*<script>$(function() {
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
</script>*/}
views.todo__index_js = function() {/*<script>$(function() {
    var TodoData = {
        key: "ZENJS_TODO",
        get: function() {
            var todos = Store.getLocal(this.key) || [];
            $.each(todos, function(todo, index) {
                todo.id = index
            })
            this.uid = todos.length;
            return todos;
        },
        save: function(todos) {
            Store.setLocal(this.key, todos);
        }
    }

    var Todo = {
        todos: [],
        init: function() {
            this.todos = TodoData.get();
            for (i in this.todos) {
                this.rend(this.todos[i]);
            }
        },
        rend: function(item) {
            var self = this;
            var parent = $(".todo-list");
            var clone = $(".page-template .todo-item").clone();
            Store.data(clone, item);
            Template.values(clone, item);
            if (item.completed) {
                clone.addClass("completed");
            } else {
                clone.addClass("active");
            }
            self.bind(clone);
            parent.append(clone);
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
            this.todos.push(_new);
            this.rend(_new);
            $(".new-todo").val("");
            TodoData.save(this.todos);
        },
        remove: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            TodoData.save(this.todos);
        },
        edit: function(todo) {
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },
        editDone: function(todo) {
            if (!this.editedTodo) {
                return
            }
            this.editedTodo = null
            todo.title = todo.title.trim()
            if (!todo.title) {
                this.removeTodo(todo)
            }
        },
        editCancel: function(todo) {
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },
        todoRemove: function() {
            this.todos = filters.active(this.todos)
        },
        bind: function(clone) {
            //这里负责元素的事件的绑定
            clone.find(".destroy").click(function() {
                var data = Store.data(clone);
                if (data) {
                    Todo.remove(data);
                    clone.remove();
                }
            });
        }
    }

    var Service = {
        init: function() {
            Todo.init();
            this.bind();
        },
        bind: function() {
            //这里负责全局的绑定
            $(".new-todo").keyup(function() {
                if (event.keyCode == 13) {
                    //监听回车事件
                    Todo.add();
                }
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