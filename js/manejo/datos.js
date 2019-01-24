'use strict';
//Función para validar el formulario cuando se crea
//un nuevo VIDEOCLUB
function validarVideoClub(e) {
    let formulario = document.querySelector("#form-crear-v");
    let nombre = formulario.nombre_v;
    if (document.querySelector("#error-v")) {
        document.querySelector("#error-v").remove();
    }
    let error = document.createElement("div");
    error.setAttribute("id", "error-v");
    let pos = document.querySelector("#btn-crear-v");
    error.style.color = 'red';
    error.style.width = '600px';
    let errores = false;
    let ok = true;
    for (let i = 0; i < nombre.value.length; i++) {
        if (nombre.value[i] === " ") {
            ok = true;
        } else {
            ok = false;
            break;
        }
    }

    formulario.insertBefore(error, pos);
    if (nombre.value === "" || nombre.value == null) {
        error.innerHTML += '<p> Por favor, completa el nombre</p>';
        e.preventDefault();
        document.querySelector("#nombre-videoclub").focus();
        errores = true;
    } else if (ok) {
        error.innerHTML += '<p>El nombre no puede ser solo espacios.</p>';
        e.preventDefault();
        document.querySelector("#nombre-videoclub").focus();
        errores = true;
    }
    if (localStorage.getItem("jsonClubs")) {
        if (buscarVideoclub(nombre.value)) {
            error.innerHTML += '<p>Este videoclub ya existe</p>';
            e.preventDefault();
            document.querySelector("#nombre-videoclub").focus();
            errores = true;
        }
    }
    if (nombre.value.length < 3) {
        error.innerHTML += '<p>Debe contener al menos 3 letras</p>';
        e.preventDefault();
        document.querySelector("#nombre-videoclub").focus();
        errores = true;
    }
    if (!errores) {
        crearVideoclub(nombre.value);
    }
}

function comprobarNomCli(e) {
    let form = document.querySelector("#form-cliente");
    let nombre = form.nom_cliente;
    if (document.querySelector("#error-c")) {
        document.querySelector("#error-c").remove();
    }
    let error = document.createElement("div");
    error.setAttribute("id", "error-c");
    error.setAttribute("class", "mt-3");
    let pos = document.querySelector("#add-cli");
    error.style.color = 'red';
    error.style.width = '600px';
    let errores = false;
    pos.appendChild(error);
    if (nombre.value === "" || nombre.value == null) {
        error.innerHTML += '<p> Por favor, completa el nombre</p>';
        e.preventDefault();
        document.querySelector("#nombre-c").focus();
        errores = true;
    } else if (nombre.value.length < 3) {
        error.innerHTML += '<p>Debe contener al menos 3 letras</p>';
        e.preventDefault();
        document.querySelector("#nombre-c").focus();
        errores = true;
    } else if (buscarCliente(nombre.value)) {
        error.innerHTML += '<p>Este cliente ya existe</p>';
        e.preventDefault();
        document.querySelector("#nombre-c").focus();
        errores = true;
    }
    if (!errores) {
        anyadirCliente(nombre.value);
    }
}

function comprobarFormProd(e) {
    let form = document.querySelector("#form-prod");
    let nombre = form.nom_prod;
    let genero = form.gen_prod;
    let duracion = form.dur_prod;
    let plataforma = form.plat_prod;
    let idioma = form.id_prod;
    console.log(duracion.className);
    console.log(plataforma.className);
    console.log(idioma.className);

    if (document.querySelector("#error-p")) {
        document.querySelector("#error-p").remove();
    }
    let error = document.createElement("div");
    error.setAttribute("id", "error-p");
    error.setAttribute("class", "mt-3");
    let pos = document.querySelector("#add-prod");
    error.style.color = 'red';
    error.style.width = '600px';
    let errores = false;
    pos.appendChild(error);
    if (nombre.value === "" || nombre.value == null) {
        error.innerHTML += '<p> Por favor, completa el nombre</p>';
        document.querySelector("#nombre-p").focus();
        e.preventDefault();
        errores = true;
    } else if (genero.value === "" || genero.value == null) {
        error.innerHTML += '<p> Por favor, completa el genero</p>';
        document.querySelector("#genero-p").focus();
        e.preventDefault();
        errores = true;
    } else if ((duracion.value === "" || duracion.value == null) && (duracion.className === 'mt-3 form form-control mostrar' || duracion.className === 'mt-3 form form-control')) {
        error.innerHTML += '<p> Por favor, completa la duración</p>';
        document.querySelector("#duracion-p").focus();
        e.preventDefault();
        errores = true;

    }else if ((plataforma.value === "" || plataforma.value == null) && (plataforma.className === 'mt-3 form form-control mostrar' || plataforma.className === 'mt-3 form form-control')) {
        error.innerHTML += '<p> Por favor, completa la plataforma</p>';
        document.querySelector("#plataforma-p").focus();
        e.preventDefault();
        errores = true;
    } else if ((idioma.value === "" || idioma.value == null) && (idioma.className === 'mt-3 form form-control mostrar' || idioma.className === 'mt-3 form form-control')) {
        error.innerHTML += '<p> Por favor, completa el idioma</p>';
        document.querySelector("#idioma-p").focus();
        e.preventDefault();
        errores = true;
    } else if (nombre.value.length < 3) {
        error.innerHTML += '<p>Debe contener al menos 3 letras</p>';
        e.preventDefault();
        document.querySelector("#nombre-p").focus();
        errores = true;
    }

    if (!errores) {
        anyadirProducto(nombre.value, genero.value, duracion.value, idioma.value, plataforma.value);
    }
}