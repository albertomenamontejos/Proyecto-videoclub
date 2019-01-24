'use strict';

//Añade un producto a un videoclub en concreto
function anyadirProducto(nombre,genero,duracion,idioma,plataforma) {
    let tipo_prod = document.querySelector("#tipo-p").value;
    let producto;
    if (tipo_prod === "Cd") {
        producto = new Cd(nombre, genero, duracion);
    } else if (tipo_prod === "Pelicula") {
        producto = new Pelicula(nombre, genero, idioma, duracion);
    } else if (tipo_prod === "Juego") {
        producto = new Juego(nombre, genero, plataforma);
    }
    let vid_seleccionado = localStorage.getItem("seleccionado");
    let videoclub = buscarVideoclub(vid_seleccionado);
    videoclub.addProduct(producto);
    guardarCambios(videoclub);
}

//Añade un cliente a un videoClub en concreto
function anyadirCliente(nombre) {
    let vid_seleccionado = localStorage.getItem("seleccionado");
    let videoclub = buscarVideoclub(vid_seleccionado);
        let cliente = new Cliente(nombre);
        videoclub.anyadirCliente(cliente);
        guardarCambios(videoclub);
}

//CREAR VIDEOCLUB (Ya se han comprobado los datos), se almacena en el localStorage
function crearVideoclub(nombre) {
    let nuevo_videoclub = new Videoclub(nombre);
    let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
    if (jsonClubs) {
        jsonClubs.array.push(nuevo_videoclub.getJSON());
        localStorage.setItem("jsonClubs", JSON.stringify(jsonClubs));
    } else {
        let jsonClubs = {};
        jsonClubs.array = [];
        jsonClubs.array.push(nuevo_videoclub.getJSON());
        localStorage.setItem("jsonClubs", JSON.stringify(jsonClubs));
    }
    //Almacenando en el localStorage
    mostrarVideoClubs();
}

// Devuelve OBJETO videoclub según el nombre pasado por parámetro
function buscarVideoclub(nom_videoclub) {
    let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
    let encontrado = false;
    let videoclub = {};
    for (let i = 0; i < jsonClubs.array.length; i++) {
        if (jsonClubs.array[i]._nombre === nom_videoclub) {
            encontrado = true;
            videoclub = jsonClubs.array[i];
        }
    }
    if (encontrado) {
        return Videoclub.getOBJ(videoclub);
    } else {
        return false;
    }
}

function buscarCliente(nom_cliente) {
    let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
    let nom_videoclub = localStorage.getItem("seleccionado");
    let encontrado = false;
    let cliente={};
    for (let i = 0; i < jsonClubs.array.length; i++) {
        if (jsonClubs.array[i]._nombre === nom_videoclub) {
            for (let j = 0; j < jsonClubs.array[i]._clientes.length; j++) {
                if (jsonClubs.array[i]._clientes[j]._nombre === nom_cliente) {
                    encontrado = true;
                    cliente = jsonClubs.array[i]._clientes[j];
                }
            }
        }
    }
    if (encontrado) {
        return Cliente.getOBJ(cliente);
    } else {
        return false;
    }
}

//Mostrar videoclub PARTE USO
function mostrarVideoClubsUSO() {
    //POPOVER INFO VIDEOCLUB, FUENTE W3C BOOTSTRAP
    $(document).ready(function () {
        $('[data-toggle="popover"]').popover();
    });
    // if (document.querySelector("#cont-videoClubs")) {
    //     document.querySelector("#cont-videoClubs").remove();
    // }
    if (localStorage.getItem("jsonClubs")) {
        let cont = document.createElement("div");
        cont.setAttribute("id", "cont-videoClubs");
        let posicion = document.querySelector("#lista-videoclubs");
        let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
        for (let i = 0; i < jsonClubs.array.length; i++) {
            //MOSTRAR PRODUCTO PAGINA DE INICIO DE GESTION
            //ACTIVAR MODAL, VENTANA EMERGENTE
            let div = document.createElement("div");
            div.setAttribute("data-target", ".bd-example-modal-lg");
            div.setAttribute("title", jsonClubs.array[i]._nombre);
            div.setAttribute("data-toggle", "popover");
            div.setAttribute("data-trigger", "hover");
            let contenido = "Productos totales: " + jsonClubs.array[i]._productos.length +
                "<br>Clientes totales: " + jsonClubs.array[i]._clientes.length;
            div.setAttribute("data-content", contenido);
            div.setAttribute("data-html", "true"); //Salto de linea en el popover
            div.setAttribute("class", "videoclub");
            let img = document.createElement("img");
            img.setAttribute("src", "../img/videoclub.png");
            let texto = document.createTextNode(jsonClubs.array[i]._nombre);
            div.appendChild(img);
            div.append(texto);
            div.addEventListener("click", function () {
                div.setAttribute("data-toggle", "modal");
            });
            div.addEventListener("click", function () {
                let seleccionado = localStorage.setItem("seleccionado", jsonClubs.array[i]._nombre);
                localStorage.setItem("opcion", "clientes");
                open("videoclub.html", "_self");
                document.body.appendChild(document.createTextNode(seleccionado));
            });
            cont.appendChild(div);
        }
        posicion.appendChild(cont);
    }
}

//Mostrar videoclub PARTE GESTION
function mostrarVideoClubs() {
    //POPOVER INFO VIDEOCLUB, FUENTE W3C BOOTSTRAP
    $(document).ready(function () {
        $('[data-toggle="popover"]').popover();
    });
    if (document.querySelector("#cont-videoClubs")) {
        document.querySelector("#cont-videoClubs").remove();
    }
    if (localStorage.getItem("jsonClubs")) {
        let cont = document.createElement("div");
        cont.setAttribute("id", "cont-videoClubs");
        let posicion = document.querySelector("#lista-videoclubs");
        let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
        for (let i = 0; i < jsonClubs.array.length; i++) {
            //MOSTRAR PRODUCTO PAGINA DE INICIO DE GESTION
            //ACTIVAR MODAL, VENTANA EMERGENTE
            let div = document.createElement("div");
            div.setAttribute("data-target", ".bd-example-modal-lg");
            div.setAttribute("title", jsonClubs.array[i]._nombre);
            div.setAttribute("data-toggle", "popover");
            div.setAttribute("data-trigger", "hover");
            let contenido = "Productos totales: " + jsonClubs.array[i]._productos.length +
                "<br>Clientes totales: " + jsonClubs.array[i]._clientes.length;
            div.setAttribute("data-content", contenido);
            div.setAttribute("data-html", "true"); //Salto de linea en el popover
            div.setAttribute("class", "videoclub");
            let img = document.createElement("img");
            img.setAttribute("src", "img/videoclub.png");
            let texto = document.createTextNode(jsonClubs.array[i]._nombre);
            div.appendChild(img);
            div.append(texto);
            div.addEventListener("click", function () {
                div.setAttribute("data-toggle", "modal");
            });
            div.addEventListener("click", function () {
                //Cuando se hace click en el videoclub se guarda como "videoclub-seleccionado" en el
                //localStorage para poder trabajar con el (añadir clientes o productos)
                localStorage.setItem("seleccionado", jsonClubs.array[i]._nombre);
                if (document.querySelector("#tit-videoclub") !== null) {
                    document.querySelector("#tit-videoclub").remove();
                }
                let head = document.querySelector("#titulo-modal");
                let p = document.createElement("p");
                p.setAttribute("id", "tit-videoclub");
                let texto = document.createTextNode(localStorage.getItem("seleccionado"));
                p.appendChild(texto);
                head.appendChild(p);
            });
            cont.appendChild(div);
        }
        posicion.appendChild(cont);
    }
}

//Imprime el titulo del videoclub seleccionado (PARA PARTE GESTION Y USO)
function imprimirTitulo() {
    let seleccionado = localStorage.getItem("seleccionado");
    let texto = document.createTextNode(seleccionado);
    let div = document.querySelector("#contenedor");
    let p = document.createElement("p");
    p.appendChild(texto);
    p.setAttribute("class", "tit-ver-productos");
    div.appendChild(p);
}

//Crea Select de todos los clientes de un videoclub específico
function selectClientes() {
    //TODO: CSS select clientes
    let pos = document.getElementsByClassName("sel-clientes");
    for (let i = 0; i < pos.length; i++) {
        let select = document.createElement("select");
        select.setAttribute("id", "clientes" + i);
        select.setAttribute("class", "ml-2 form form-control-sm ");
        let seleccionado = localStorage.getItem("seleccionado");
        let videoclub = buscarVideoclub(seleccionado);
        let clientes = videoclub.getClientes();
        for (let i = 0; i < clientes.length; i++) {
            let option = document.createElement("option");
            let cliente = Cliente.getOBJ(clientes[i]);
            option.setAttribute("value", cliente.getNombre());
            let txt = document.createTextNode(cliente.getNombre());
            option.appendChild(txt);
            select.add(option);
        }

        pos[i].appendChild(select);
    }
}


function guardarCambios(videoclub) {
    let jsonClubs = JSON.parse(localStorage.getItem("jsonClubs"));
    for (let i = 0; i < jsonClubs.array.length; i++) {
        if (jsonClubs.array[i]._nombre === videoclub.getNombre()) {
            jsonClubs.array.splice(i, 1);
        }
    }
    jsonClubs.array.push(videoclub.getJSON());
    localStorage.setItem("jsonClubs", JSON.stringify(jsonClubs));
}