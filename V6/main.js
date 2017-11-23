

Vue.component('modal', {
    // Template must have a single root component. Thus, the div.
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
            <!-- Any other Bulma elements you want -->
                <div class="box">
                    <p>    
                        <slot></slot>
                    </p>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
})

