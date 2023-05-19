app.component('recipe-details', {
    props: {
        name: {
            type: String,
            default: 'Nombre de la Receta'
        },
        image: {
            type: String,
            default: './imgs/jumbo.webp'
        },
        highlight: {
            type: String,
            default: 'Receta Destacada'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sint possimus vel suscipit exercitationem earum consequuntur reiciendis dolorem? Molestias adipisci facilis quos iste perspiciatis aliquam itaque magnam qui saepe.'
        },
        likes: {
            type: String,
            default: '10'
        },
        category: {
            type: String,
            default: 'Desayuno'
        },
        occasion: {
            type: String,
            default: 'Día de la Madre'
        },
        level: {
            type: String,
            default: 'Media'
        },
        portions: {
            type: String,
            default: '6'
        },
        prep_time: {
            type: String,
            default: '20'
        },
        cook_time: {
            type: String,
            default: '20'
        },
        total_time: {
            type: String,
            default: '40'
        },
        ingredients: {
            type: Array,
            default: [
                { ingredient: '<li class="list-group-item"><i class="fa-solid fa-circle bullet me-3"></i>1 taza de azúcar</li>' },
                {ingredient: '2 tazas de harina'},                
            ]
        },
        instructions: {
            type: Array,
            default: [
                {instruction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.A at quas nobis tenetur iusto unde eius illo doloremque quaerat! In animi delectus laboriosam autem.Voluptatibus id placeat omnis molestias doloribus.'},
                {instruction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.A at quas nobis tenetur iusto unde eius illo doloremque quaerat! In animi delectus laboriosam autem.Voluptatibus id placeat omnis molestias doloribus.' },
            ]
        },        
    },
    template:
    /*html*/
    `<div class="container my-4">
            <div class="row d-flex">
                <div class="col-lg-6 d-flex mx-auto px-4 my-4">
                    <div class="align-self-center">
                        <h2 class="display-6 fw-bold mb-3">{{ name }}</h2>
                        <h4 class="fw-bold text-yellow fst-italic mb-3">{{ highlight }}</h4>
                        <p class="horizontal-line mt-4 mb-3"></p>
                        <p class="content-text">{{ description }}</p>
                        <div class="row d-flex py-3">
                            <div class="col-1"> <a class="text-dark text-decoration-none" href="#"><i
                                        class="icon-link fa-solid fa-bookmark"></i></a>
                            </div>
                            <div class="col-1"> <a class="text-dark text-decoration-none" href="#"><i
                                        class="icon-link fa-solid fa-share"></i></a>
                            </div>
                            <div class="col-3"><a class="text-dark text-decoration-none" href="#"><i
                                        class="icon-link fa-solid fa-thumbs-up me-3"></i>{{ likes }}</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 mx-auto flex-grow-1 px-4 my-4">
                    <img class="img-fluid" :src="image" alt="name">
                </div>

            </div>

        </div>





        <!--///////////////////////////Badges///////////////////////////////////-->
        <div class="container my-5">
            <div class="row gap-3 mx-0 mx-sm-2">
                <div class="col-sm-6 col-md-6 col-lg badge">
                    <a class="d-flex m-1 px-5 py-3 unlink" href="#">
                        <div class="py-2">
                            <div class="circle mx-auto d-flex justify-content-center">
                                <i class="fa-solid fa-calendar-check align-self-center icon-badge"></i>
                            </div>
                        </div>
                        <div class="ms-4 py-2 text-start mx-auto align-self-center">
                            <p class="mb-2 fw-light aux-text small">Categoría:</p>
                            <h5 class="fw-bold mb-0">{{ category }}</h5>
                        </div>
                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg badge">
                    <a class=" d-flex m-1 px-5 py-3 unlink" href="#">
                        <div class="py-2">
                            <div class="circle mx-auto d-flex justify-content-center">
                                <i class="fa-solid fa-calendar-check align-self-center icon-badge"></i>
                            </div>
                        </div>
                        <div class="ms-4 py-2 text-start mx-auto align-self-center">
                            <p class="mb-2 fw-light aux-text small">Ocasión:</p>
                            <h5 class="fw-bold mb-0">{{ occasion }}</h5>
                        </div>
                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg badge">
                    <a class=" d-flex m-1 px-5 py-3 unlink" href="#">
                        <div class="py-2">
                            <div class="circle mx-auto d-flex justify-content-center">
                                <i class="fa-solid fa-calendar-check align-self-center icon-badge"></i>
                            </div>
                        </div>
                        <div class="ms-4 py-2 text-start mx-auto align-self-center">
                            <p class="mb-2 fw-light aux-text small">Dificultad:</p>
                            <h5 class="fw-bold mb-0">{{ level }}</h5>
                        </div>
                    </a>
                </div>

            </div>
        </div>


        <!--///////////////////////////Detalles///////////////////////////////////-->

        <div class="container my-5">
            <div class="row blue-badge py-5 mx-3 mx-sm-0 ">
                <div class="col-0 col-sm text-center">
                    <p class="mb-2 fw-light aux-text small">Porciones:</p>
                    <h4 class="fw-bold mb-0">{{ portions }}</h4>
                </div>
                <p class="vertical-line"></p>
                <div class="col-0 col-sm text-center mt-5 mt-sm-0">
                    <p class="mb-2 fw-light aux-text small">Preparación:</p>
                    <h4 class="fw-bold mb-0">{{ prep_time }} min</h4>
                </div>
                <p class="vertical-line"></p>
                <div class="col-0 col-sm text-center mt-5 mt-sm-0">
                    <p class="mb-2 fw-light aux-text small">Cocción:</p>
                    <h4 class="fw-bold mb-0">{{ cook_time }} min</h4>
                </div>
                <p class="vertical-line"></p>
                <div class="col-0 col-sm text-center mt-5 mt-sm-0">
                    <p class="mb-2 fw-light aux-text small">Total:</p>
                    <h4 class="fw-bold mb-0">{{ total_time }} min</h4>
                </div>
            </div>
        </div>



        <!--///////////////////////////Ingredientes///////////////////////////////////-->

        <div class="container my-5">
            <h3 class="fw-bold mb-4">Ingredientes</h3>
            <div>

                <ul class="list-group list-group-flush content-text">
                    
                    <li class="list-group-item"><i class="fa-solid fa-circle bullet me-3"></i>I taza de ...</li>
                    
                </ul>

            </div>
        </div>


        <!--///////////////////////////Instrucciones de Preparación///////////////////////////////////-->

        <div class="container my-5 mb-5">
            <h3 class="fw-bold mb-4">Instrucciones de Preparación</h3>
            <div>
                <ul class="list-group list-group-flush content-text">
                    <li class="list-group-item"><i class="fa-solid fa-circle bullet me-3"></i>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. A at quas nobis
                        tenetur iusto unde eius illo
                        doloremque quaerat! In animi delectus laboriosam autem. Voluptatibus id placeat omnis molestias
                        doloribus.</li>
                    <li class="list-group-item"><i class="fa-solid fa-circle bullet me-3"></i>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. A at quas nobis
                        tenetur iusto unde eius illo
                        doloremque quaerat! In animi delectus laboriosam autem. Voluptatibus id placeat omnis molestias
                        doloribus.</li>
                </ul>

            </div>
        </div>`
})