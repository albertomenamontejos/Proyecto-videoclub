'use strict';
window.onload = function () {
    imprimirTitulo();
    selectClientes();
    let btn = document.querySelector("#btn-mostrar");
    btn.addEventListener("click", function () {
        imprimirTablaDevoluciones();
        historialDevoluciones();
    });
    let btn1 = document.querySelector("#mostrar-historial");
    btn1.addEventListener("click", historialDevoluciones);
    imprimirTablaDevoluciones();
    historialDevoluciones();
};

function imprimirTablaDevoluciones() {
    let byclientes = document.querySelector("#r-clientes").checked;
    let cliente_sel = document.querySelector("#clientes0").value;
    let videoClub = buscarVideoclub(localStorage.getItem("seleccionado"));
    let clientes = videoClub.getClientes();
    let tabla = document.querySelector("#tabla");
    if (document.querySelector("#tbody")) {
        document.querySelector("#tbody").remove();
    }
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    for (let i = 0; i < clientes.length; i++) {
        let cliente = Cliente.getOBJ(clientes[i]);
        let productos = cliente.getProductos_alquilados();
        if (byclientes) {
            if (cliente.getNombre() === cliente_sel) {
                for (let z = 0; z < productos.length; z++) {
                    let prod = Producto.getOBJ(productos[z]);
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let btn = document.createElement("button");
                    btn.setAttribute("class", "btn btn-danger");
                    btn.addEventListener("click", function () {
                        prod = cliente.devolverProducto(prod, cliente);
                        guardarCambios(videoClub);
                        let seleccionado = localStorage.getItem("seleccionado");
                        videoClub = buscarVideoclub(seleccionado);
                        let array_productos=videoClub.getProductos();
                        for (let k = 0; k < array_productos.length; k++) {
                            if(array_productos[k]._nombre===prod.getNombre()){
                                array_productos.splice(k,1);
                                array_productos.push(prod.getJSON());
                            }
                        }
                        guardarCambios(videoClub);
                        imprimirTablaDevoluciones();
                        historialDevoluciones();
                    });
                    let btn_txt = document.createTextNode("Devolver");
                    btn.appendChild(btn_txt);
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(prod.getNombre());
                    let txt_tipo = document.createTextNode(prod.getTipo());
                    let txt_fech = document.createTextNode(prod.getFecha_alquilado());
                    td.appendChild(txt_cli);
                    td1.appendChild(txt_pro);
                    td2.appendChild(txt_tipo);
                    td3.appendChild(txt_fech);
                    td4.appendChild(btn);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tbody.appendChild(tr);
                }
                tabla.appendChild(tbody);
            }
        } else {
            for (let z = 0; z < productos.length; z++) {
                let prod = Producto.getOBJ(productos[z]);
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let btn = document.createElement("button");
                btn.setAttribute("class", "btn btn-danger");
                btn.addEventListener("click", function () {
                    prod = cliente.devolverProducto(prod, cliente);
                    guardarCambios(videoClub);
                    let seleccionado = localStorage.getItem("seleccionado");
                    videoClub = buscarVideoclub(seleccionado);
                    let array_productos=videoClub.getProductos();
                    for (let k = 0; k < array_productos.length; k++) {
                        if(array_productos[k]._nombre===prod.getNombre()){
                            array_productos.splice(k,1);
                            array_productos.push(prod.getJSON());
                        }
                    }
                    guardarCambios(videoClub);
                    imprimirTablaDevoluciones();
                    historialDevoluciones();
                });
                let btn_txt = document.createTextNode("Devolver");
                btn.appendChild(btn_txt);
                let txt_cli = document.createTextNode(cliente.getNombre());
                let txt_pro = document.createTextNode(prod.getNombre());
                let txt_tipo = document.createTextNode(prod.getTipo());
                let txt_fech = document.createTextNode(prod.getFecha_alquilado());
                td.appendChild(txt_cli);
                td1.appendChild(txt_pro);
                td2.appendChild(txt_tipo);
                td3.appendChild(txt_fech);
                td4.appendChild(btn);
                tr.appendChild(td);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tbody.appendChild(tr);
            }
            tabla.appendChild(tbody);
        }
    }
}


function historialDevoluciones() {
    let videoClub = buscarVideoclub(localStorage.getItem("seleccionado"));
    let clientes = videoClub.getClientes();
    let tabla = document.querySelector("#historial");
    if (document.querySelector("#tbody1")) {
        document.querySelector("#tbody1").remove();
    }
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody1");
    let cliente_sel = document.querySelector("#clientes1").value;
    let checkeado;
    if (document.querySelector("#lf-exacta").checked) {
        checkeado = "fecha_exacta";
    } else if (document.querySelector("#lf-entre").checked) {
        checkeado = "fecha_entre";
    } else if (document.querySelector("#lf-clientes").checked) {
        checkeado = "clientes";
    }

    for (let i = 0; i < clientes.length; i++) {
        let cliente = Cliente.getOBJ(clientes[i]);
        let productos = cliente.getProductos_devueltos();
        if (checkeado === "fecha_exacta") {

            let fecha = document.querySelector("#f-exacta").value;
            fecha = fecha.split("-").reverse().join("-");
            for (let z = 0; z < productos.length; z++) {
                console.log(fecha);
                console.log(Producto.getOBJ(productos[0]).getFecha_devolucion());
                console.log(fecha === Producto.getOBJ(productos[z]).getFecha_devolucion());
                if (fecha === Producto.getOBJ(productos[z]).getFecha_devolucion()) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                    let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                    let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                    let txt_dev = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_devolucion());
                    td.appendChild(txt_cli);
                    td1.appendChild(txt_pro);
                    td2.appendChild(txt_tipo);
                    td3.appendChild(txt_fech);
                    td4.appendChild(txt_dev);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tbody.appendChild(tr);
                }
                tabla.appendChild(tbody);
            }
        } else if (checkeado === "fecha_entre") {
            let fech1 = document.querySelector("#fech1").value;
            let fech2 = document.querySelector("#fech2").value;
            fech1 = fech1.split("-");
            fech2 = fech2.split("-");
            let f1 = new Date(fech1[0], fech1[1], fech1[2]);
            let f2 = new Date(fech2[0], fech2[1], fech2[2]);
            for (let z = 0; z < productos.length; z++) {
                let fecha = Producto.getOBJ(productos[z]).getFecha_devolucion().split("-");
                let f = new Date(fecha[2], fecha[1], fecha[0]);
                if (f1.getTime() <= f.getTime() && f2.getTime() >= f.getTime()) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                    let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                    let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                    let txt_dev = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_devolucion());
                    td.appendChild(txt_cli);
                    td1.appendChild(txt_pro);
                    td2.appendChild(txt_tipo);
                    td3.appendChild(txt_fech);
                    td4.appendChild(txt_dev);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tbody.appendChild(tr);
                }
            }
            tabla.appendChild(tbody);
        } else if (checkeado === "clientes") {
            if (cliente.getNombre() === cliente_sel) {
                for (let z = 0; z < productos.length; z++) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                    let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                    let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                    let txt_dev = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_devolucion());
                    td.appendChild(txt_cli);
                    td1.appendChild(txt_pro);
                    td2.appendChild(txt_tipo);
                    td3.appendChild(txt_fech);
                    td4.appendChild(txt_dev);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tbody.appendChild(tr);

                }
                tabla.appendChild(tbody);
            }
        } else {
            for (let z = 0; z < productos.length; z++) {
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");

                let txt_cli = document.createTextNode(cliente.getNombre());
                let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                let txt_dev = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_devolucion());
                td.appendChild(txt_cli);
                td1.appendChild(txt_pro);
                td2.appendChild(txt_tipo);
                td3.appendChild(txt_fech);
                td4.appendChild(txt_dev);
                tr.appendChild(td);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tbody.appendChild(tr);
            }
            tabla.appendChild(tbody);
        }
    }
}