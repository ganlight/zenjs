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
        },
        rend: function(item) {
            var self = this;
            var parent = $(".todo-list");
            var clone = $(".page-template .todo-item").clone();
            Store.data(clone, item);
            Template.values(clone, item);
            if (item.completed) {
                clone.addClass("completed");
                clone.find(".toggle").attr("checked", true);
            } else {
                clone.addClass("active");
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
        remove: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            TodoData.save(this.todos);
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
            var data = Store.data(clone);
            if (data) {
                data.title = clone.find(".edit").val();
                if (data.title && data.title.trim()) {
                    clone.find(".title").text(data.title);
                    clone.removeClass("editing");
                    Store.data(clone, data);
                } else {
                    clone.remove();
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
