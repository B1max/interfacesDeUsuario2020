'use strict';
let botonesMun = false;
const itemsMenuMun = ["<div id='uNUEVO-menu' class='uNUEVO-menu'>MENU</div>"];
const Mun_IDs = ["MunbtnMisSolicitudes","MunbtnUsuarios","MunbtnSalir"];
let BOTONES_Mun=[
    "<div id='MunbtnMisSolicitudes' class='MunbtnMisSolicitudes'>Mis Solicitudes</div>",
    "<div id='MunbtnUsuarios' class='MunbtnUsuarios'>Usuarios</div>",
    "<div id='MunbtnSalir' class='MunbtnSalir'>Salir</div>"];




async function MenuUN_cargar(){
    const inicial = document.getElementById("uNUEVA-RECTANGULO-BTN-ACEPTAR").parentNode;
    itemsMenuMun.forEach(function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    });

    document.getElementById("uNUEVO-menu").addEventListener("click",MenuUN_mostrar_ocultar);
}



async function MenuUN_mostrar_ocultar(){
    if(botonesMun){
        borrarBotonesMun();
        botonesMun=false;
    }else{
        dibujarBotonesMun();
        botonesMun=true;
    }
}




async function dibujarBotonesMun(){
    const inicial = document.getElementById("uNUEVO-menu");
    BOTONES_Mun.forEach(async function(item){
        inicial.insertAdjacentHTML("beforeEnd",item);
    });
    document.getElementById("MunbtnMisSolicitudes").addEventListener("click",
    async function(){
        await MenuUN_mostrar_ocultar();
        Umodificar_salir();
        USUARIOS_salir();
        await MS_cargar();
    });

    document.getElementById("MunbtnUsuarios").addEventListener("click",async function(){
        await MenuUN_mostrar_ocultar();
        Umodificar_salir();
    });
    document.getElementById("MunbtnSalir").addEventListener("click",async function(){
        await MenuUN_salir();
        await UsuarioN_salir();
        await MenuUsuarios_salir();
        await INDEX_CARGAR();
        await LOGIN_cargar();
    });
}




async function borrarBotonesMun(){
    botones = false;
    UTIL_BORRAR_HTML_pID(Mun_IDs);
}




function MenuUN_salir(){
    UTIL_BORRAR_HTML_pID(["uNUEVO-menu"]);
    UTIL_BORRAR_HTML_pID(Mun_IDs);
}

