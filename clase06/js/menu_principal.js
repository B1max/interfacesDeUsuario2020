const MenuP_IDs = [
    "btnMenu2a",
    "btnMenu3a",
    "btnMenu4a",
    "btnMenu5a"
];
const MenuP_ID_btnMenu =[];
const MenuP_html_boton_menu =[

];
const MP_html_botones =[
    "<div id='btnMenu2a' class='botonNuevo'>NUEVO</div>",
"<div id='btnMenu3a' class='botonModificar'>MODIFICAR</div>",
"<div id='btnMenu4a' class='botonEliminar'>ELIMINAR</div>",
"<div id='btnMenu5a' class='botonSalir'>SALIR</div>"
];


async function MP_cargar(){
    const dibujar = UTIL_dibujar_HTML(MenuP_html_boton_menu);
    await dibujar();
}

function MenuP_eventos(){

}

function MenuP_salir(){
    //borrar el boton "MENU"
    UTIL_BORRAR_HTML_pID(MenuP_IDs);
}

