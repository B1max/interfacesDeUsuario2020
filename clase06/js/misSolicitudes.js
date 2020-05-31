let itemSeleccionado;
let listaDeSolicitudes = [];
let nodosMisSolicitudes = [
    "<div class='contenedorDeSolicitudes'></div>"
];

document.getElementById("recargarTest").addEventListener("click",async function(){
    console.log("dibujando solicitud");
    // const inicial = document.getElementById("contenedorDeSolicitudes");
    // inicial.insertAdjacentHTML("beforeend","<div class='listaSolicitud'>testttt</div>");
    agregarSolicitud();
})

async function dibujarSolicitudes(){
    console.log("dibujando solicitud");
    const inicial = document.getElementById("contenedorDeSolicitudes");
    // itemsMenu.forEach(await function(item){
        inicial.insertAdjacentHTML("beforeEnd",item);
    // })
}
async function jsonAgregar(fecha,descripcion,estado){
    //funcion json parta guardar
}   
async function listaAgregar(fecha,descripcion,estado){
    const solicitud = [fecha,descripcion,estado];
    listaDeSolicitudes.push(solicitud)
}

async function actualizarPantalla(){
    // borrar los items
    //redibujarlos con dibujarSOlicitudes
 console.log("")
}


async function modelo(){
    return true
}

async function agregarSolicitud(fecha,desc,estado){
    const json = fetch('./json/tabla.json')
    .then(result=> result.json())
    .then(async ar=>{
        let arr = Array.from(ar['Solicitudes']);
        arr.reverse;
        console.log(arr[0]['Fecha Solicitud'])
        const tabla = document.getElementById("tabla");
        for(let i = 0;i<arr.length;i++){  
            await tabla.firstElementChild.insertAdjacentHTML("AfterEnd","<tr>"+
            "<td class='colFecha'>"+arr[i]['Fecha Solicitud']+"</td>"+
            "<td class='colDescripcion'>"+arr[i]['Descripción']+"</td>"+
            "<td class='colEstado'>En "+arr[i]['Estado']+"</td></tr>")
        }
    })
    .then(console.log);
    await agregarJson();
}

async function agregarJson(){

    let http = new XMLHttpRequest();
    let url = "./json/tabla.json";

    let fecha = "fechaok";
    let desc = "descripcionasdafafafaf";
    let estado = "En progreso";
    // let password = document.getElementById('pass');
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.open("POST", url, true);

    http.onreadystatechange = async function() {
    if(http.readyState == 4 && http.status == 200) { 
        //aqui obtienes la respuesta de tu peticion
        alert(http.responseText);
    }
    }
    http.send(JSON.stringify({'Fecha Solicitud':fecha, Descripción: desc, Estado: estado }));
}