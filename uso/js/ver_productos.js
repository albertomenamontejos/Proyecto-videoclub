'use strict';
window.onload=function(){
  imprimirTitulo();
  mostrarProductos();

};

function mostrarProductos() {
  let vid_seleccionado = localStorage.getItem("seleccionado");
  let pos = document.querySelector("#seccion");
  let ob = buscarVideoclub(vid_seleccionado);
  let prod = ob.getProductos();
  for (let z = 0; z < prod.length; z++) {
    let producto = Producto.getOBJ(prod[z]);
    let div = document.createElement("div");
    div.setAttribute("class","m-3 bg-dark text-white p-4 rounded border border-info ");
    div.innerHTML = producto.toString();
    //TODO: CSS Caja-ver-productos(border,img??)
   pos.appendChild(div);
  }
}