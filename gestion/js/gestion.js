'use strict';

function inicio() {
    let btn1 = document.querySelector("#btn-crear");
    btn1.addEventListener("click", dispFormulario);
    let btn2 = document.querySelector("#btn-crear-v");//Botón crear videoclub
    btn2.addEventListener("click", validarVideoClub,false);
    let btn_anyadirProducto = document.querySelector("#anyadir-producto");
    btn_anyadirProducto.addEventListener("click", comprobarFormProd,false);
    let btn_anyadirCliente = document.querySelector("#anyadir-cliente");
    btn_anyadirCliente.addEventListener("click", comprobarNomCli,false);
    let select_form_pro = document.querySelector("#tipo-p");
    select_form_pro.addEventListener("change", formProductos);
    formProductos();
    //Mostrar videoclubs almacenados en localStorage
    mostrarVideoClubs();
}

window.onload = inicio;


//mostrar ocultar formulario para crear un videoclub
function dispFormulario() {
    let form = document.querySelector("#form-crear");
    if (form.className === "ocultar") {
        form.className = "mostrar";
    } else {
        form.className = "ocultar";
    }
}

//PARTE DE GESTION, manejo de  formulario según opción elegida en el select de productos
function formProductos() {
    let tipo_prod = document.querySelector("#tipo-p").value;
    let duracion_p = document.querySelector("#duracion-p");
    let plataforma_p = document.querySelector("#plataforma-p");
    let idioma_p = document.querySelector("#idioma-p");
    if (tipo_prod === "Cd") {
        duracion_p.className = "mt-3 form form-control mostrar";
        plataforma_p.className = "mt-3 form form-control ocultar";
        idioma_p.className = "mt-3 form form-control ocultar";
    } else if (tipo_prod === "Pelicula") {
        duracion_p.className = "mt-3 form form-control mostrar";
        plataforma_p.className = "mt-3 form form-control ocultar";
        idioma_p.className = "mt-3 form form-control mostrar";
    } else if (tipo_prod === "Juego") {
        duracion_p.className = "mt-3 form form-control ocultar";
        plataforma_p.className = "mt-3 form form-control mostrar";
        idioma_p.className = "mt-3 form form-control ocultar";
    }
}