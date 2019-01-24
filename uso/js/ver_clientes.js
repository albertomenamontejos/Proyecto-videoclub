'use strict';
window.onload=function(){
    imprimirTitulo();
    mostrarClientes();
};
function mostrarClientes() {
    let vid_seleccionado = localStorage.getItem("seleccionado");
    let pos = document.querySelector("#seccion");
    let ob = buscarVideoclub(vid_seleccionado);
    let clientes = ob.getClientes();
    for (let z = 0; z < clientes.length; z++) {
        let cli = Cliente.getOBJ(clientes[z]);
        console.log(cli.getNombre());
        let div = document.createElement("a");

        div.setAttribute("class","bg-primary text-white m-3 p-2 rounded border border-dark w-100");
        div.setAttribute("data-toggle","collapse");
        div.setAttribute("href","#collapseExample"+z);
        div.setAttribute("role","button");
        div.setAttribute("aria-expanded","false");
        div.setAttribute("aria-controls","collapseExample");
        div.innerHTML = cli.getNombre();
        let div1 = document.createElement("div");
        div1.setAttribute("class","collapse w-100");
        div1.setAttribute("id","collapseExample"+z);
        let div2 = document.createElement("div");
        div2.setAttribute("class","card card-body w-100");
        div2.innerHTML = cli.toString();
        pos.appendChild(div);
        div1.appendChild(div2);
        pos.appendChild(div1);
    }
}
