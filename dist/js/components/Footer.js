app.component('footer-info', {
    props: {
        
    },
    methods: {
        onClickHome() {
            this.$emit('go-home');
        },
        onClickLogin() {
            this.$emit('go-login');
        },
        onClickRegister() {
            this.$emit('go-register');
        }
    },
    template:
    /*html*/
    `<div class="container-fluid d-flex pt-5 pb-0 footer-bg">
        <div class="container align-self-center">

            <div class="row mb-3">
                <div class="col-lg-3 col-sm-6 my-4">
                    <img src="./imgs/white-logo.webp" alt="Logo">
                </div>
                <div class="col-lg-3 col-sm-6 my-4">
                    <h5 class="fw-bold mb-3"><a v-on:click="onClickHome" href="#" class="footer-link">Home</a></h5>
                    <ul class="list-unstyled">
                        <li class="mb-3"><a v-on:click="onClickHome" href="#highlighted" class="footer-link">Featured</a></li>
                        <li class="mb-3"><a v-on:click="onClickHome" href="#recipes" class="footer-link">Recipes</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 my-4">
                    <h5 class="fw-bold mb-3">Follow</h5>
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
                    <a class="btn-secondary-light nav-link fw-bold mb-4 me-3" v-on:click="onClickRegister" href="#">Sign Up</a>
                    <a class="btn-light nav-link me-2 fw-bold" v-on:click="onClickLogin" href="#">Log In</a>
                </div>
            </div>
            <div class="border-top py-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 content">
                        <small>2022. Become the chef. All rights reserved</small>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <ul class="list-inline text-lg-end">
                            <li class="list-inline-item me-3"><a href="#" class="footer-link"><small>Terms & Conditions</small></a>
                            </li>
                            <li class="list-inline-item me-3"><a href="#" class="footer-link"><small>Privacy Policy</small></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})