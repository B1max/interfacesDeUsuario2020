let ultimaPosicion;

document.body.addEventListener("load",function(){
    try {
        ultimaPosicion();
    } catch (error) {
        console.log("Cargando inicio");
    }
})
function posicion_MisSolicitudes(){
    ultimaPosicion = posicion_MisSolicitudes;
    dibujarMenu();
    cargar_MisSolicitudes();
}