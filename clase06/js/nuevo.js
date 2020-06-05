let htmlPantallaNuevo = "<div class='NUEVA-RECTANGULO-FONDO'>"+
"<P class='NUEVA-TXT-TITULO'>NUEVA SOLICITUD</P>"+
"<P class='NUEVA-TXT-FECHA'>FECHA:</P>"+
"<INPUT type='date' class='NUEVA-INPUT-FECHA'> </INPUT>"+
"<P class='NUEVA-TXT-DESCRIPCION'>DESCRIPCÍON:</P>"+
"<textarea class='NUEVA-TXTTAREA-DESCRIPCION' cols='30' rows='10' maxlength='100'></textarea>"+
"<p class='NUEVA-TXT-ESTADO'>ESTADO:</p>"+
"<select class='NUEVA-INPUTLIST-ESTADO'>"+
"    <option value='Abierta'>Abierta</option>"+
"    <option value='En progreso'>En progreso</option>"+
"    <option value='Cerrada'>Cerrada</option>"+
"</select>"+
"<div class='NUEVA-RECTANGULO-BTN-CANCELAR' >CANCELAR</div>"+
"<div class='NUEVA-RECTANGULO-BTN-ACEPTAR' >ACEPTAR</div>"+
"</div>";

async function CARGAR_PANTALLA_NUEVO(){
    await dibujarPantallaNuevo();
}

function dibujarPantallaNuevo(){
    const inicial = document.getElementById("ultimo").parentNode;

    console.log("dibujando pantalla nuevo");
    htmlPantallaNuevo.forEach(async function(item){
        console.log("agregando items de pantalla nuevo");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
}
function borrarPantallaNuevo(){
    document.getElementById("NUEVA-RECTANGULO-FONDO").remove();
    document.getElementById("NUEVA-TXT-TITULO").remove();
    document.getElementById("NUEVA-TXT-FECHA").remove();
    document.getElementById("NUEVA-INPUT-FECHA").remove();
    document.getElementById("NUEVA-TXT-DESCRIPCION").remove();
    document.getElementById("NUEVA-TXTTAREA-DESCRIPCION'").remove();
    document.getElementById("NUEVA-TXT-ESTADO").remove();
    document.getElementById("NUEVA-INPUTLIST-ESTADO").remove();
    document.getElementById("NUEVA-RECTANGULO-BTN-CANCELAR").remove();
    document.getElementById("NUEVA-RECTANGULO-BTN-ACEPTAR").remove();
}

function EVENTOS_PANTALLA_NUEVO(){
    document.getElementById("NUEVA-RECTANGULO-BTN-ACEPTAR");
    document.getElementById("NUEVA-RECTANGULO-BTN-CANCELAR");
}