'use strict';

class Videoclub {

    constructor(nombre, clientes = [], productos = []) {

        let _nombre = nombre;
        let _clientes = clientes;
        let _productos = productos;


        this.setNombre = function (nombre) {
            _nombre = nombre;
        };

        this.getNombre = function () {
            return _nombre;
        };

        this.setClientes = function (clientes) {
            _clientes = clientes;
        };

        this.anyadirCliente = function (cliente) {
            _clientes.push(cliente.getJSON());
        };

        this.getClientes = function () {
            return _clientes;
        };

        this.setProductos = function (productos) {
            _productos = productos;
        };





        this.addProduct = function (producto) {
            if (producto instanceof Cd || producto instanceof Juego || producto instanceof Pelicula) {
                _productos.push(producto.getJSON());
                return true;
            } else {
                return false;
            }
        };


        this.getProductos = function () {
            return _productos;
        };

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

    getJSON() {
        return {
            "_nombre": this.getNombre(),
            "_clientes": this.getClientes(),
            "_productos": this.getProductos(),

        };
    }

    //SE USA EN buscarVideoClub() método que devuelve un objeto videoclub
    static getOBJ(json) {
        return new Videoclub(json._nombre, json._clientes, json._productos);
    }

}

// let nuevo_videoclub = new Videoclub('PELAYOS SL');
// nuevo_videoclub.anyadirCliente("Pelallito");
// nuevo_videoclub.anyadirCliente("Juanito");
// nuevo_videoclub.anyadirProducto("Pistola");
// nuevo_videoclub.anyadirProducto("armario");
// document.write(nuevo_videoclub.toString());