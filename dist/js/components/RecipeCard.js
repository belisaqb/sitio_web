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
            type: String,
            default: "6"
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
    `<div class="main-card text-start pb-4">
        <div class="img-card-recipe">
            <img :src="image" class="img-fluid card-img-top rounded-top" alt="name">
        </div>

        <div class="card-body d-flex">
            <h4 class="card-title p-3 fw-bold fst-italic">
                {{ name }}
            </h4>
        </div>
        <ul class="list-unstyled ps-4 mb-3">
            <li class="card-text mb-2">{{ total_time }} mins</li>
            <li class="card-text mb-2">{{ portions }} porciones.
            </li>
            <li class="card-text mb-2">{{ level }}</li>
        </ul>
        <a class="d-flex btn-dark justify-content-center mx-3" href="#" v-on:click="onClickRecipeDetails(index)" >
            <div class="fw-bold px-5">Ver más</div>
        </a>
    </div>`
})