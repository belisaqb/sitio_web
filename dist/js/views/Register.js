app.component('register', {
    // props: {
    //     name: {
    //         type: String
    //     },
    //     email: {
    //         type: String
    //     },
    //     username: {
    //         type: String
    //     },
    //     password: {
    //         type: String
    //     }
    // },
    mounted() {
        // name: null;
        // email: null;
        // username: null;
        // password: null;
    },
    methods: {
        onClickProfile() {
            this.$emit('go-profile');
        },
        onClickLogin() {
            this.$emit('go-login');
        },
        doRegister() {
            this.$emit('go-register', this.name, this.username, this.email, this.password);
        }
    },

    template:
        /*html*/
        `<div class="mt-5">
        <h1 class="fw-bold text-center mt-5">Sign Up</h1>
        <p class="text-center content-text">Welcome!</p>

        <form v-on:submit.prevent="doRegister">
            <div class="row d-flex justify-content-center gap-3 mx-2">
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="name" class="form-label fw-bold">Name</label>
                    <input v-model="name" class="form-bg form-control" type="text" placeholder="Name">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <input v-model="email" class="form-bg form-control" type="text" placeholder="Email">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="usuario" class="form-label fw-bold">User</label>
                    <input v-model="username" class="form-bg form-control" type="text" placeholder="User">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="contraseña" class="form-label fw-bold">Password <span></span></label>
                    <input v-model="password" class="form-bg form-control" type="password" placeholder="Password">
                </div>
            </div>
            <input class="btn-dark text-dark mx-auto fw-bold d-flex justify-content-center mt-4 mb-3"
                type="submit" value="Registrarse" >
            <a class="text-center text-link-muted small" v-on:click="onClickLogin" href="#">A member already? Log In</a>
        </form>
    </div>`
})