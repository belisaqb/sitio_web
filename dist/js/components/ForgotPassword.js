app.component('forgot-password', {
    props: {
        email: {
            type: String
        },
        
    },
    methods: {
        onClickLogin() {
            this.$emit('go-login');
        }
    },
    template:
    /*html*/
    `<div class="mt-5">
        <h1 class="fw-bold text-center mt-5">Cambio de Contraseña</h1>
        <p class="text-center content-text">Ingresa tu email y enviaremos la nueva contraseña</p>

        <form action="login.php" method="post">
            <div class="row d-flex justify-content-center gap-3 mx-2 mt-4">
                <div class="mb-3 col-lg-9 col-md-9 col-sm-12">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <input id="email" class="form-bg form-control" type="text" name="email"
                        placeholder="Email">
                </div>                            
            </div>
            <input class="btn-dark text-dark mx-auto fw-bold d-flex justify-content-center mt-4 mb-3"
                type="submit" value="Enviar">
            <a class="text-center text-link-muted small" v-on:click="onClickLogin" href="#">¿Recordaste la contraseña? Iniciar Sesión</a>
        </form>
    </div>`
})