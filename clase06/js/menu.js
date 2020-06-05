'use strict';
let botones = false;
const itemsMenu = [
"<div id='btnMenu1a' class='botonMenu'></div>"];
// let itemsBotones = [
let BOTONES_mis_solicitudes=[
"<div id='btnMenu2a' class='botonNuevo'>NUEVO</div>",
"<div id='btnMenu3a' class='botonModificar'>MODIFICAR</div>",
"<div id='btnMenu4a' class='botonEliminar'>ELIMINAR</div>",
"<div id='btnMenu5a' class='botonSalir'>SALIR</div>"];

let BOTONES_solicitud = [
    "<div id='btnMenu2a' class='botonNuevo'>NUEVO</div>",
    "<div id='btnMenu3a' class='botonModificar'>MODIFICAR</div>",
    "<div id='btnMenu4a' class='botonEliminar'>ELIMINAR</div>",
    "<div id='btnMenu5a' class='botonSalir'>SALIR</div>"];

async function dibujarMenu(){
    console.log("dibujando Menu");
    const inicial = document.getElementById("ultimo").parentNode;
    itemsMenu.forEach(await function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    })
    document.getElementById("btnMenu1a").addEventListener("click",menu);
    // document.getElementById("btnMenu1a").addEventListener("mouseover",menu);
}
async function menu(){
    console.log("menu");
    if(botones){
        borrarBotones();
        botones=false;
    }else{
        dibujarBotones();
        botones=true;
    }
}

async function dibujarBotones(){

    const inicial = document.getElementById("ultimo").parentNode;

    console.log("dibujando Botones");
    BOTONES_mis_solicitudes.forEach(async function(item){
        console.log("agregando items de menu");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
    document.getElementById("btnMenu2a").addEventListener("click",CARGAR_PANTALLA_NUEVO);
    document.getElementById("btnMenu3a").addEventListener("click",test);
    document.getElementById("btnMenu4a").addEventListener("click",DB_borrar_seleccionados)
    document.getElementById("btnMenu5a").addEventListener("click",test);
}
function test(){
    console.log("presionado")
}
async function borrarBotones(){
    botones = false;
    console.log("borrando Botones");
    removerAgregados("btnMenu2a",BOTONES_mis_solicitudes);
}