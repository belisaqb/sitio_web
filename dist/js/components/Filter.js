app.component('filter-item', {
    props: {
        id: {
            type: Number,
            default: 1
        },
        label: {
            type: String,
            default: "Label"
        },
        name: {
            type: String,
            default: "Filter"
        }
    },
    methods: {
        onClickSearchFilter() {
            this.$emit('search-filter', this.id, this.label);
        }
    },
    template:
        /*html*/
        `<a class="list-link text-link" href="#recipes" v-on:click="onClickSearchFilter">{{ name }}</a>`
})