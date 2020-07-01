class Menu_misSolicitudes extends Menu_usuarios{
    static eventoMenu = EVENTOS_menu_misSOlicitudes;
}

function Menu_ms_cargar(){
    menu_cargar(EVENTOS_menu_misSOlicitudes, Menu_usuarios);
}



function EVENTOS_menu_misSOlicitudes(menu){
    document.getElementById(menu.id_menu[0]).addEventListener("click",function(){
        menu_mostrar_ocultar(menu);
        if(menu.estado){
            EVENTOS_menu_misSOlicitudes_botonera(menu);
        }
    });
}




function EVENTOS_menu_misSOlicitudes_botonera(mEnu){
    //nuevo
    document.getElementById(mEnu.ids_botones[0]).addEventListener("click",async function(){
        menu_mostrar_ocultar(mEnu);
        //----------------------------------?
        await CARGAR_PANTALLA_NUEVO();

    });
    //modificar
    document.getElementById(mEnu.ids_botones[1]).addEventListener("click",async function(){
        if(DB_MS_seleccionados.length<1){
            const alert = new alerta();
            menu_mostrar_ocultar(mEnu);
        //----------------------------------?

            MS_salir();
            menu_salir(mEnu);
            alert.mostrar("Debe seleccionar al menos un item,\nsi selecciona mas de uno, solo se tomara el primero");
            setTimeout(function(){
                MS_cargar();
            },3000);
        }else{
            menu_mostrar_ocultar(mEnu);
            await MS_modificar_cargar();
            await Menu_s_cargar();
        }
    });
    //eliminar
    document.getElementById(mEnu.ids_botones[2]).addEventListener("click",function(){
        if(DB_MS_seleccionados.length<1){
            const alert = new alerta();
            menu_mostrar_ocultar(mEnu);
            MS_salir();
            menu_salir(mEnu);
            alert.mostrar("Debe seleccionar al menos un item");
            setTimeout(function(){
                MS_cargar();
            },3000);
        }else{
            menu_mostrar_ocultar(mEnu);
            DB_borrar_seleccionados();
        }
    });
    //salir
    document.getElementById(mEnu.ids_botones[3]).addEventListener("click",async function(){
        MS_salir();
        // SALIR_menu_misSolicitudes();
        menu_salir(mEnu);

        await INDEX_CARGAR();
        INDEX_ocultar_bienvenida();
        await CARGAR_login();
    });
}

