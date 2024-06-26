app.component('recipe-card', {
    props: {
        index: {
            type: Number,
        },
        image: {
            type: String,
            default: "./imgs/card.webp"
        },
        name: {
            type: String,
            default: "Pancakes"
        },
        total_time: {
            type: Number,
            default: 20
        },
        portions: {
            type: Number,
            default: 6
        },
        level: {
            type: String,
            default: "Media"
        }
    },
    methods: {
        onClickRecipeDetails() {
            // console.log("View");
            // console.log("ID: " + this.index);
            this.$emit('recipe-details', this.index);
        }
    },
    template:
    /*html*/
    `<div class="main-card text-start pb-4 hvr-sweep-to-top">
        <div class="img-card-recipe overflow-hidden">
            <img :src="image" class="img-fluid card-img-top rounded-top" alt="name">
        </div>

        <div class="card-body d-flex">
            <h5 class="card-title title-card p-3 fw-bold fst-italic">
                {{ name }}
            </h5>
        </div>
        <ul class="list-unstyled ps-4 mb-3">
            <li class="card-text mb-2">{{ total_time }} mins</li>
            <li class="card-text mb-2">{{ portions }} servings.
            </li>
            <li class="card-text mb-2">{{ level }}</li>
        </ul>
        <a class="hvr-fade d-flex btn-dark justify-content-center mx-3" href="#" v-on:click="onClickRecipeDetails()" >
            <div class="fw-bold px-5">Details</div>
        </a>
    </div>`
})