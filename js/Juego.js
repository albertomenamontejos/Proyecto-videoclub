'use strict';

class Juego extends Producto {

    constructor(nombre, genero, plataforma) {
        super(nombre, genero);
        let _plataforma = plataforma;
        this.setPrecio(3);
        this.setPlataforma = function (plataforma) {
            _plataforma = plataforma;
        };

        this.getPlataforma = function () {
            return _plataforma;
        };
    }

    toString() {
        return super.toString() + " Plataforma: " + this.getPlataforma();
    };
}

// let juego1 = new Juego("mario", "logica", "Steam");
// console.log(juego1.toString());

