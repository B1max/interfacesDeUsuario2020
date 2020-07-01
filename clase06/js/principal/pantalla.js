class principal extends pantalla{
  static menuAsociado = menu_principal;
  static ids_general =  ["DIV_PPimgBienvenida"];
  static html_general = ["<div id='DIV_PPimgBienvenida' class ='DIV_PPimgBienvenida'></div>"];
}


async function PP_cargar(){
  pantalla_cargar(function(){},principal);
  // await MenuP_cargar();
}



function PP_salir(){
  pantalla_salir(principal);
  // MenuP_salir();
}


/*
function PP_mostrarBienvenida(){
  document.getElementById("contenedor").insertAdjacentHTML("beforeend","<div id='DIV_PPimgBienvenida' class ='DIV_PPimgBienvenida'></div>");
}
*/


function PP_borrarBienvenida(){
  pantalla_salir(principal);
}