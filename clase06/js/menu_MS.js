'use strict';
let botones = false;


let MENU_IDs =[
    "btnMenu2a",
    "btnMenu3a",
    "btnMenu4a",
    "btnMenu5a"
];


const itemsMenu = [
"<div id='btnMenu1a' class='botonMenu'></div>"];


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


function CARGAR_menu_MisSolocitudes(){
    console.log("dibujando Menu");
    const inicial = document.getElementById("rectangulo-superior-flotante");
    itemsMenu.forEach(function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    })
    EVENTOS_menu_misSOlicitudes();
}




function EVENTOS_menu_misSOlicitudes(){
    document.getElementById("btnMenu1a").addEventListener("click",MENU_misSolicitudes_mostrarOcultar);
}




function EVENTOS_menu_misSOlicitudes_botonera(){
    document.getElementById("btnMenu2a").addEventListener("click",async function(){
        MENU_misSolicitudes_borrarBotones();
        botones=false;
        await CARGAR_PANTALLA_NUEVO();
        await dibujarMenuMS();
    });
    document.getElementById("btnMenu3a").addEventListener("click",function(){
        if(DB_MS_seleccionados.length<1){
            const alert = new alerta();
            MENU_misSolicitudes_borrarBotones();
            MS_salir();
            SALIR_menu_misSolicitudes();
            SALIR_menu_misSolicitudes();
            alert.mostrar("Debe seleccionar al menos un item,\nsi selecciona mas de uno, solo se tomara el primero");
            setTimeout(function(){
                MS_cargar();
            },3000);
        }else{
            MENU_misSolicitudes_borrarBotones();
            botones=false;
            MS_modificar_cargar()
        }
    });
    document.getElementById("btnMenu4a").addEventListener("click",function(){
        if(DB_MS_seleccionados.length<1){
            const alert = new alerta();
            MENU_misSolicitudes_borrarBotones();
            MS_salir();
            SALIR_menu_misSolicitudes();
            SALIR_menu_misSolicitudes();
            alert.mostrar("Debe seleccionar al menos un item");
            setTimeout(function(){
                MS_cargar();
            },3000);
        }else{
            MENU_misSolicitudes_borrarBotones();
            botones=false;
            DB_borrar_seleccionados();
        }
    });
    document.getElementById("btnMenu5a").addEventListener("click",async function(){
        MS_salir();
        SALIR_menu_misSolicitudes();
        await INDEX_CARGAR();
        INDEX_ocultar_bienvenida();
        await CARGAR_login();
    });
}




async function MENU_misSolicitudes_mostrarOcultar(){
    console.log("menu");
    if(botones){
        MENU_misSolicitudes_borrarBotones();
        botones=false;
    }else{
        MENU_misSolicitudes_mostrarBotones();
        botones=true;
    }
}




async function MENU_misSolicitudes_mostrarBotones(){

    const inicial = document.getElementById("ultimo").parentNode;

    console.log("dibujando Botones");
    BOTONES_mis_solicitudes.forEach(async function(item){
        console.log("agregando items de menu");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
    
}




async function MENU_misSolicitudes_borrarBotones(){
    //borra excepto el boton "MENU"
    botones = false;
    console.log("borrando Botones");
    UTIL_BORRAR_HTML_pID(MENU_IDs);
}




function SALIR_menu_misSolicitudes(){
    MENU_misSolicitudes_borrarBotones();
    UTIL_BORRAR_HTML_pID(["btnMenu1a"]);
}
