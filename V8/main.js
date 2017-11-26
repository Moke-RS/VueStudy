
// Children => Father communication through events

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
            this.$emit('applied')
        }
    }
})

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true
        }
    }
})

