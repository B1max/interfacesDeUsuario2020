let itemSeleccionado;
let listaDeSolicitudes = [];
let nodosMisSolicitudes = [
    "<div class='contenedorDeSolicitudes'></div>"
];

document.getElementById("recargarTest").addEventListener("click",async function(){
    console.log("dibujando solicitud");
    const inicial = document.getElementById("contenedorDeSolicitudes");
    inicial.insertAdjacentHTML("beforeend","<div class='listaSolicitud'>testttt</div>");
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