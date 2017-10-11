Vue.component('tabs', {
    template: `
<div>
<div class="tabs is-boxed">
  <ul>
    <li v-for="tab in tabs" v-bind:class="{'is-active': tab.isActive}">
        <a v-bind:href="tab.href" @click="selectTab(tab)">
            {{tab.name}}
        </a>
    </li>
  </ul>
</div>
<div class="tabs-details">
    <slot></slot>
</div>
</div>
    `,
    data () {
        return {
            tabs: []
        }
    },
    mounted () {
        //console.log(this.$children)
    },
    created () {
        this.tabs = this.$children
    },
    methods: {
        selectTab(data) {
            this.tabs.forEach((tab) => {
                tab.isActive = (data.name === tab.name) 
            })
        }
    }
})
Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    // In general we consider the props that the component accept to be mutable
    props: {
        name: {
            required: true
        },
        selected: {
            default: false
        },
        content: {
            default: ''
        }
    },
    data () {
        return {
            isActive: false
        }        
    },
    mounted () {
        this.isActive = this.selected
    },
    computed: {
        href () {
            return `#${this.name.toLowerCase().replace(/ /g, '-')}`
        }
    }
})

new Vue({
    el: "#root"
})
