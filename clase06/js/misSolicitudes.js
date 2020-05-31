let itemSeleccionado;
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
    await tabla_dibujar_encabezado();
    checkAll = document.getElementById("checkAll");
    tabla = document.getElementById("tabla");
    await MisSolicitudesEventos();
    await tabla_dibujar_items();
    // await cargarJson();
}


async function MisSolicitudesEventos(){
    //temporal para pruebas...
    document.getElementById("recargarTest").addEventListener("click",async function(){
        console.log("dibujando solicitud");
        // await recargarLista();
        // await cargarJson();
        // await dibujarSolicitudes();
        await tabla_dibujar_items();
    })
    //normal...
    checkAll.addEventListener("click",check_All);
}
function check_All(){
    if(this.checked){
        //accion agregar a lista de seleccion
        console.log("all:checked");
    }else{
        //sacar de la lista de seleccion
        console.log("all:unchecked");
    }
    console.log("estado del check all-> "+checkAll.checked)
    return checkAll.checked;
}


async function tabla_dibujar_encabezado(){
    console.log("dibujando estructura de solicitudes");
    nodosMisSolicitudes.forEach(item =>{
        misSolicitudesInicial.insertAdjacentHTML("AfterEnd",item);
    })
}

async function tabla_dibujar_items(){
    await cargarJson(true);
}

function agregarAlista(fecha,descripcion,estado){
    listaDeSolicitudes.push([fecha,descripcion,estado])
    //aca agregar el id para identificar el item
    document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr>"+
    "<td class='colCheck'>"+
        "<input type='checkbox' id='checkAll' class='check'>"+
    "</td>"+
    "<td class='colFecha'>"+fecha+"</td>"+
    "<td class='colDescripcion'>"+descripcion+"</td>"+
    "<td class='colEstado'>En "+estado+"</td></tr>")
}

function borrarLista(){
    //posisionarnos en el nodo primero
    const totalItemsXvista = 10;
    const encabezadoItems = document.getElementById("encabezadoTabla");
    console.log("total de items-> "+encabezadoItems.childElementCount)

    console.log("borrando")
    //borrar todos los demas que le siguen
    //borrar array? o solo html
}

async function recargarLista(){
    //borrar lista
    await borrarLista();
    //volver a cargar todo
    await dibujarSolicitudes();
        //cargar json primero
        //cargar array interno
}
async function cargarJson(cargaDirecta){
    //carga el json
    let listaDeJsons = [];
    fetch('./json/tabla.json')
    .then(result=> result.json())
    .then(async ar=>{
        let arr = Array.from(ar['Solicitudes']);
        arr.reverse;
        console.log(arr[0]['Fecha Solicitud']);
        for(let i = 0;i<arr.length;i++){  
            if(cargaDirecta){
                agregarAlista(arr[i]['Fecha Solicitud'],arr[i]['Descripción'],arr[i]['Estado']);
            }else{
                listaDeJsons.push([arr[i]['Fecha Solicitud'],arr[i]['Descripción'],arr[i]['Estado']]);
                //verificar que no salga la lista inversa
            }
        }
    })
    .then(console.log);
    //agregar a un array que se pueda controlar... por id
    return listaDeJsons;
}

function agregarAjson(){
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");
    
    formData.append('20/5/56', 'abc123');
    formData.append('avatar', fileField.files[0]);
    //fetch('http://127.0.0.1:5500/clase06/json/tabla.json', {
    fetch('http://127.0.0.1/json/tabla.json', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    // const json = fetch('http://127.0.0.1:5500/clase06/json/tabla.json',{
    //     method : 'POST',
    //     headers: {
    //         'Content-Type': 'aplication/json'
    //     },
    //     body: JSON.stringify({
    //         'Fecha Solicitud' : '2/4/2020',
    //         'Descripcion': 'probandooooooooooooooooo',
    //         'Estado': 'Aceptado'
    //     })
    // })
}
