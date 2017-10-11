window.Event = new Vue({})


Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter your coupon code" @blur="onCouponApplied" @click.ctrl="hideHeader">
    `,
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        },
        hideHeader () {
            Event.$emit('hide')
        }
    }
})

Vue.component('moom-header', {
    template: `<h1 v-show="show"><slot></slot></h1>`,
    created () {
        Event.$on('applied', () => {
            this.show = true
        })
        Event.$on('hide', () => {
            this.show = false
        })
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