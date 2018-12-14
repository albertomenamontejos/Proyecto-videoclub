'use strict';

class Cliente{

    constructor(nombre){
        let _nombre=nombre;
        let _productos_alquilados=new Array();

        this.setNombre=function (nombre){
            _nombre=nombre;
        };

        this.getNombre=function (){
            return _nombre;
        };

        this.anyadir_producto=function (producto){
            _productos_alquilados.push(producto);
        };

        this.getProductos=function (){
            return _productos_alquilados;
        };
    }
    toString(){
        let productos="";
        let array_productos=this.getProductos();
        for(let i =0; i < array_productos.length;i++){
            productos+=   "->" + array_productos[i] + " <br>";
        }
        return "Nombre cliente: " + this.getNombre() + " <br> Productos: <br>"+productos ;
    }
}
//
// let cl=new Cliente("Juan");
// cl.anyadir_producto("Consolador");
// cl.anyadir_producto("Vibrador");
// document.write(cl.toString());
// console.log(cl.toString());