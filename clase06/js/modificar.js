function htmlPantallaModificar(fecha,desc,estado){ 
    return ["<div id='NUEVA-RECTANGULO-FONDO' class='NUEVA-RECTANGULO-FONDO'>"+
"<P id='NUEVA-TXT-TITULO' class='NUEVA-TXT-TITULO'>MODIFICAR SOLICITUD</P>"+
"<P  id='NUEVA-TXT-FECHA' class='NUEVA-TXT-FECHA' required>FECHA:</P>"+
"<INPUT type='date'  id='NUEVA-INPUT-FECHA' class='NUEVA-INPUT-FECHA' > </INPUT>"+
"<P  id='NUEVA-TXT-DESCRIPCION' class='NUEVA-TXT-DESCRIPCION'>DESCRIPCÍON:</P>"+
"<textarea  id='NUEVA-TXTTAREA-DESCRIPCION' vclass='NUEVA-TXTTAREA-DESCRIPCION'" +
"cols='30' rows='10' maxlength='100' required></textarea>"+
"<p  id='NUEVA-TXT-ESTADO' class='NUEVA-TXT-ESTADO'>ESTADO:</p>"+
"<select  id='NUEVA-INPUTLIST-ESTADO' class='NUEVA-INPUTLIST-ESTADO' required>"+
"    <option value='Abierta'>Abierta</option>"+
"    <option value='En progreso'>En progreso</option>"+
"    <option value='Cerrada'>Cerrada</option>"+
"</select>"+
"<div  id='NUEVA-RECTANGULO-BTN-CANCELAR' class='NUEVA-RECTANGULO-BTN-CANCELAR' >CANCELAR</div>"+
"<div  id='NUEVA-RECTANGULO-BTN-ACEPTAR' class='NUEVA-RECTANGULO-BTN-ACEPTAR' >ACEPTAR</div>"+
"</div>"];
};

function dibujarPantallaModificar(){
    const inicial = document.getElementById("ultimo").parentNode;

    console.log("dibujando pantalla nuevo");
    htmlPantallaModificar("25/5/85","teeesssstttt","Aceptado").forEach(async function(item){
        console.log("agregando items de pantalla nuevo");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
    document.getElementById("NUEVA-TXT-FECHA").defaultValue = "1985/5/5";
    // document.getElementById("NUEVA-TXTTAREA-DESCRIPCION").value = "teeesssstttt";
    document.getElementById("NUEVA-INPUTLIST-ESTADO").value = "En progreso";
}