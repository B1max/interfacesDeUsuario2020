//principal/usuarios

// let MenuUsuarios_activado = false;
class Menu_usuarios extends menu{
    // static pos_inicial = "rectangulo-superior-flotante";
    static pos_inicial = "rectangulo-superior-flotante";

    static ultimo = "contenedorDeSolicitudes";

    static id_menu =["MUbtnMenu1a"];

    static html_menu =["<div id='MUbtnMenu1a' class='botonMenu'></div>"];

    static ids_botones =[
        "MUbtnMenu2a",
        "MUbtnMenu3a",
        "MUbtnMenu4a",
        "MUbtnMenu5a"
    ];

    static html_botones=["<div id='MUbtnMenu2a' class='botonNuevo'>NUEVO</div>",
    "<div id='MUbtnMenu3a' class='botonModificar'>Modificar</div>",
    "<div id='MUbtnMenu4a' class='botonEliminar'>Eliminar</div>",
    "<div id='MUbtnMenu5a' class='botonSalir'>Salir</div>"];

}




async function MenuUsuarios_cargar(){
    // Menu_usuarios.cargar();
    // menu_cargar(MenuUsuarios_evento_btnMenu,Menu_usuarios);
    menu_cargar(MenuUsuarios_evento_btnMenu,menu_MS);

}


//solo eventos

function MenuUsuarios_evento_btnMenu(menu){
    document.getElementById(menu.id_menu[0]+"").addEventListener("click",
    function(){
        menu_mostrar_ocultar(menu);
        if(menu.estado){
            MenuUsuarios_eventos_botonera(menu);
        }
    });
}




function MenuUsuarios_eventos_botonera(menu){
    //Nuevo
    document.getElementById(menu.ids_botones[0]).addEventListener("click",function(){
        menu_mostrar_ocultar(menu);
        UsuarioN_cargar();
    }); 
    //Modificar
    document.getElementById(menu.ids_botones[1]).addEventListener("click",async function(){
        if(USUARIOS_seleccion.length<1){
            menu_mostrar_ocultar(menu);
            USUARIOS_salir();
            const alert = new alerta();
            alert.mostrar("Debe seleccionar al menos un item,\nsi selecciona mas de uno, solo se tomara el primero");
            setTimeout(function(){
                USUARIOS_cargar();
            },3000);
        }else{
            menu_mostrar_ocultar(menu);
            Umodificar_cargar();
        }
    }); 
    //Eliminar
    document.getElementById(menu.ids_botones[2]).addEventListener("click",async function(){
        if(USUARIOS_seleccion.length<1){
            menu_mostrar_ocultar(menu);
            USUARIOS_salir();
            const alert = new alerta();
            alert.mostrar("Debe seleccionar al menos un item");
            setTimeout(function(){
                USUARIOS_cargar();
            },3000);
        }else{
            menu_mostrar_ocultar(menu);
            await USUARIOS_eliminar_seleccion();
        }
    });
    //salir
    document.getElementById(menu.ids_botones[3]).addEventListener("click",async function(){
        menu_mostrar_ocultar(menu);
        menu_salir(menu);
        USUARIOS_salir();
        await INDEX_CARGAR();
        await CARGAR_login();
    });
}
