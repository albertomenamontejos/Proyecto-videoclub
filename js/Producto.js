'use strict';

class Producto {
    constructor(nombre,  genero) {
        let _nombre = nombre;
        let _precio ;
        let _genero = genero;

        this.setNombre = function (nombre) {
            _nombre = nombre;
        };

        this.getNombre = function () {
            return _nombre;
        };

        this.setPrecio = function (precio) {
            _precio = precio;
        };

        this.getPrecio = function () {
            return _precio;
        };

        this.setGenero = function (genero) {
            _genero = genero;
        };

        this.getGenero = function () {
            return _genero;
        };
    }
    toString() {
        return "Nombre producto: " + this.getNombre() + " Precio: " + this.getPrecio()
            + " Genero: " + this.getGenero();
    }
}

