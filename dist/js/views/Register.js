app.component('register', {
    props: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        }
    },
    methods: {
        onClickProfile() {
            this.$emit('go-profile');
        },
        onClickLogin() {
            this.$emit('go-login');
        }
    },
    template:
    /*html*/
    `<div class="mt-5">
        <h1 class="fw-bold text-center mt-5">Registrarse</h1>
        <p class="text-center content-text">Te damos la bienvenida</p>

        <form action="" method="post">
            <div class="row d-flex justify-content-center gap-3 mx-2">
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="name" class="form-label fw-bold">Nombre</label>
                    <input id="name" class="form-bg form-control" type="text" name="name"
                        placeholder="Nombre">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <input id="email" class="form-bg form-control" type="text" name="email"
                        placeholder="Email">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="usuario" class="form-label fw-bold">Usuario</label>
                    <input id="usuario" class="form-bg form-control" type="text" name="usuario"
                        placeholder="Usuario">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="contraseña" class="form-label fw-bold">Contraseña <span></span></label>
                    <input id="contraseña" class="form-bg form-control" type="password" name="contraseña"
                        placeholder="Contraseña">
                </div>
            </div>
            <input class="btn-dark text-dark mx-auto fw-bold d-flex justify-content-center mt-4 mb-3"
                type="submit" value="Registrarse" v-on:click="onClickProfile">
            <a class="text-center text-link-muted small" v-on:click="onClickLogin" href="#">¿Ya tienes una cuenta? Inicia Sesión</a>
        </form>
    </div>`
})