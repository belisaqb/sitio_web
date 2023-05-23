app.component('nav-bar',{
    props: {
        
    },
    methods: {
        onClickHome(){
             this.$emit('go-home');
        }  
    },
    template:
    /*html*/
    `<nav class="navbar navbar-expand-lg blue-container py-2">
        <div class="container gap-0 gap-sm-3">
            <a class="navbar-brand" href="index.html"> <img class="img-fluid w-25" src="./imgs/white-logo.webp"
                    alt="Logo">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="text-light fa-solid fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll gap-2">
                    <li class="nav-item d-flex me-2 mt-3 mt-sm-0">
                        <a class="nav-link align-self-center fw-bold text-light" href="#" v-on:click="onClickHome" >Inicio</a>
                    </li>
                    <li class="nav-item d-flex me-2">
                        <a class="nav-link align-self-center fw-bold  text-light" v-on:click="onClickHome" href="#highlighted">Destacadas</a>
                    </li>
                    <li class="nav-item d-flex me-5">
                        <a class="nav-link align-self-center fw-bold text-light" v-on:click="onClickHome" href="#recipes">Recetas</a>
                    </li>
                    <li class="nav-item d-flex me-5">
                        <form class="d-flex col-sm">
                            <input class="form-control me-2" type="search" placeholder="Search"
                                aria-label="Search">
                            <button class="btn-light" type="submit"><i
                                    class="align-self-center fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </li>
                    <li class="nav-item me-2 mt-3 mt-sm-0">
                        <a class="btn-secondary-light nav-link fw-bold " href="register.html">Registrarse</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="btn-light nav-link me-2 fw-bold " href="login.html">Iniciar Sesión</a>
                    </li>

                </ul>
            </div>

        </div>
    </nav>`
})