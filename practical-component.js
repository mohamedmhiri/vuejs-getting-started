Vue.component('moom-message', {
    data () {
        return {
            isVisible: true
        }
    },
    props: ['title', 'body'],
    template: `
        <article class="message is-dark" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete" @click="hideMessage"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideMessage() {
            this.isVisible = false
        }
    }
})

new Vue({
    el: '#root'
})