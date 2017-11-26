
// Communication using a neutral Vue instance
// Helps with communication between siblings (instead of bubbling up the event until it hits the root
// and then passing down again to the other component)

window.Event = new Vue()

Vue.component('coupon', {
    template: `
        <input type='text' placeholder='Enter your coupon code' @blur='onCouponApplied'/>
    `,
    data() {
       return { }
    },
    created() {
    
    },
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }
})

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    mounted() {
        Event.$on('applied', () => this.couponApplied = true)
    }
})

