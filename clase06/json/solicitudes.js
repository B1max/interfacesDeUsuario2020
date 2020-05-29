const fs = require("fs");
const util = require("util");
const { promises } = require('fs');
// src="solicitudesJSON.js">

//crud de json crear actualizar eliminar y modificar

// var contenido = document.querySelector('#contenido');
/*
function traer() {
  fetch('./tabla.json')
    .then(res => res.json() )
    .then( datos => { 
      // console.log(datos)
      tabla(datos)})
}

function tabla(datos){
  console.log(datos)
  // contenido.innerHTML= ''
  for(let valor of datos){
    console.log(valor)
    // console.log(valor.Solicitudes[FechaSolicitud])
    // contenido.innerHTML= ''
  }
}

function eliminarPorId(id){
  
}

function crearJSON(){
  
}*/
// const tab = './tabla.json';
// fetch(tab)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
// traer();

const myJson = fs.readFile('.tabla.json')
myJson
console.log(myJson);
