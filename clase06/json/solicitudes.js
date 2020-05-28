// src="solicitudesJSON.js">

//crud de json crear actualizar eliminar y modificar

var contenido = document.querySelector('#contenido');
 
function traer() {
  fetch('tabla.json')
    .then(res => res.json() )
    .then( datos => { 
      // console.log(datos)
      tabla(datos)})
}

function tabla(datos){
  console.log(datos)
  contenido.innerHTML= ''
  for(let valor of datos){
    // console.log(valor.Solicitudes[FechaSolicitud])
    contenido.innerHTML= ''
  }
}

function eliminarPorId(id){
  
}

function crearJSON(){
  
}