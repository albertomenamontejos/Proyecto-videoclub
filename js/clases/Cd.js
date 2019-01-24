'use strict';

class Cd extends Producto {
    constructor(nombre, genero, duracion,disponibilidad=true,fecha_alquilado="",fecha_devolucion="") {
        super(nombre, genero);
        let _duracion = duracion;
        this.setPrecio(1);
        this.setTipo("Cd");
        this.setFecha_alquilado(fecha_alquilado);
        this.setFecha_devolucion(fecha_devolucion);
        this.setDisponibilidad(disponibilidad);
        this.setDuracion = function (duracion) {
            _duracion = duracion;
        };

        this.getDuracion = function () {
            return _duracion;
        };
    }

    toString() {
        return super.toString() + " Duración: " + this.getDuracion();
    };


    getJSON() {
        let aux = super.getJSON();
        aux._duracion = this.getDuracion();
        return aux;
    }

    static getOBJ(json) {
        return new Cd(json._nombre, json._genero, json._duracion,json._disponibilidad,json._fecha_alquilado,json._fecha_devolucion);
    };

}

// let cd=new Cd("Musica","Rock",160)
// console.log(cd.toString());