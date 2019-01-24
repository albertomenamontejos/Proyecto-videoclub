'use strict';

class Juego extends Producto {

    constructor(nombre, genero, plataforma,disponibilidad=true,fecha_alquilado="",fecha_devolucion="") {
        super(nombre, genero);
        let _plataforma = plataforma;
        this.setPrecio(3);
        this.setTipo("Juego");
        this.setDisponibilidad(disponibilidad);
        this.setFecha_alquilado(fecha_alquilado);
        this.setFecha_devolucion(fecha_devolucion);
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

    getJSON() {
        let jsonPadre = super.getJSON();
        jsonPadre._plataforma = this.getPlataforma();
        return jsonPadre;
    }

    static getOBJ(json) {
        return new Juego(json._nombre, json._genero, json._plataforma,json._disponibilidad,json._fecha_alquilado,json._fecha_devolucion);
    };

}

// let juego1 = new Juego("mario", "logica", "Steam");
// console.log(juego1.toString());

