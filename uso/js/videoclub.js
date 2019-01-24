'use strict';
function inicio() {
    imprimirTitulo();
    let btn_ver_prod = document.querySelector("#ver-prod");
    btn_ver_prod.addEventListener("click", function () {
        open("/Alberto_Mena_videoclub/uso/ver_productos.html", "_self");
    });

    let btn_ver_cli = document.querySelector("#ver-cli");
    btn_ver_cli.addEventListener("click", function () {
        open("/Alberto_Mena_videoclub/uso/ver_clientes.html", "_self");
    });

    let btn_prod_alq = document.querySelector("#btn-prod-alq");
    btn_prod_alq.addEventListener("click", function () {
        open("/Alberto_Mena_videoclub/uso/prod_alquilados.html", "_self");
    });

    let btn_alquilar = document.querySelector("#btn-alquilar");
    btn_alquilar.addEventListener("click", function () {
        open("/Alberto_Mena_videoclub/uso/alquilar.html", "_self");
    });

    let btn_devolucion = document.querySelector("#btn-devolucion");
    btn_devolucion.addEventListener("click", function () {
        open("/Alberto_Mena_videoclub/uso/devolucion.html", "_self");
    });
}

window.onload = inicio;