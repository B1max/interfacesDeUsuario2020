let ultimaPosicion;
if (ultimaPosicion !=null){
    ultimaPosicion();
}
document.onkeydown = fkey;
document.onkeypress = fkey
document.onkeyup = fkey;
// var wasPressed = false;

document.body.addEventListener("load",function(){
    try {
        ultimaPosicion();
    } catch (error) {
        console.log("Cargando inicio");
    }
})


function fkey(e){
    e = e || window.event;
    // if (e.code === 'F5') {
    if (e.code === 116) {
        console.log("F5 presionado");
        
        if(ultimaPosicion=="posicion_MisSolicitudes"){
            e.preventDefault();
            // e.stopPropagation();
            // console.log("recargando tabla");
            // TABLA_recargar_lista();
        }else{
            console.log("ultima posicion = "+ultimaPosicion)
        }
        // wasPressed = true;
    }
}


function posicion_MisSolicitudes(){
    if(ultimaPosicion!="posicion_MisSolicitudes"){
    //     console.log("recargando tabla");
    //     TABLA_recargar_lista();
    // }else{
        ultimaPosicion = "posicion_MisSolicitudes";
        dibujarMenu();
        cargar_MisSolicitudes();
    }
}