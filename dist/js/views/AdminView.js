app.component('admin-view', {
    template:
    /*html*/
    `<section class="container">
        <div class=" mt-3">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active text-dark" id="recipes-tab" data-bs-toggle="tab" data-bs-target="#recipes"
                        type="button" role="tab">Recetas</button>
                </li>
                <li class="nav-item " role="presentation">
                    <button class="nav-link unlink" id="users-tab" data-bs-toggle="tab" data-bs-target="#users"
                        type="button" role="tab">Usuarios</button>
                </li>

                <!-- <li class="circle mx-auto d-flex justify-content-center">
                    <i class="align-self-center fa-solid fa-plus"></i>
                </li>                -->
            </ul>
            

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="recipes" role="tabpanel">
                    <div class="d-flex justify-content-end">
                        <a class=" btn-dark nav-link me-2 fw-bold my-3" href="register_recipe.html">Crear receta</a>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item header-admin form-bg" aria-current="true">
                            <div class="row d-flex justify-content-between px-2 pt-2">
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Nombre</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Categoría</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Ocasión</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Complejidad</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Destacada</h6>
                                <h6 class="col-lg-1 col-sm-3 fw-bold">Editar</h6>
                                <h6 class="col-lg-1 col-sm-3 fw-bold">Eliminar</h6>
                            </div>
                        </li>
    
                        <div>
                            <li class='list-group-item'>
                                <div class='row d-flex justify-content-between px-2 pt-1'>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Nombre de la receta</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Desayunos</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Todas</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Media</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Sí</p>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-pen-to-square'></i></a>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-trash-can'></i></a>
                                </div>
                            </li>
                            <li class='list-group-item'>
                                <div class='row d-flex justify-content-between px-2 pt-1'>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Nombre de la receta</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Desayunos</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Todas</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Media</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Sí</p>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-pen-to-square'></i></a>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-trash-can'></i></a>
                                </div>
                            </li>

                        </div>
                        
                    </ul>
                </div>

                <div class="tab-pane fade" id="users" role="tabpanel">
                    <ul class="list-group mt-4">
                        <li class="list-group-item header-admin form-bg" aria-current="true">
                            <div class="row d-flex justify-content-between px-2 pt-2">
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Nombre</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Email</h6>
                                <h6 class="col-lg-2 col-sm-6 fw-bold">Usuario</h6>
                                <h6 class="col-lg-1 col-sm-3 fw-bold">Editar</h6>
                                <h6 class="col-lg-1 col-sm-3 fw-bold">Eliminar</h6>
                            </div>
                        </li>
    
                        <div>
                            <li class='list-group-item'>
                                <div class='row d-flex justify-content-between px-2 pt-1'>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Nombre</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>juan@gmail.com</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>@juancito</p>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-pen-to-square'></i></a>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-trash-can'></i></a>
                                </div>                            
                            </li>
                            <li class='list-group-item'>
                                <div class='row d-flex justify-content-between px-2 pt-1'>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>Nombre</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>juan@gmail.com</p>
                                    <p class='col-lg-2 col-sm-6-2 m-0'>@juancito</p>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-pen-to-square'></i></a>
                                    <a class='col-lg-1 col-sm-3 m-0' href='#'><i
                                            class='align-self-center icon-link fa-solid fa-trash-can'></i></a>
                                </div>                            
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </div>



            <div>
                
            </div>
        </div>

    </section>`
})