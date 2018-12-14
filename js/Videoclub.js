'use strict';

class Videoclub {

    constructor(nombre) {

        let _nombre = nombre;
        let _clientes = new Array();
        let _productos = new Array();

        this.setNombre = function (nombre) {
            _nombre = nombre;
        };

        this.getNombre = function () {
            return _nombre;
        };

        this.anyadirCliente = function (cliente) {
            _clientes.push(cliente);
        };

        this.getClientes = function () {
            return _clientes;
        };

        this.anyadirProducto = function (producto) {
            _productos.push(producto);
        };

        this.getProductos = function () {
            return _productos;
        }
    }

    toString() {
        let clientes = "";
        let productos = "";
        let array_clientes = this.getClientes();
        let array_productos = this.getProductos();

        for (let i = 0; i < array_clientes.length; i++) {
            clientes += "<br>-> " + array_clientes[i];
        }

        for (let i = 0; i < array_productos.length; i++) {
            productos += "<br>-> " + array_productos[i];
        }

        return "Nombre VideoClub: " + this.getNombre() + "<br> Productos: " + productos + "<br> Clientes: " + clientes
            ;
    }
}

// let nuevo_videoclub = new Videoclub('PELAYOS SL');
// nuevo_videoclub.anyadirCliente("Pelallito");
// nuevo_videoclub.anyadirCliente("Juanito");
// nuevo_videoclub.anyadirProducto("Pistola");
// nuevo_videoclub.anyadirProducto("armario");
// document.write(nuevo_videoclub.toString());