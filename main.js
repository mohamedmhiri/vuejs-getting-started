Vue.component('task-list', {
    template: `<ul>
                <li v-for="task in tasks" v-text="task.description"></li>
               </ul>`
})
let tasks: [
    { desctiption: 'Wake Up', done: true },
    { desctiption: 'Coding', done: false },
    { desctiption: 'practising sport', done: false },
    { desctiption: 'Helping someone', done: false },
    { desctiption: 'Learning VueJs', done: true },
    { desctiption: 'Pushing code on github', done: true },
    { desctiption: 'Taking dinner', done: false },

]
new Vue({
    el: '#root',
    data: tasks
})