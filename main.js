Vue.component('main-page', {
    template: `
        <input type="text" @keyUp="filter()">
        <task-list></task-list>
    `
})
Vue.component('task-list', {
    template: `
            <ul>
                <task v-for="task in tasks" v-bind:key="task.id">{{ task.description }}</task>
            </ul>    
    `,
    data() {
        return {
            tasks: [
                { description: 'Wake Up', done: true },
                { description: 'Coding', done: false },
                { description: 'practising sport', done: false },
                { description: 'Helping someone', done: false },
                { description: 'Learning VueJs', done: true },
                { description: 'Pushing code on github', done: true },
                { description: 'Taking dinner', done: false },

            ]
        }
    }
})
Vue.component('task', {
    template: `<li><slot></slot></li>`
})

let data = {
    txt: ''
}
new Vue({
    el: '#root',
    data: data,
    methods: {
        filter() {
            console.log('ok')
            /*return this.tasks.filter(data => {
                new RegExp(`.*${this.txt}.*`).test(data.description)
            })*/
        }
    }
})