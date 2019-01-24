'use strict';

window.onload = function () {
    imprimirTitulo();
    selectClientes();
    let btn = document.querySelector("#btn-mostrar");
    btn.addEventListener("click", mostrarTabla);
    mostrarTabla();
};

function mostrarTabla() {
    let fech1 = document.querySelector("#fech1").value;
    let fech2 = document.querySelector("#fech2").value;
    fech1 = fech1.split("-");
    fech2 = fech2.split("-");
    let f1 = new Date(fech1[0], fech1[1], fech1[2]);
    let f2 = new Date(fech2[0], fech2[1], fech2[2]);
    let check;
    let videoClub = buscarVideoclub(localStorage.getItem("seleccionado"));
    let clientes = videoClub.getClientes();
    let tabla = document.querySelector("#tabla");
    if (document.querySelector("#tbody")) {
        document.querySelector("#tbody").remove();
    }
    if (document.querySelector("#r-fecha").checked) {
        check = "fecha";
    }
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    for (let i = 0; i < clientes.length; i++) {
        let cliente = Cliente.getOBJ(clientes[i]);
        let productos = cliente.getProductos_alquilados();
        if (check === "fecha") {
            for (let z = 0; z < productos.length; z++) {
                let fecha = Producto.getOBJ(productos[z]).getFecha_alquilado().split("-");
                let f = new Date(fecha[2], fecha[1], fecha[0]);
                if (f1.getTime() <= f.getTime() && f2.getTime() >= f.getTime()) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let td5 = document.createElement("td");
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                    let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                    let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                    let estado = document.createTextNode("Alquilado");
                    let fecha_dev = document.createTextNode("No disponible");
                    let p_dev = cliente.getProductos_devueltos();
                    for (let j = 0; j < p_dev.length; j++) {
                        if (Producto.getOBJ(productos[z]).getNombre() === Producto.getOBJ(p_dev[j]).getNombre()) {
                            estado = document.createTextNode("Devuelto");
                            fecha_dev = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_devolucion());
                            break;
                        }
                    }
                    td.appendChild(txt_pro);
                    td1.appendChild(txt_tipo);
                    td2.appendChild(estado);
                    td3.appendChild(txt_cli);
                    td4.appendChild(txt_fech);
                    td5.appendChild(fecha_dev);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tbody.appendChild(tr);
                }
                tabla.appendChild(tbody);
            }
            let p_dev = cliente.getProductos_devueltos();
            for (let j = 0; j < p_dev.length; j++) {
                let fecha = Producto.getOBJ(p_dev[j]).getFecha_alquilado().split("-");
                let f = new Date(fecha[2], fecha[1], fecha[0]);
                if (f1.getTime() <= f.getTime() && f2.getTime() >= f.getTime()) {
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let td5 = document.createElement("td");
                    let txt_cli = document.createTextNode(cliente.getNombre());
                    let txt_pro = document.createTextNode(Producto.getOBJ(p_dev[j]).getNombre());
                    let txt_tipo = document.createTextNode(Producto.getOBJ(p_dev[j]).getTipo());
                    let txt_fech = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_alquilado());
                    let fecha_dev = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_devolucion());
                    let estado = document.createTextNode("Devuelto");
                    td.appendChild(txt_pro);
                    td1.appendChild(txt_tipo);
                    td2.appendChild(estado);
                    td3.appendChild(txt_cli);
                    td4.appendChild(txt_fech);
                    td5.appendChild(fecha_dev);
                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tbody.appendChild(tr);
                }
            }
            tabla.appendChild(tbody);
        } else {
            for (let z = 0; z < productos.length; z++) {
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");
                let txt_cli = document.createTextNode(cliente.getNombre());
                let txt_pro = document.createTextNode(Producto.getOBJ(productos[z]).getNombre());
                let txt_tipo = document.createTextNode(Producto.getOBJ(productos[z]).getTipo());
                let txt_fech = document.createTextNode(Producto.getOBJ(productos[z]).getFecha_alquilado());
                let p_dev = cliente.getProductos_devueltos();
                let estado = document.createTextNode("Alquilado");
                let fecha_dev = document.createTextNode("No disponible");
                for (let j = 0; j < p_dev.length; j++) {
                    if (Producto.getOBJ(productos[z]).getNombre() === Producto.getOBJ(p_dev[j]).getNombre()) {
                        estado = document.createTextNode("Devuelto");
                        fecha_dev = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_devolucion());
                        break;
                    }
                }
                td.appendChild(txt_pro);
                td1.appendChild(txt_tipo);
                td2.appendChild(estado);
                td3.appendChild(txt_cli);
                td4.appendChild(txt_fech);
                td5.appendChild(fecha_dev);
                tr.appendChild(td);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);
            }
            tabla.appendChild(tbody);
            let p_dev = cliente.getProductos_devueltos();
            for (let j = 0; j < p_dev.length; j++) {
                let tr = document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");
                let txt_cli = document.createTextNode(cliente.getNombre());
                let txt_pro = document.createTextNode(Producto.getOBJ(p_dev[j]).getNombre());
                let txt_tipo = document.createTextNode(Producto.getOBJ(p_dev[j]).getTipo());
                let txt_fech = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_alquilado());
                let fecha_dev = document.createTextNode(Producto.getOBJ(p_dev[j]).getFecha_devolucion());
                let estado = document.createTextNode("Devuelto");
                td.appendChild(txt_pro);
                td1.appendChild(txt_tipo);
                td2.appendChild(estado);
                td3.appendChild(txt_cli);
                td4.appendChild(txt_fech);
                td5.appendChild(fecha_dev);
                tr.appendChild(td);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tbody.appendChild(tr);
            }
            tabla.appendChild(tbody);
        }
    }
}
