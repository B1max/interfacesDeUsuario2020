let itemIndex = 0;
let todosSeleccionados = false;
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
let tabla;
let checkAll ;
let checkAllState = false;


async function cargar_MisSolicitudes(){
    await DB_traer_JSON();
    await tabla_dibujar_encabezado();
    checkAll = document.getElementById("checkAll");
    tabla = document.getElementById("tabla");
    await TABLA_dibujar_items();
    await MisSolicitudesEventos();
}


async function MisSolicitudesEventos(){
    // document.getElementById("recargarTest").addEventListener("click",async function(){
    //     console.log("dibujando solicitud");
    //     console.log("array de solicitudes-> "+listaDeSolicitudes.length);
    //     console.log("seleccionados->"+seleccionados);

    // })
    checkAll.addEventListener("click",check_All);
    
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        document.getElementById("check"+listaDeSolicitudes[i][0]).addEventListener("click",async function(){
            if(document.getElementById("check"+i).checked){
                itemSeleccionados.push(listaDeSolicitudes[i]);
            }else{
                let indexI = itemSeleccionados.indexOf(listaDeSolicitudes[i][0])
                itemSeleccionados.splice(indexI,1);

            }
        });
    }
}


function check_All(){
    if(todosSeleccionados){
        itemSeleccionados = [];
        todosSeleccionados = false;
    }else{
        itemSeleccionados = listaDeSolicitudes;
        todosSeleccionados = true;
    }
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        document.getElementById("check"+listaDeSolicitudes[i][0]).checked = todosSeleccionados;
    }
}


async function tabla_dibujar_encabezado(){
    nodosMisSolicitudes.forEach(item =>{
        misSolicitudesInicial.insertAdjacentHTML("AfterEnd",item);
    })
}


async function TABLA_dibujar_items(){
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        let itemID = ""+listaDeSolicitudes[i][0]
        let fecha = ""+listaDeSolicitudes[i][2];
        let desc = ""+listaDeSolicitudes[i][3];
        let estado = ""+listaDeSolicitudes[i][4];
        agregarAlista(itemID,fecha,desc,estado);
    }
}


async function TABLA_agregar_desde_DB(){
    if(listaDeSolicitudes.length>0){
        for(let i = 0;i<listaDeSolicitudes.length;i++){
            agregarAlista(listaDeSolicitudes[i][0],listaDeSolicitudes[i][2],listaDeSolicitudes[i][3],listaDeSolicitudes[i][4]);
        }
    }else{
        console.log("nada que borrar")
    }
}


async function DB_agregar_item(id,origen,fecha,descripcion,estado){
    listaDeSolicitudes.push([id,origen,fecha,descripcion,estado]);
    return listaDeSolicitudes.length-1;
}


function agregarAlista(id,fecha,descripcion,estado){
    document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr id='item"+id+"'>"+
    "<td class='colCheck'>"+
        "<input type='checkbox' id='check"+id+"' class='check'>"+
    "</td>"+
    "<td id='colFecha"+id+"' class='colFecha'>"+fecha+"</td>"+
    "<td id='colDescripcion"+id+"' class='colDescripcion'>"+descripcion+"</td>"+
    "<td id='colEstado"+id+"' class='colEstado'>En "+estado+"</td></tr>");
}


async function TABLA_recargar_lista(){
    await TABLA_borrar_items_todos();
    await TABLA_agregar_desde_DB();
    itemSeleccionados = [];
}


async function TABLA_borrar_items_todos(){
    for(let i = 0;i<listaDeSolicitudes.length;i++){
        document.getElementById("item"+listaDeSolicitudes[i][0]).remove();
    }
}


function DB_borrar_seleccionados(){
    borrarBotones();
    if(todosSeleccionados){
        document.getElementById("checkAll").checked = false;
    }
    for(let i = 0;i<itemSeleccionados.length;i++){
        for(let e = 0;e<listaDeSolicitudes.length;e++){
            if(listaDeSolicitudes[e][0]==itemSeleccionados[i][0]){
                document.getElementById("item"+listaDeSolicitudes[e][0]).remove();
                listaDeSolicitudes.splice(e,0);
            }
        }
    }
    itemSeleccionados = [];
}


async function DB_traer_JSON(){
    return fetch('./json/tabla.json')
    .then(result=> result.json())
    .then(async (ar)=>{
        let arr = Array.from(ar['Solicitudes']);
        arr.reverse;
        for(let i = 0;i<arr.length;i++){  
            let fecha = ""+arr[i]['Fecha Solicitud'];
            let desc = ""+arr[i]['Descripción'];
            let estado = ""+arr[i]['Estado'];
            await DB_agregar_item(itemIndex,"JSON",fecha,desc,estado);
            itemIndex++;
        }
    })
    // .then(console.log);
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
