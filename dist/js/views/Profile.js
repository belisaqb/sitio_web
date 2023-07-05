app.component('profile', {
    props: {
        name: {
            type: String,
            default: "Nombre"
        },
        last_name: {
            type: String,
            default: "nombre de usuario"
        },
        country: {
            type: String,
            default: "nombre de usuario"
        },
        email: {
            type: String,
            default: "email"
        }
    },
    template:
    /*html*/
    `<div class="container d-flex justify-content-center my-5 py-5">
        <div class="row profile-badge p-4 mx-2 mx-sm-0">
            <div class="col-md-4 mx-auto ">
                <div class="circle-profile d-flex mx-auto"><i
                        class="fa-regular fa-user align-self-center mx-auto display-1"></i></div>
            </div>
            <div class="col-md-8 align-self-center mt-5 mt-sm-0">
                <h2 class="fw-bold display-6 ">{{ name }} {{last_name}}</h2>
                <p class="horizontal-line my-3"></p>
                <h5 class="fw-bold lead fst-italic">{{ country }}</h5>
                <p class="">{{ email }}</p>
            </div>
        </div>
    </div>`
})