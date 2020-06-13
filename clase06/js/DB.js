let usuarios = [];
let JSON_USUARIOS_CARGADO = false;
let DB_MS_seleccionados = [];
let DB_MS_solicitudes = [];

async function DB_traer_JSON_MS(){
    if(JSON_Cargado==false){
        JSON_Cargado=true;
        //trae los datos de tabla.json para Mis Solicitudes
        return fetch('./json/tabla.json')
        .then(result=> result.json())
        .then(async (ar)=>{
            let arr = Array.from(ar['Solicitudes']);
            arr.reverse;
            for(let i = 0;i<arr.length;i++){  
                let fecha = arr[i]['Fecha Solicitud'];
                let desc = arr[i]['Descripción'];
                let estado = arr[i]['Estado'];
                await DB_agregar_item("JSON",fecha,desc,estado);
            }
        })
    }
}

function DB_traer_JSON_USERS(){
    if(JSON_USUARIOS_CARGADO == false){
        JSON_USUARIOS_CARGADO = true;
        //trae los datos de usuarios.json para usuarios
        return fetch('./json/usuarios.json')
        .then(result=> result.json())
        .then(async (ar)=>{
            let arr = Array.from(ar['Usuarios']);
            arr.reverse;
            for(let i = 0;i<arr.length;i++){  
                let user = arr[i]['user'];
                let pass = arr[i]['pass'];
                let lvl = arr[i]['lvl'];
                //agregar linea donde carga a un array*****************
                usuarios.push([user,pass,lvl]);
            }
        })
    }
}


function DB_BUSCAR_USUARIO(user,pass){
    //devuelve una lista con las coincidencias, usuarios
    let respuesta = false;
    for(let i = 0;i<usuarios.length;i++){
        if(usuarios[i][0]==user && usuarios[i][1]==pass){
            respuesta = true
        }
    }
    return respuesta;
}


async function DB_agregar_item(origen,fecha,descripcion,estado){
    DB_MS_solicitudes.push([itemIndex,origen,fecha,descripcion,estado]);
    console.log("se agrego el item->"+itemIndex+"-"+origen+"-"+fecha+"-"+descripcion+"-"+estado)
    itemIndex++;
    return DB_MS_solicitudes.length-1;
}

async function DB_borrar_JSON(){
    //borra todos los items del array listaSOlicitudes con el origen JSON , item[x][1]
    let listaNormal =[];
    for(let i = 0;i<DB_MS_solicitudes.length;i++){
        if(DB_MS_solicitudes[i][1]!="JSON"){
            listaNormal.push(DB_MS_solicitudes[i]);
        }
    }
    DB_MS_solicitudes = listaNormal;
}

async function DB_borrar_seleccionados(){
    // borrarBotones();
    MENU_borrar_botones();
    if(todosSeleccionados){
        document.getElementById("checkAll").checked = false;
    }
    for(let i = 0;i<DB_MS_seleccionados.length;i++){
        let id = DB_MS_seleccionados[i];
        DB_MS_solicitudes.splice(DB_MS_solicitudes.indexOf(id),1);
        // document.getElementById("check"+id).removeEventListener("click",function(){});
        UTIL_BORRAR_HTML_pID(["colFecha"+id,"colDescripcion"+id,"colEstado"+id,"check"+id,"colCheck"+id,"item"+id],"DB_borrar_seleccionados")
    }
    DB_MS_seleccionados = []
    await MS_eventos();

    // TABLA_recargar_lista();
}