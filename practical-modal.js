Vue.component('moom-modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    Peace be upon you
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close')"aria-label="close"></button>
        </div>
    `
})

Vue.component('moom-button', {
    template: `
        <a class="button is-dark">Dark</a>
    `
})

new Vue({
    el: '#root',
    data : {
        showModal: false
    }
})