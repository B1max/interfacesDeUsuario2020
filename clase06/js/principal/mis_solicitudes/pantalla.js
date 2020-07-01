class pantalla_misSolicitudes extends pantalla{
    // static punto_inicial = "contenedor";
    // static punto_inicial = "contenedorDeSolicitudes";
    static menuAsociado = Menu_misSolicitudes;
    static ids_general = ["contenedorDeSolicitudes","tabla"];
    static html_general = ["<div id='contenedorDeSolicitudes' class='contenedorDeSolicitudes'>"+

    "<table id='tabla' class='tabla'>"+
                "<tr>"+
                    "<td class='colCheck'>"+
                        "<input type='checkbox' id='checkAll' class='check'>"+
                    "</td>"+
                    "<td class='colFecha'>"+
                        "Fecha"+
                    "</td>"+
                    "<td class='colDescripcion'>Descripción</td>"+
                    "<td class='colEstado'>Estado</td>"+
                "</tr>"+
            "</table></div>"];
    static evento = {};
}

let itemIndex = 0;


let todosSeleccionados = false;


let JSON_Cargado = false;


let MS_IDs = ["contenedorDeSolicitudes","tabla"];


let MS_html = [
    "<div id='contenedorDeSolicitudes' class='contenedorDeSolicitudes'>"+

    "<table id='tabla' class='tabla'>"+
                "<tr>"+
                    "<td class='colCheck'>"+
                        "<input type='checkbox' id='checkAll' class='check'>"+
                    "</td>"+
                    "<td class='colFecha'>"+
                        "Fecha"+
                    "</td>"+
                    "<td class='colDescripcion'>Descripción</td>"+
                    "<td class='colEstado'>Estado</td>"+
                "</tr>"+
            "</table></div>"
];


let misSolicitudesInicial = document.getElementById("ultimo");


let tabla;


let checkAll ;


let checkAllState = false;




async function MS_cargar(){
    // PP_borrarBienvenida()
    // MS_salir();
    //---------------------------------------------------
    //menu_cargar(EVENTOS_menu_misSOlicitudes, Menu_usuarios);
    //---------------------------------------------------
    // await DB_traer_JSON_MS();
    // await MS_TABLA_dibujarEstructura();
    // checkAll = document.getElementById("checkAll");
    // tabla = document.getElementById("tabla");
    // await MS_TABLA_dibujar_items();
    // await MS_eventos();
    pantalla_cargar(MS_eventos,pantalla_misSolicitudes);
}



async function MS_eventos(pantalla){
    await DB_traer_JSON_MS();
    // await MS_TABLA_dibujarEstructura(pantalla);
    
    // checkAll = document.getElementById("checkAll");
    // tabla = document.getElementById("tabla");
    await MS_TABLA_dibujar_items(pantalla);

    // await UTIL_quitarEvento_pID([["checkAll","click"]],"MisSolicitudesEventos");
    document.getElementById("checkAll").addEventListener("click",MS_check_All);
    // let checks = [];
    // console.log(checks);
    
}

/*
async function MS_TABLA_dibujarEstructura(pantalla){
    const inicial = document.getElementById(pantalla.punto_inicial);
    pantalla.html_general.forEach(item =>{
        // inicial.insertAdjacentHTML("AfterEnd",item);
        inicial.insertAdjacentHTML("beforeend",item);
    });
}
*/

function MS_check_All(){
    if(todosSeleccionados){
        DB_MS_seleccionados = [];
        todosSeleccionados = false;
    }else{
        DB_MS_seleccionados = DB_MS_solicitudes;
        todosSeleccionados = true;
    }
    for(let i = 0;i<DB_MS_solicitudes.length;i++){
        document.getElementById("check"+DB_MS_solicitudes[i][0]).checked = todosSeleccionados;
    }
}




/*
function MS_TABLA_borrar(){
    UTIL_BORRAR_HTML_pID(["tabla"]);
}
*/



async function MS_TABLA_dibujar_items(pantalla){
    for(let i = 0;i<DB_MS_solicitudes.length;i++){
        let itemID = ""+DB_MS_solicitudes[i][0]
        let fecha = ""+DB_MS_solicitudes[i][2];
        let desc = ""+DB_MS_solicitudes[i][3];
        let estado = ""+DB_MS_solicitudes[i][4];
        MS_agregar_a_lista(itemID,fecha,desc,estado);
    }
}




function MS_agregar_a_lista(id,fecha,descripcion,estado){
    document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr id='item"+id+"'>"+
    "<td class='colCheck'>"+
        "<input type='checkbox' id='check"+id+"' class='check'>"+
    "</td>"+
    "<td id='colFecha"+id+"' class='colFecha'>"+fecha+"</td>"+
    "<td id='colDescripcion"+id+"' class='colDescripcion'>"+descripcion+"</td>"+
    "<td id='colEstado"+id+"' class='colEstado'>"+estado+"</td></tr>");
    document.getElementById("check"+id).addEventListener("click",function(){
         console.log("item seleccionado y agregado");
        if(document.getElementById("check"+id).checked){
            DB_MS_seleccionados.push(id);
        }else{
            DB_MS_seleccionados.splice(id,1);
        }
        console.log(DB_MS_seleccionados);
    })
}




async function MS_TABLA_agregar_desde_DB(){
    if(DB_MS_solicitudes.length>0){
        for(let i = 0;i<DB_MS_solicitudes.length;i++){
            MS_agregar_a_lista(DB_MS_solicitudes[i][0],DB_MS_solicitudes[i][2],DB_MS_solicitudes[i][3],DB_MS_solicitudes[i][4]);
        }
    }else{
        console.log("nada que agregar")
    }
}






function MS_salir(){
    for(let i = 0;i<DB_MS_solicitudes.length;i++){
        try{
            let id = DB_MS_solicitudes[i][0];
            document.getElementById("item"+id).remove();
            document.getElementById("check"+id).remove();
            document.getElementById("colFecha"+id).remove();
            document.getElementById("colDescripcion"+id).remove();
            document.getElementById("colEstado"+id).remove();
        }catch(error){
            console.log("Error borrando HTMLs->"+error)
        }
    }
    UTIL_BORRAR_HTML_pID(MS_IDs);
}
