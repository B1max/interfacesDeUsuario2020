class menu_principal extends menu{
    static estado = false;
    static eventoMenu = MenuP_evento_btnMenu;
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
}


async function MenuP_cargar(){
    INDEX_salir();
    menu_cargar(MenuP_evento_btnMenu, menu_principal);
}



function MenuP_evento_btnMenu(mEnu){
    document.getElementById(mEnu.id_menu[0]).addEventListener("click",function(){
       menu_mostrar_ocultar(menu_principal);
       if(menu_principal.estado){
           MenuP_eventos_botonera(mEnu);
       }
    });
}




function MenuP_eventos_botonera(mEnu){
        document.getElementById(mEnu.ids_botones[0]).addEventListener("click",function(){
            pantalla_salir(principal);
            MS_cargar();
            INDEX_ocultar_bienvenida();
        }); 
        //Usuarios
        document.getElementById(mEnu.ids_botones[1]).addEventListener("click",function(){
            pantalla_salir(principal);
            USUARIOS_cargar();
        }); 
        //salir
        document.getElementById(mEnu.ids_botones[2]).addEventListener("click",function(){
       menu_mostrar_ocultar(mEnu);
            pantalla_salir(principal);
            INDEX_CARGAR();
        });
}



async function MenuP_salir(){
    //hay que ver quien lo llama y modofica4r la linea por esta
    menu_salir(menu_principal);
}

