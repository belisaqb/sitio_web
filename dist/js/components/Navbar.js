app.component('nav-bar',{
    props: {
        guest: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClickHome(){
            this.$emit('go-home');
        },
        onClickLogin() {
            this.$emit('go-login');
        },
        onClickRegister() {
            this.$emit('go-register');
        },
        onClickProfile() {
            this.$emit('go-profile');
        },
        onClickLogOut() {
            this.$emit('log-out');
        }
    },
    template:
    /*html*/
    `<nav class="navbar navbar-expand-lg blue-container py-2">
        <div class="container gap-0 gap-sm-3">
            <a class="navbar-brand" href="#" v-on:click="onClickHome"> <img class="img-fluid w-25" src="./imgs/white-logo.webp"
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
                        <a class="nav-link align-self-center fw-bold text-light hvr-underline-from-left" href="#" v-on:click="onClickHome" >Home</a>
                    </li>
                    <li class="nav-item d-flex me-2">
                        <a class="nav-link align-self-center fw-bold text-light hvr-underline-from-left" v-on:click="onClickHome" href="#highlighted">Featured</a>
                    </li>
                    <li class="nav-item d-flex me-5">
                        <a class="nav-link align-self-center fw-bold text-light hvr-underline-from-left" v-on:click="onClickHome" href="#recipes">Recipes</a>
                    </li>   
                    <li v-if="!guest" class="nav-item d-flex me-5">
                        <a class="nav-link align-self-center fw-bold text-light hvr-underline-from-left" v-on:click="onClickProfile" href="#">Profile</a>
                    </li> 
                  
                    <li v-if="guest" class="nav-item me-2 mt-3 mt-sm-0" >
                        <a class="btn-secondary-light nav-link fw-bold" v-on:click="onClickRegister" href="#">Sign Up</a>
                    </li>
                    <li v-if="guest" class="nav-item me-2">
                        <a class="btn-light nav-link me-2 fw-bold" v-on:click="onClickLogin" href="#">Log In</a>
                    </li>
                    <li v-if="!guest" class="nav-item me-2">
                        <a class="btn-secondary-light nav-link fw-bold" v-on:click="onClickLogOut" href="#">Log Out</a>
                    </li>
                    


                </ul>
            </div>

        </div>
    </nav>`
})