app.component('recipe-register', {
    template:
    /*html*/
    `<div class="row d-flex justify-content-center p-0 m-0">

        <div class="container my-5 p-lg-5">
            <form action="response.php" method="post">
                <h1 class="display-3 fw-bold text-center">Registro de recetas</h1>
                <p class="text-phar text-center ">Ingrese los datos de la receta</p>

                <div class="row d-flex justify-content-center mx-2">

                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="my-4 col-lg-11">
                            <label for="nombreReceta" class="form-label fw-bold">Nombre de la Receta</label>
                            <div class="input-group">
                                <div class="form-floating">
                                    <input id="nombreReceta" class="form-control form-control-sm form-bg" type="text"
                                        name="nombreReceta" placeholder="Nombre Receta">
                                    <label for="nombreReceta">Nombre de la Receta</label>
                                </div>
                            </div>
                        </div>

                        <div class="my-4 col-lg-11">
                            <label for="tiempoPreparacion" class="form-label fw-bold">Tiempo de preparación</label>
                            <div class="input-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control form-bg" id="tiempoPreparacion"
                                        name="tiempoPreparacion" placeholder="Tiempo de preparacion">
                                    <label for="tiempoPreparacion">Ingrese el tiempo de preparación</label>
                                </div>
                                <span class="input-group-text blue-container ">min</span>
                            </div>
                        </div>

                        <div class="my-4 col-lg-11">
                            <label for="tiempoCoccion" class="form-label fw-bold">Tiempo de Cocción</label>
                            <div class="input-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control form-bg" id="tiempoCoccion"
                                        name="tiempoCoccion" placeholder="Username">
                                    <label for="tiempoCoccion">Ingrese el tiempo de Cocción</label>
                                </div>
                                <span class="input-group-text blue-container">min</span>
                            </div>
                        </div>

                        <div class="my-4 col-lg-11">
                            <label for="tiempoTotal" class="form-label fw-bold">Tiempo Total</label>
                            <div class="mb-2">
                                <div class="input-group">
                                    <div class="form-floating">
                                        <input type="text" class="form-control form-bg" id="tiempoTotal"
                                            name="tiempoTotal" placeholder="Tiempo Total">
                                        <label for="tiempoTotal">Ingrese el tiempo Total</label>
                                    </div>
                                    <span class="input-group-text blue-container">min</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 col-lg-11">
                            <label for="porciones" class="form-label fw-bold">Porciones</label>
                            <div class="input-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control form-bg" id="porciones" name="porciones"
                                        placeholder="Porciones">
                                    <label for="porciones">Ingrese las porciones</label>
                                </div>
                            </div>
                        </div>

                    </div>


                    <!--Segunda Columna-->
                    <div class="col-lg-6 col-md-12 col-sm-12">

                        <div class="my-4 col-lg-11">
                            <label for="category" class="form-label fw-bold">Categoría</label>
                            <div class="form-floating">
                                <select class="form-select  form-bg" name="category" id="category"
                                    aria-label="Floating label select example">
                                    <option selected>...</option>
                                    <option value="">Desayunos</option>
                                </select>
                                <label for="category">Seleccione la Categoría</label>
                            </div>
                        </div>
                        <div class="my-4 col-lg-11">
                            <label for="level" class="form-label fw-bold">Complejidad</label>
                            <div class="form-floating">
                                <select class="form-select  form-bg" name="level" id="level"
                                    aria-label="Floating label select example">
                                    <option selected>...</option>
                                    <option value="">Media</option>
                                </select>
                                <label for="level">Seleccione la Complejidad</label>
                            </div>
                        </div>

                        <div class="my-4 col-lg-11">
                            <label for="ocasion" class="form-label fw-bold">Ocasión</label>
                            <div class="form-floating">
                                <select class="form-select form-bg" aria-label="Floating label select example"
                                    name="ocasion" id="ocasion">
                                    <option selected>...</option>
                                    <option value="">Todas</option>
                                </select>
                                <label for="ocasion">Seleccione la Ocasión</label>
                            </div>
                        </div>

                        <div class="my-4 col-lg-11">
                            <label for="votos" class="form-label fw-bold">Votos de la Receta</label>
                            <div class="input-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control form-bg" id="votos" name="votos"
                                        placeholder="Votos">
                                    <label for="votos">Ingrese los votos de la receta</label>
                                </div>
                            </div>
                        </div>

                        <div class="my-5">
                            <label for="recetaDestacada" class="form-label fw-bold">¿Receta destacada?</label>
                            <div class="mb-3">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio1" value="option1">
                                    <label class="form-check-label" for="inlineRadio1">Sí</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio2" value="option2">
                                    <label class="form-check-label" for="inlineRadio2">No</label>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div>                        

                        <div class="col-lg-7 col-md-9 col-sm-12 my-4">
                            <label for="descripcion" class="form-label fw-bold">Descripción</label>
                            <textarea id="descripcion" class="form-control form-bg" name="descripcion"
                                placeholder="Descripción"></textarea>
                        </div>

                        <div class="col-lg-7 col-md-9 col-sm-12 my-4">
                            <label for="ingredientes" class="form-label fw-bold">Ingredientes</label>

                            <div id="ingredients">

                            </div>
                            <button type="button" id="add-ingredient" class="btn-secondary-dark mt-3">Añadir
                                ingredientes</button>

                        </div>

                        <div class="col-lg-7 col-md-9 col-sm-12 my-4">
                            <label for="instrucciones" class="form-label fw-bold">Instrucciones de preparación</label>
                            <div id="instructions">

                            </div>
                            <button type="button" id="add-instructions" class="btn-secondary-dark mt-3">Añadir
                                instrucciones</button>
                        </div>

                        <div class="col-lg-7 col-md-9 col-sm-12 my-4">
                            <label for="imagen" class="form-label fw-bold">Imagen</label>
                            <input id="imagen" class="form-control form-bg" type="file" name="imagen">
                        </div>
                    </div>

                    <div class="d-flex justify-content-start">
                        <div class="col-lg-6 col-sm-6 my-4">
                            <input class="btn-dark mb-4 me-3" type="submit" value="Registrar Receta">
                            <a class=" btn-secondary-dark nav-link me-2 my-3" href="admin-view.html">Cancelar</a>
                        </div>
                    </div>

                </div>
            </form>
        </div>`
})