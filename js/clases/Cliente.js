'use strict';

class Cliente {

    constructor(nombre, productos_alquilados = [], productos_devueltos = []) {
        let _nombre = nombre;
        let _productos_alquilados = productos_alquilados;
        let _productos_devueltos = productos_devueltos;

        this.setNombre = function (nombre) {
            _nombre = nombre;
        };

        this.getNombre = function () {
            return _nombre;
        };


        this.anyadir_producto = function (producto) {
            let f = new Date();
            let dia = f.getDate();
            let mes = f.getMonth() + 1;
            let anyo = f.getFullYear();
            if (dia < 10) dia = "0" + dia;
            if (mes < 10) mes = "0" + mes;
            let fecha_alquilado = dia + "-" + mes + "-" + anyo;
            producto.setFecha_alquilado(fecha_alquilado);
            producto.setDisponibilidad(false);
            _productos_alquilados.push(producto.getJSON());
        };

        this.devolverProducto = function (producto, cliente) {
            let prod;
            for (let i = 0; i < _productos_alquilados.length; i++) {
                if (_productos_alquilados[i]._nombre === producto.getNombre()) {
                    let a = _productos_alquilados.splice(i, 1);
                    prod =  Producto.getOBJ(a[0]);
                    prod.setDisponibilidad(true);
                    cliente.setProductos_devueltos(prod);
                }
            }
            return prod;
        };

        this.getProductos_devueltos = function () {
            return _productos_devueltos;
        };

        this.setProductos_devueltos = function (obj) {
            let f = new Date();
            let dia = f.getDate();
            let mes = f.getMonth() + 1;
            let anyo = f.getFullYear();
            if (dia < 10) dia = "0" + dia;
            if (mes < 10) mes = "0" + mes;
            let fecha_devolucion = dia + "-" + mes + "-" + anyo;
            obj.setFecha_devolucion(fecha_devolucion);
            _productos_devueltos.push(obj.getJSON());
        };

        this.getProductos_alquilados = function () {
            return _productos_alquilados;
        };
    }

    getJSON() {
        return {
            "_nombre": this.getNombre(),
            "_productos_alquilados": this.getProductos_alquilados(),
            "_productos_devueltos": this.getProductos_devueltos()

        };
    }

    static getOBJ(json) {
        return new Cliente(json._nombre, json._productos_alquilados, json._productos_devueltos);
    }

    toString() {
        let productos = "";
        let array_productos = this.getProductos_alquilados();
        for (let i = 0; i < array_productos.length; i++) {
            productos += "->" + Producto.getOBJ(array_productos[i]).getNombre() + " <br>";
        }
        return "Nombre cliente: " + this.getNombre() + " <br> Productos alquilados: <br>" + productos;
    }
}
