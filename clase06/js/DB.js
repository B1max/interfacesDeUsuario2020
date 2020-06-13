let usuarios = [];
let JSON_USUARIOS_CARGADO = false;


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
