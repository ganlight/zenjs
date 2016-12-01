$(function() {
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
            this.watch();
        },
        rend: function(item) {
            var self = this;
            var parent = $(".todo-list");
            var clone = $(".page-template .todo-item").clone();
            Store.data(clone, item);
            Template.values(clone, item);
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
                var data = Store.data($(this));
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
        }
    }

    var TodoEvent = function(target) {
        //这里负责元素的事件的绑定
        target.find(".destroy").click(function() {
            var data = Store.data(target);
            if (data) {
                target.remove();
                Todo.save();
            }
        });
        target.find(".toggle").click(function() {
            var data = Store.data(target);
            if (data) {
                if (data.completed) {
                    data.completed = false;
                } else {
                    data.completed = true;
                }
                target.toggleClass("completed");
                target.toggleClass("active");
                Store.data(target, data);
                Todo.save();
            }
        });
        target.find(".title").dblclick(function() {
            var data = Store.data(target);
            if (data) {
                target.addClass("editing");
                target.find(".edit").val(data.title);
                target.find(".edit").focus();
            }
        });
        target.find(".edit").blur(function() {
            var data = Store.data(target);
            if (data) {
                data.title = target.find(".edit").val();
                if (data.title && data.title.trim()) {
                    target.find(".title").text(data.title);
                    target.removeClass("editing");
                    Store.data(target, data);
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
                var type = $this.attr("filter");
                if (type) {
                    $(".todo-list .todo-item").hide();
                    $(".todo-list .todo-item." + type).show();
                } else {
                    $(".todo-list .todo-item").show();
                }
            });
            $(".clear-completed").click(function() {
                $(".todo-list .todo-item.completed").remove();
                Todo.save();
            });
            $(".toggle-all").click(function() {
                var status = $(".toggle-all").attr("checked");
                $(".todo-list .todo-item").each(function() {
                    var target = $(this);
                    var data = Store.data(target);
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
                        Store.data(target, data);
                    }
                });
                Todo.save();
            })
        }
    }
    Zen.ready(Service);
})
