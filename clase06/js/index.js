
async function CARGAR_INDEX(){
    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("beforeEnd",""+
    "<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+
    "<p id='index0' class='texto-bienvenida'>Bienvenidos al departamento de acompañamiento de alumnos de la universidad"+
    "</p>"+
    "</div>");

    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("beforebegin",
    "<div id='BotonLogear' class='texto-login' >LOGEAR</div>"
    )

    await document.getElementById("contenedor-parrafo-bienvenida").insertAdjacentHTML("afterend",
    "<div id='index2' class='rectangulo-info-inferior'>"+
    "<div id='index1' class='texto-rectangulo-inferior'>"+
        "Nuevos horarios de atención !!! <br> DE 2 A 3 AM !!!"+
    "</div>"+
    "</div>")

    document.getElementById("BotonLogear").addEventListener("click",async function(){
        await agregarAlFinal("ultimo","elementoMenu0",elementosAagregar);
        document.getElementById("elementoMenu0").addEventListener("click",async function(){
            await removerAgregados("elementoMenu0",elementosAagregar);
        })
    })
}
/*let ultimaPosicion;
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


async function posicion_MisSolicitudes(){
    if(ultimaPosicion!="posicion_MisSolicitudes"){
    //     console.log("recargando tabla");
    //     TABLA_recargar_lista();
    // }else{
        ultimaPosicion = "posicion_MisSolicitudes";
        await dibujarMenu();
        await cargar_MisSolicitudes();
    }
}

async function posicion_MisSolicitudes_modificar(){
    dibujarPantallaModificar
}
*/


/**------------------------------------------- */
