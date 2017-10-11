Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
})

new Vue({
    el: '#root',
    methods: {
        onCouponApplied() {
            this.couponApplied = true
        }
    },
    data () {
        return {
            couponApplied: false
        }        
    }
})