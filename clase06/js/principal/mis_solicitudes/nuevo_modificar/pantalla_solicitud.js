'use strict';
class menu_s extends menu{
    static estado = false;
    // static pos_inicial = "NUEVA-RECTANGULO-BTN-ACEPTAR";
    static pos_inicial = "NUEVA-RECTANGULO-FONDO";
    // static ultimo = "contenedorDeSolicitudes";
    static ultimo = "MSbtnMenu";
    static id_menu =["MSbtnMenu"];
    static html_menu =["<div id='MSbtnMenu' class='MSbtnMenu'>MENU</div>"];
    static ids_botones =["MSbtnMisSolicitudes","MSbtnUsuarios","MSbtnSalir"];
    static html_botones=["<div id='MSbtnMisSolicitudes' class='MSbtnMisSolicitudes'>Mis Solicitudes</div>",
    "<div id='MSbtnUsuarios' class='MSbtnUsuarios'>Usuarios</div>",
    "<div id='MSbtnSalir' class='MSbtnSalir'>SALIR</div>"];
}

async function Menu_s_cargar(){
    menu_cargar(Menu_s_eventos,menu_s);
}

function Menu_s_eventos(){
    document.getElementById("MSbtnMenu").addEventListener("click",function(){
        menu_mostrar_ocultar(menu_s);
        if(menu_s.estado){
            Menu_s_eventos_botones();
        }
    });
}




async function Menu_s_eventos_botones(){

    //mis solicitides
    document.getElementById("MSbtnMisSolicitudes").addEventListener("click",
    async function(){
        menu_mostrar_ocultar(menu_s);
        await BORRAR_PANTALLA_NUEVO();
    });
    //usuarios
    document.getElementById("MSbtnUsuarios").addEventListener("click",async function(){
        menu_mostrar_ocultar(menu_s);
        await BORRAR_PANTALLA_NUEVO();
        menu_salir(menu_MS);
        MS_salir();
        //carga de usuarios
        await USUARIOS_cargar();

        // Umodificar_salir();
    });
    //salir
    document.getElementById("MSbtnSalir").addEventListener("click",async function(){
        menu_salir(menu_s);
        // SALIR_menu_misSolicitudes();
        menu_salir(menu_MS);
        MSnuevo_salir();
        MS_salir();
        await INDEX_CARGAR();
        INDEX_ocultar_bienvenida();
        await CARGAR_login();
    });
}




/*
function menuMS_salir(){
    UTIL_BORRAR_HTML_pID(botonesMS_IDs);
}
*/

