import Vue from 'vue';
import * as todoItem from './todo-item.vue';

let todoApp = new Vue({
    el: "#todo-app",
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
    },
    components: { todoItem }
});