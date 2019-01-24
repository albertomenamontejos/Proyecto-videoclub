'use strict';

class Producto {
    constructor(nombre, genero) {
        let _nombre = nombre;
        let _genero = genero;
        let _precio;
        let _tipo;
        let _fecha_alquilado;
        let _fecha_devolucion;
        let _disponibilidad = true;

        this.setDisponibilidad = function (disponibilidad){
            _disponibilidad=disponibilidad;
        };

        this.getDisponibilidad = function (){
           return  _disponibilidad;
        };

        this.setFecha_alquilado = function (fecha) {
            _fecha_alquilado = fecha;
        };

        this.getFecha_alquilado = function () {
            return _fecha_alquilado;
        };

        this.setFecha_devolucion = function (fecha) {
            _fecha_devolucion = fecha;
        };

        this.getFecha_devolucion = function () {
            return _fecha_devolucion;
        };

        this.setTipo = function (tipo) {
            _tipo = tipo;
        };

        this.getTipo = function () {
            return _tipo;
        };

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
        return "</br>Producto: " + this.getNombre() + "</br>Tipo: " + this.getTipo() + "</br>Precio: " + this.getPrecio()
            + " </br>Género: " + this.getGenero() + " </br> ";
    }

    getJSON() {
        return {
            "_nombre": this.getNombre(),
            "_precio": this.getPrecio(),
            "_genero": this.getGenero(),
            "_fecha_alquilado": this.getFecha_alquilado(),
            "_fecha_devolucion": this.getFecha_devolucion(),
            "_tipo": this.getTipo(),
            "_disponibilidad": this.getDisponibilidad()
        };
    }

    static getOBJ(json) {
        if (json._tipo === "Cd") return Cd.getOBJ(json);
        else if (json._tipo === "Pelicula") return Pelicula.getOBJ(json);
        else if (json._tipo === "Juego") return Juego.getOBJ(json);
        else return new Producto(json._nombre, json._genero);
    }
}

