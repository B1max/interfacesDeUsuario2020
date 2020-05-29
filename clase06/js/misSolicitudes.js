let itemSeleccionado;
let listaDeSolicitudes = [];
let nodosMisSolicitudes = [
    "<div class='conetenedorDeSolicitudes'></div>"
];

async function dibujarSolicitudes(){
    console.log("dibujando Menu");
    const inicial = document.getElementById("ultimo").parentNode;
    itemsMenu.forEach(await function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    })
    document.getElementById("btnMenu1a").addEventListener("click",menu)
    document.getElementById("btnMenu1a").addEventListener("mouseover",menu)
}
async function jsonAgregar(fecha,descripcion,estado){
    //funcion json parta guardar
}
async function listaAgregar(fecha,descripcion,estado){
    const solicitud = [fecha,descripcion,estado];
    listaDeSolicitudes.push(solicitud)
}

async function actualizarPantalla(){
 console.log("")
}