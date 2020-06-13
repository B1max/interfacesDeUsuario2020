
let INDEX_IDs =[
    "contenedor-parrafo-bienvenida","index0","BotonLogear","index2","index1",
    "rectangulo-superior-flotante"
];

let INDEX_html =[
    "<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+
    "<p id='index0' class='texto-bienvenida'>Bienvenidos al departamento de acompañamiento de alumnos de la universidad"+
    "</p>"+
    "</div>"+
    "<div id='BotonLogear' class='texto-login' >LOGEAR</div>"+""

];

let INDEX_html2 = [
    "<div id='index2' class='rectangulo-info-inferior'>"+
    "<div id='index1' class='texto-rectangulo-inferior'>"+
        "Nuevos horarios de atención !!! <br> DE 2 A 3 AM !!!"+
    "</div>"+
    "</div>"
]


async function INDEX_CARGAR(){
    // await UTIL_dibujar_HTML2("rectangulo-Bienvenida",INDEX_html);
    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("beforeEnd",""+
    "<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+
    "<p id='index0' class='texto-bienvenida'>Bienvenidos al departamento de acompañamiento de alumnos de la universidad"+
    "</p>"+
    "</div>");

    await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML("afterbegin",
    "<div id='BotonLogear' class='texto-login' >LOGEAR</div>"
    )
    // await UTIL_dibujar_HTML2("contenedor-parrafo-bienvenida",INDEX_html2);

    await document.getElementById("contenedor-parrafo-bienvenida").insertAdjacentHTML("afterend",
    "<div id='index2' class='rectangulo-info-inferior'>"+
    "<div id='index1' class='texto-rectangulo-inferior'>"+
        "Nuevos horarios de atención !!! <br> DE 2 A 3 AM !!!"+
    "</div>"+
    "</div>");

    document.getElementById("BotonLogear").addEventListener("click",async function(){
        await LOGIN_dibujar("ultimo","elementoMenu0",LOGIN_html);
        document.getElementById("elementoMenu0").addEventListener("click",async function(){
            await INDEX_salir();
            await LOGIN_salir("elementoMenu0",LOGIN_html);
        })
    })
    // TABLA_borrar_items_todos();
    
    document.getElementById("tabla").remove();
    document.getElementById("contenedorDeSolicitudes").remove();
    
    borrarBotones();
    document.getElementById("btnMenu1a").remove();
    // itemIndex=0;
    itemSeleccionados=[];
    // listaDeSolicitudes=[];
    /*---------------------------------------*/
    //aca se abre el login
    await LOGIN_dibujar("ultimo","elementoMenu0",LOGIN_html);
    document.getElementById("elementoMenu0").addEventListener("click",async function(){
        await LOGIN_salir("elementoMenu0",LOGIN_html);
    })
}

async function INDEX_salir(){
    await UTIL_BORRAR_HTML_pID(INDEX_IDs);
}