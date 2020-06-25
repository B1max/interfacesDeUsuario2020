class menu_principal extends menu{
    static estado = false;

    static ultimo = "btnMenu1a";
    static pos_inicial =  "rectangulo-superior-flotante";

    static ids_botones = [
        "btnMenu2a",
        "btnMenu3a",
        "btnMenu4a"
    ];


    static id_menu =["btnMenu1a"];


    static html_menu =[
        "<div id='btnMenu1a' class='botonMenu'></div>"
    ];

    static  html_botones =[
        "<div id='btnMenu2a' class='botonNuevo'>Mis Solicitudes</div>",
    "<div id='btnMenu3a' class='botonModificar'>Usuarios</div>",
    "<div id='btnMenu4a' class='botonEliminar'>Salir</div>",

    ];
    static evento = {"self": MenuP_evento_btnMenu()}; //MenuP_evento_btnMenu();
}


async function MenuP_cargar(){
    INDEX_salir();
    menu_cargar(MenuP_evento_btnMenu, menu_principal);
}



function MenuP_evento_btnMenu(){
    document.getElementById("btnMenu1a").addEventListener("click",function(){
       menu_mostrar_ocultar(menu_principal);
       if(menu_principal.estado){
           MenuP_eventos_botonera();
       }
    });
}




function MenuP_eventos_botonera(){
        document.getElementById("btnMenu2a").addEventListener("click",function(){
    //    menu_mostrar_ocultar(menu_principal);
            // console.log("Mis Solicitudes");
            // MenuP_salir();
            pantalla_salir(principal);
            MS_cargar();
            INDEX_ocultar_bienvenida();
        }); 
        //Usuarios
        document.getElementById("btnMenu3a").addEventListener("click",function(){
    //    menu_mostrar_ocultar(menu_principal);
            // console.log("Usuarios");
            // MenuP_salir();
            pantalla_salir(principal);
            USUARIOS_cargar();
        }); 
        //salir
        document.getElementById("btnMenu4a").addEventListener("click",function(){
       menu_mostrar_ocultar(menu_principal);
            pantalla_salir(principal);
            INDEX_CARGAR();
            // console.log("Salir");
        });
}



async function MenuP_salir(){
    menu_salir(menu_principal);
}

