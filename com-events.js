window.Event = new Vue({})


Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }
})

Vue.component('moom-header', {
    template: `<h1 v-show="show"><slot></slot></h1>`,
    methods: {
        onCouponApplied () {
            Event.$on('applied', () => {
                this.show = true
            })
        }
    },
    data () {
        return {
            show: false
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