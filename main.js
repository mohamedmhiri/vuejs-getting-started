Vue.component('task', {
    template: `<input type="text" @keyUp="filter(txt)">
               <task-list></task-list>`
})
Vue.component('task-list', {
    template: `<ul>
                <li v-for="task in tasks" v-text="task.description"></li>
               </ul>`
})

let data = {
    tasks : [
        { desctiption: 'Wake Up', done: true },
        { desctiption: 'Coding', done: false },
        { desctiption: 'practising sport', done: false },
        { desctiption: 'Helping someone', done: false },
        { desctiption: 'Learning VueJs', done: true },
        { desctiption: 'Pushing code on github', done: true },
        { desctiption: 'Taking dinner', done: false },

    ],
    txt : ''
}
new Vue({
    el: '#root',
    data: data,
    methods: {
        filter() {
            return this.tasks.filter(data => {
                new RegExp(`.*${this.txt}.*`).test(data.desctiption)
            })
        }
    }
})