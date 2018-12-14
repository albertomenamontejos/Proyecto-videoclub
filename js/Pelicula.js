class Pelicula extends Producto{
    constructor(nombre,genero,idioma,duracion){
        super(nombre,genero);
        let _idioma=idioma;
        let _duracion=duracion;
        this.setPrecio(2);

        this.setIdioma=function (idioma){
            _idioma=idioma;
        };

        this.getIdioma=function (){
            return _idioma;
        };

        this.setDuracion=function (duracion){
            _duracion=duracion;
        };

        this.getDuracion=function (){
            return _duracion=duracion;
        }
    }

    toString(){
        return super.toString()  + " Idioma: " + this.getIdioma() + " Duracion: " + this.getDuracion();
    }
}

// let pel=new Pelicula("4 fanatics","comedia","Español", 256);
// console.log(pel.toString());