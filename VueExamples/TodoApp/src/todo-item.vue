<template lang="pug">
  li(v-bind:item="idx")
    span.todo-text {{ todo.text }}
    a.todo-remove(v-on:click="removeTodo(idx)") X
</template>

<script>
    export default {
        props: ['todo','idx']
    }
</script>

<style scoped>
    .todo-text {
        min-width: 100px;
        display: inline-block;
    }

    .todo-remove:hover {
        cursor: pointer;
    }
</style>

