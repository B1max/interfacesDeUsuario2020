'use strict';
let botonesMS = false;
const itemsMenuMS = ["<div id='MSbtnMenu' class='MSbtnMenu'>MENU</div>"];
let BOTONES_mis_solicitudesMS=[
    "<div id='MSbtnMisSolicitudes' class='MSbtnMisSolicitudes'>Mis Solicitudes</div>",
    "<div id='MSbtnSalir' class='MSbtnSalir'>SALIR</div>"];

let BOTONES_solicitudMS = [
    "<div id='MSbtnMisSolicitudes' class='MSbtnMisSolicitudes'>Mis Solicitudes</div>",
    "<div id='MSbtnSalir' class='MSbtnSalir'>SALIR</div>"];

async function dibujarMenuMS(){
    console.log("dibujando Menu");
    const inicial = document.getElementById("NUEVA-RECTANGULO-BTN-ACEPTAR").parentNode;
    itemsMenuMS.forEach( function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    });
    document.getElementById("MSbtnMenu").addEventListener("click",menuMS);
}

async function menuMS(){
    console.log("menu");
    if(botonesMS){
        borrarBotonesMS();
        botonesMS=false;
    }else{
        dibujarBotonesMS();
        botonesMS=true;
    }
}

async function dibujarBotonesMS(){
    const inicial = document.getElementById("MSbtnMenu");
    console.log("dibujando Botones");
    BOTONES_solicitudMS.forEach(async function(item){
        console.log("agregando items de menu");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
    document.getElementById("MSbtnMisSolicitudes").addEventListener("click",
    async function(){
        await borrarBotonesMS();
        await BORRAR_PANTALLA_NUEVO();
    });
    document.getElementById("MSbtnSalir").addEventListener("click",async function(){
        await borrarBotonesMS();
        await BORRAR_PANTALLA_NUEVO();
        CARGAR_INDEX();
    });
}


async function borrarBotonesMS(){
    botones = false;
    console.log("borrando Botones");
    try {
        document.getElementById("MSbtnMisSolicitudes").remove();
        document.getElementById("MSbtnSalir").remove();  
    } catch (error) {
        console.log("no se pudo eliminar el boton");
    }
}