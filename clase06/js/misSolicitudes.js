let itemIndex = 0;
let itemSeleccionados = [];
let listaDeSolicitudes = [];
let nodosMisSolicitudes = [
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

// const misSolicitudesInicial = document.getElementById("ultimo");

let tabla;
let checkAll ;
let checkAllState = false;

async function cargar_MisSolicitudes(){
    await DB_traer_JSON();
    console.log("cargando, lista->"+listaDeSolicitudes.length);
    await tabla_dibujar_encabezado();
    checkAll = document.getElementById("checkAll");
    tabla = document.getElementById("tabla");
    await TABLA_dibujar_items();
    await MisSolicitudesEventos();
}


async function MisSolicitudesEventos(){
    //temporal para pruebas...
    document.getElementById("recargarTest").addEventListener("click",async function(){
        console.log("dibujando solicitud");
        console.log("array de solicitudes-> "+listaDeSolicitudes.length);
        await TABLA_recargar_lista();
    })
    //normal...
    checkAll.addEventListener("click",check_All);
    
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        document.getElementById("check"+listaDeSolicitudes[i][0]).addEventListener("click",async function(){
            if(document.getElementById("check"+i).checked){
                itemSeleccionados.push(listaDeSolicitudes[i][0]);
                console.log("all:checked");
            }else{
                //sacar de la lista de seleccion
                itemSeleccionados.splice(itemSeleccionados.indexOf(listaDeSolicitudes[i][0],1));
                console.log("all:unchecked");
            }
            console.log("se deselecciono el item->"+i);
            console.log("lista->"+itemSeleccionados);
        });
    }
}
function check_All(){
    if(this.checked){
        console.log("all:checked");
    }else{
        console.log("all:unchecked");
    }
    console.log("estado del check all-> "+checkAll.checked);
    return checkAll.checked;
}


async function tabla_dibujar_encabezado(){
    console.log("dibujando estructura de solicitudes");
    nodosMisSolicitudes.forEach(item =>{
        misSolicitudesInicial.insertAdjacentHTML("AfterEnd",item);
    })
}

async function TABLA_dibujar_items(){
    console.log("se van a agregar a la lista "+listaDeSolicitudes.length+" items");
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        let itemID = ""+listaDeSolicitudes[i][0]
        let fecha = ""+listaDeSolicitudes[i][2];
        let desc = ""+listaDeSolicitudes[i][3];
        let estado = ""+listaDeSolicitudes[i][4];
        console.log("item->"+i+"-"+fecha+"-"+desc+"-"+estado);
        agregarAlista(itemID,fecha,desc,estado);
    }
}

async function TABLA_agregar_desde_DB(){
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        console.log("agregando item a lista desde DB-> "+i)
        agregarAlista(listaDeSolicitudes[i][0],listaDeSolicitudes[i][2],listaDeSolicitudes[i][3],listaDeSolicitudes[i][4]);
    }
}

async function DB_agregar_item(id,origen,fecha,descripcion,estado){
    listaDeSolicitudes.push([id,origen,fecha,descripcion,estado]);
    console.log("DB_agregar_item:"+listaDeSolicitudes.length)
    console.log("DB_agregar_item:->"+listaDeSolicitudes[listaDeSolicitudes.length-1])
    return listaDeSolicitudes.length-1;
}

function agregarAlista(id,fecha,descripcion,estado){
    // listaDeSolicitudes.push([fecha,descripcion,estado])
    //aca agregar el id para identificar el item
    document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr id='item"+id+"'>"+
    "<td class='colCheck'>"+
        "<input type='checkbox' id='check"+id+"' class='check'>"+
    "</td>"+
    "<td id='colFecha"+id+"' class='colFecha'>"+fecha+"</td>"+
    "<td id='colDescripcion"+id+"' class='colDescripcion'>"+descripcion+"</td>"+
    "<td id='colEstado"+id+"' class='colEstado'>En "+estado+"</td></tr>")
}



async function TABLA_recargar_lista(){
    await TABLA_borrar_items_todos();
    await TABLA_agregar_desde_DB();
    console.log("visual_recargar_lista->"+listaDeSolicitudes.length)
}

async function TABLA_borrar_items_todos(){

    console.log("TABLA_borrar_items_todos->"+itemSeleccionados)
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        console.log("todos-> eliminar-> "+listaDeSolicitudes[i][0])
    }
}
function DB_borrar_seleccionados(){
    console.log("borrando seleccionados");
    for(let i = 0;i<itemSeleccionados.length;i++){
        console.log("seleccion-> fila"+i)
        // TABLA_borrar_item("fila"+i);
        for(let e = 0;e<listaDeSolicitudes.length;e++){
            if(listaDeSolicitudes[e][0]==itemSeleccionados[i]){
                listaDeSolicitudes.splice(e,1);
            }
        }
        console.log("sel-borrado item->" + itemSeleccionados[i])
    }
    itemSeleccionados = [];
    // await TABLA_recargar_lista();
}
/*
async function TABLA_borrar_item(item){
    
    document.getElementById(item).parentElement.nextElementSibling.remove;
    //.nextElementSibling.remove();
    // await document.getElementById(item).remove;
}
*/
async function DB_traer_JSON(){
    return fetch('./json/tabla.json')
    .then(result=> result.json())
    .then(async (ar)=>{
        let arr = Array.from(ar['Solicitudes']);
        // console.log("solicitudes cargadas desde JSON->"+arr.length);
        arr.reverse;
        // console.log("se va a cargar desde JSON ->"+arr.length+" items");
        for(let i = 0;i<arr.length;i++){  
            // console.log("agregando-> "+"JSON a DB\n");
            let fecha = ""+arr[i]['Fecha Solicitud'];
            let desc = ""+arr[i]['Descripción'];
            let estado = ""+arr[i]['Estado'];
            // console.log("agregando->"+fecha+"-"+desc+"-"+estado);
            await DB_agregar_item(itemIndex,"JSON",fecha,desc,estado);
            itemIndex++;
        }
        console.log(listaDeSolicitudes);
    })
    .then(console.log);

}

async function DB_borrar_JSON(){
    let listaNormal =[];
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        if(listaDeSolicitudes[i][0]!="JSON"){
            listaNormal.push(listaDeSolicitudes[i]);
        }
    }
    listaDeSolicitudes = listaNormal;
}
