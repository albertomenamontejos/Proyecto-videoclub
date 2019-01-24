'use strict';
class Pelicula extends Producto {
    constructor(nombre, genero, idioma, duracion,disponibilidad=true,fecha_alquilado="",fecha_devolucion="") {
        super(nombre, genero);
        let _idioma = idioma;
        let _duracion = duracion;
        this.setPrecio(2);
        this.setDisponibilidad(disponibilidad);
        this.setTipo("Pelicula");
        this.setFecha_alquilado(fecha_alquilado);
        this.setFecha_devolucion(fecha_devolucion);

        this.setIdioma = function (idioma) {
            _idioma = idioma;
        };

        this.getIdioma = function () {
            return _idioma;
        };

        this.setDuracion = function (duracion) {
            _duracion = duracion;
        };

        this.getDuracion = function () {
            return _duracion;
        }
    }

    toString() {
        return super.toString() + " Idioma: " + this.getIdioma() + "<br> Duracion: " + this.getDuracion();
    }

    getJSON() {
        let jsonPadre = super.getJSON();
        jsonPadre._idioma = this.getIdioma();
        jsonPadre._duracion = this.getDuracion();
        return jsonPadre;
    }

    static getOBJ(json) {
        return new Pelicula(json._nombre, json._genero, json._idioma, json._duracion,json._disponibilidad,json._fecha_alquilado,json._fecha_devolucion);
    };

}

// let pel=new Pelicula("4 fanatics","comedia","Español", 256);
// console.log(pel.toString());