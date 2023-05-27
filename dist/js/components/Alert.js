app.component('alert-popup', {
    props: {
        message: {
            type: String,
            default: "Hello!"
        }
    },
    methods: {
        onClickCloseAlert() {
            this.$emit('close-alert');
        }
    },
    template:
    /*html*/
    `<div class="alert alert-info alert-dismissible fade show" role="alert">
        {{message}}
        <button v-on:click="onClickCloseAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
})