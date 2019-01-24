'use strict';
window.onload = function () {
    imprimirTitulo();
    selectClientes();
    tablaProductos();
    let select = document.querySelector("#productos");
    select.addEventListener("change", tablaProductos);
};

function tablaProductos() {
    //TODO: CSS select productos
    if (document.querySelector("#cont-productos")) {
        document.querySelector("#cont-productos").remove();
    }
    let seccion = document.createElement("section");
    seccion.setAttribute("id", "cont-productos");
    seccion.setAttribute("class", "");
    document.body.appendChild(seccion);
    let cont = document.querySelector("#cont-productos");
    cont.setAttribute("class", "d-flex flex-wrap justify-content-center");
    let seleccionado = localStorage.getItem("seleccionado");
    let select = document.querySelector("#productos").value;
    let videoclub = buscarVideoclub(seleccionado);
    let productos = videoclub.getProductos();

    for (let i = 0; i < productos.length; i++) {
        let producto = Producto.getOBJ(productos[i]);
        if (producto.getDisponibilidad()) {
            let caja = document.createElement("div");
            caja.setAttribute("class", "d-flex flex-wrap justify-content-between align-items-center p-4 m-3 bg-dark text-white w-25");
            if (producto.getTipo() === select || select === "todos") {
                let btn = document.createElement("button");
                btn.addEventListener("click", function () {
                    let seleccionado = localStorage.getItem("seleccionado");
                    let videoclub = buscarVideoclub(seleccionado);
                    let clientes = videoclub.getClientes();
                    let sel_cliente = document.querySelector("#clientes0").value;
                    for (let z = 0; z < clientes.length; z++) {
                        let cliente = Cliente.getOBJ(clientes[z]);
                        if (cliente.getNombre() === sel_cliente) {
                            cliente.anyadir_producto(producto);
                            producto.setDisponibilidad(false);
                        }
                    }
                    let array_prod = videoclub.getProductos();
                    for (let k = 0; k < array_prod.length; k++) {
                        let p = Producto.getOBJ(array_prod[k]);
                        if(p.getNombre()===producto.getNombre()){
                          array_prod.splice(k,1);
                          array_prod.push(producto.getJSON());
                        }
                    }
                    guardarCambios(videoclub);
                    location.reload();
                });
                btn.setAttribute("class", "btn  btn-success ml-5 ");
                let txt_btn = document.createTextNode("Alquilar");
                btn.appendChild(txt_btn);
                caja.innerHTML = producto.toString();
                caja.appendChild(btn);
                cont.appendChild(caja);
            }
        }
    }
}