'use strict';
class menu_MS extends menu{

    static pos_inicial = "rectangulo-superior-flotante";

    static ultimo = "contenedorDeSolicitudes";
    
    static id_menu = ["btnMenu1a"];
    
    static html_menu = [
        "<div id='btnMenu1a' class='botonMenu'></div>"];
        
    static ids_botones =[
            "btnMenu2a",
            "btnMenu3a",
            "btnMenu4a",
            "btnMenu5a"
        ];

    static html_botones=[
    "<div id='btnMenu2a' class='botonNuevo'>NUEVO</div>",
    "<div id='btnMenu3a' class='botonModificar'>MODIFICAR</div>",
    "<div id='btnMenu4a' class='botonEliminar'>ELIMINAR</div>",
    "<div id='btnMenu5a' class='botonSalir'>SALIR</div>"];
}
//--------------------------------------------------------------------------------------
    function Menu_ms_cargar(){
        console.log("dibujando Menu");
        menu_cargar(EVENTOS_menu_misSOlicitudes, menu_MS);
        // EVENTOS_menu_misSOlicitudes();
    }

    function EVENTOS_menu_misSOlicitudes(){
        document.getElementById("btnMenu1a").addEventListener("click",function(){
            menu_mostrar_ocultar(menu_MS);
            if(menu_MS.estado){
                EVENTOS_menu_misSOlicitudes_botonera();
            }
        });
    }




    function EVENTOS_menu_misSOlicitudes_botonera(){
        document.getElementById("btnMenu2a").addEventListener("click",async function(){
            menu_mostrar_ocultar(menu_MS);
            await CARGAR_PANTALLA_NUEVO();
            await Menu_s_cargar();
        });
        document.getElementById("btnMenu3a").addEventListener("click",async function(){
            if(DB_MS_seleccionados.length<1){
                const alert = new alerta();
                menu_mostrar_ocultar(menu_MS);
                MS_salir();
                menu_salir(menu_MS);
                alert.mostrar("Debe seleccionar al menos un item,\nsi selecciona mas de uno, solo se tomara el primero");
                setTimeout(function(){
                    MS_cargar();
                },3000);
            }else{
                menu_mostrar_ocultar(menu_MS);
                await MS_modificar_cargar();
                await Menu_s_cargar();
            }
        });
        document.getElementById("btnMenu4a").addEventListener("click",function(){
            if(DB_MS_seleccionados.length<1){
                const alert = new alerta();
                menu_mostrar_ocultar(menu_MS);
                MS_salir();
                menu_salir(menu_MS);
                alert.mostrar("Debe seleccionar al menos un item");
                setTimeout(function(){
                    MS_cargar();
                },3000);
            }else{
                menu_mostrar_ocultar(menu_MS);
                DB_borrar_seleccionados();
            }
        });
        document.getElementById("btnMenu5a").addEventListener("click",async function(){
            MS_salir();
            // SALIR_menu_misSolicitudes();
            menu_salir(menu_MS);

            await INDEX_CARGAR();
            INDEX_ocultar_bienvenida();
            await CARGAR_login();
        });
    }

