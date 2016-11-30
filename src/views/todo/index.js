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
