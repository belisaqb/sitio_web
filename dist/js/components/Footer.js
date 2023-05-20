app.component('footer-info', {
    props: {
        
    },
    template:
    /*html*/
    `<div class="container-fluid d-flex mt-5 pt-5 pb-0 footer-bg">
        <div class="container align-self-center">

            <div class="row mb-3">
                <div class="col-lg-3 col-sm-6 my-4">
                    <img src="./imgs/white-logo.webp" alt="Logo">
                </div>
                <div class="col-lg-3 col-sm-6 my-4">
                    <h5 class="fw-bold mb-3"><a href="#" class="footer-link">Inicio</a></h5>
                    <ul class="list-unstyled">
                        <li class="mb-3"><a href="#" class="footer-link">Destacadas</a></li>
                        <li class="mb-3"><a href="#" class="footer-link">Recetas</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 my-4">
                    <h5 class="fw-bold mb-3">Síguenos</h5>
                    <ul class="list-unstyled">
                        <li class="mb-3"><a href="#" class="footer-link"><i
                                    class="fab fa-facebook me-2"></i>Facebook</a>
                        </li>
                        <li class="mb-3"><a href="#" class="footer-link"><i
                                    class="fab fa-instagram me-2"></i>Instagram</a>
                        </li>
                        <li class=""><a href="#" class="footer-link"><i class="fab fa-twitter me-2"></i>Twitter</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 my-4">
                    <a class="btn-secondary-light nav-link fw-bold mb-4 me-3" href="register.html">Registrarse</a>
                    <a class="btn-light nav-link me-2 fw-bold" href="login.html">Iniciar Sesión</a>
                </div>
            </div>
            <div class="border-top py-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 content">
                        <small>2022. Become the chef. Todos los derechos reservados</small>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <ul class="list-inline text-lg-end">
                            <li class="list-inline-item me-3"><a href="#" class="footer-link"><small>Términos
                                        y condiciones</small></a>
                            </li>
                            <li class="list-inline-item me-3"><a href="#" class="footer-link"><small>Aviso de
                                        Privacidad</small></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})