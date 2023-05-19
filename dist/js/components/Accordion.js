app.component('accordion', {
    props: {
        title: {
            type: String,
            default: 'Categorías'
        }
    },
    template:
    /*html*/
    `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="fw-bold lead text-dark accordion-button accordion-bg" type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{ title }}
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a class="list-link text-link"
                            href="#">Categoría</a>
                    </li>
                    <li class="list-group-item"><a class="list-link text-link"
                            href="#">Categoría</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>`
})