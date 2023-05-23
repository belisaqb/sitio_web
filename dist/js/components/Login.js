app.component('login', {
    props: {
        username: {
            type: String
        },
        password: {
            type: String
        }
    },
    methods: {
        onClickForgotPassword() {
            this.$emit('go-forgot-password');
        },
        onClickProfile() {
            this.$emit('go-profile');
        },
        onClickRegister() {
            this.$emit('go-register');
        }

    },
    template:
    /*html*/
    `<div class="mt-5">
        <h1 class="fw-bold text-center mt-5">Inicia Sesión</h1>
        <p class="text-center content-text">Te damos la bienvenida</p>

        <form action="" method="post">
            <div class="row d-flex justify-content-center gap-3 mx-2">
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="usuario" class="form-label fw-bold">Usuario</label>
                    <input id="usuario" class="form-bg form-control" type="text" name="usuario"
                        placeholder="Usuario">
                </div>
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="contraseña" class="form-label fw-bold">Contraseña <span></span></label>
                    <input id="contraseña" class="form-bg form-control" type="password" name="contraseña"
                        placeholder="Contraseña">
                    <a class="text-link-muted small mt-2" v-on:click="onClickForgotPassword" href="#">¿Has olvidado tu
                        contraseña?</a>
                </div>
            </div>
            <input class="btn-dark text-dark mx-auto fw-bold d-flex justify-content-center mt-4 mb-3"
                type="submit" value="Iniciar Sesión" v-on:click="onClickProfile">
            <a class="text-center text-link-muted small" v-on:click="onClickRegister" href="#">¿No tienes una cuenta? Registrate</a>
        </form>
    </div>`
})