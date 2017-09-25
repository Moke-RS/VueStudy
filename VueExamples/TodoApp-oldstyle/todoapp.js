

let todoItem = Vue.component('todo-item', {
    props: ['todo','idx'],
    template: "<li v-bind:item='idx'><span class='todo-text'>{{ todo.text }}</span><a class='todo-remove' v-on:click='removeTodo(idx)'>X</a></li>"
});

let todoApp = new Vue({
    el: "#todo-app",
    components: { todoItem: todoItem },
    data: {
        todos: [],
        todoText: ''
    },
    methods: {
        insertTodo: function () { 
            if (this.todoText) {
                this.todos.push({ text: this.todoText });
                this.todoText = '';
            }
        },
        removeTodo: function (index) {
            if (index >= 0 && index < this.todos.length) {
                this.todos.splice(index, 1);
            }
        }
    }    
});