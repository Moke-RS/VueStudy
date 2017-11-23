Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        // In components, data is not a object like it was in the Vue instance
        // The reason to that is because the component is not attached directly to a Vue instance
        return {}
    }
});

Vue.component('task-list', {
    // Template must have a single root component. Thus, the div.
    template: `
    <div>
        <h1><slot></slot></h1>
        <task v-for="task in tasks">{{ task.description }}</task>
    </div>`,
    data() {
        // In components, data is not a object like it was in the Vue instance
        // The reason to that is because the component is not attached directly to a Vue instance
        return {
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Get my clothes back from washhouse', completed: false },
                { description: 'Go to pilates', completed: false },
                { description: 'Learn Vue', completed: true },
                { description: 'Schedule maintenance', completed: false }
            ]
        }
    }
});

new Vue({
    el: '#root'
})

