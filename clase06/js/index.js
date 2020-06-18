
let INDEX_IDs =[
    /*"contenedor-parrafo-bienvenida",*/"index0","BotonLogear","index2"/*,"index1"*/
];

let INDEX_html =[
    /*"<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+*/
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

INDEX_CARGAR();

async function INDEX_CARGAR(){
    //rectangulo-superior-flotante
    //await document.getElementById("rectangulo-Bienvenida").insertAdjacentHTML
    await document.getElementById("rectangulo-superior-flotante").parentNode.insertAdjacentHTML("beforeEnd",""+
    /*"<div id='contenedor-parrafo-bienvenida' class='contenedor-parrafo-bienvenida'>"+*/
    "<p id='index0' class='texto-bienvenida'>Bienvenidos al departamento de acompañamiento de alumnos de la universidad"+
    "</p>"+
    "</div>");
    
    await document.getElementById("ultimo").insertAdjacentHTML("beforebegin",
    "<div id='BotonLogear' class='texto-login' >LOGEAR</div>"
    )
    document.getElementById("BotonLogear").addEventListener("click",async function(){
        UTIL_dibujar_HTML(LOGIN_html);
        LOGIN_eventos();
         document.getElementById("elementoMenu0").addEventListener("click",async function(){
            await LOGIN_salir();
         })
     });

    await document.getElementById("rectangulo-superior-flotante").parentNode.insertAdjacentHTML("afterend",
    "<div id='index2' class='rectangulo-info-inferior'>"+
    "<div id='index1' class='texto-rectangulo-inferior'>"+
        "Nuevos horarios de atención !!! <br> DE 2 A 3 AM !!!"+
    "</div>"+
    "</div>");

    DB_MS_seleccionados=[];
}

async function INDEX_salir(){
    await UTIL_BORRAR_HTML_pID(INDEX_IDs);
}