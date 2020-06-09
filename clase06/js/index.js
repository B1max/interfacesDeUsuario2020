
async function CARGAR_INDEX(){
    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("beforeEnd",""+
    "<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+
    "<p id='index0' class='texto-bienvenida'>Bienvenidos al departamento de acompañamiento de alumnos de la universidad"+
    "</p>"+
    "</div>");

    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("afterbegin",
    "<div id='BotonLogear' class='texto-login' >LOGEAR</div>"
    )

    await document.getElementById("contenedor-parrafo-bienvenida").insertAdjacentHTML("afterend",
    "<div id='index2' class='rectangulo-info-inferior'>"+
    "<div id='index1' class='texto-rectangulo-inferior'>"+
        "Nuevos horarios de atención !!! <br> DE 2 A 3 AM !!!"+
    "</div>"+
    "</div>");

    document.getElementById("BotonLogear").addEventListener("click",async function(){
        await agregarAlFinal("ultimo","elementoMenu0",elementosAagregar);
        document.getElementById("elementoMenu0").addEventListener("click",async function(){
            await removerAgregados("elementoMenu0",elementosAagregar);
        })
    })
    // TABLA_borrar_items_todos();
    
    document.getElementById("tabla").remove();
    document.getElementById("contenedorDeSolicitudes").remove();
    borrarBotones();
    document.getElementById("btnMenu1a").remove();
    itemIndex=0;
    itemSeleccionados=[];
    listaDeSolicitudes=[];
    /*---------------------------------------*/
    //aca se abre el login
    await agregarAlFinal("ultimo","elementoMenu0",elementosAagregar);
    document.getElementById("elementoMenu0").addEventListener("click",async function(){
        await removerAgregados("elementoMenu0",elementosAagregar);
    })
}
