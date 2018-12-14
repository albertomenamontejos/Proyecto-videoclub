'use strict';
class Cd extends Producto{
    constructor(nombre,genero,duracion){
        super(nombre,genero);
        let _duracion=duracion;
        this.setPrecio(1);
        this.setDuracion=function (duracion){
            _duracion=duracion;
        };

        this.getDuracion=function(){
            return _duracion;
        };
    }

    toString(){
        return super.toString() + " Duración: " + this.getDuracion();
    };

}

// let cd=new Cd("Musica","Rock",160)
// console.log(cd.toString());