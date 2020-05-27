const botonLogear = document.getElementById("BotonLogear");
let elementosAagregar = [
    "<div id='elementoMenu0' class='menu-fondo'>esto es del menu",
    "<div id='elementoMenu1' class='ventanaColoreada'>",
    "<div id='elementoMenu2' class='H1ModificarSolicitud'>MODIFICAR SOLICITUD",
    "<div id='elementoMenu3' class='USUARIO_CONTRASEÑA'>USUARIO: <br>CONTRASEÑA: ",
    "<input id='elementoMenu4' class='ingresoDeUsuario' type='text' name='usuario' id='usuario'>",
    "<input id='elementoMenu5' class='ingresoDeContraseña' type='password' name='contraseña' id='contraseña'>",
    "<p id='elementoMenu8' class='loginResultado'></p>",
    "<div id='elementoMenu6' class='BotonAceptar'>",
    "<div id='elementoMenu7' class='ACEPTAR'>ACEPTAR</div></div></div></div></div></div>"
];
async function agregarAlFinal(itemAnterior,itemEventoSalir, items){
    items.forEach(await function(item){
        document.body.lastElementChild.insertAdjacentHTML("afterend",item);
    })
    //agregado solo para esta pantalla
    document.getElementById("elementoMenu6").addEventListener("click", function(){
        validarUsuarioCont();
    })
    document.getElementById("elementoMenu7").addEventListener("click", function(){
        validarUsuarioCont();
    })
}
async function removerAgregados(primero, items){
    for(let i = items.length-1;i>0;i--){
        console.log("eliminando-> "+i)
        await document.getElementById(primero).nextElementSibling.remove();
    }
    await document.getElementById(primero).remove();
}
botonLogear.addEventListener("click",async function(){
    await agregarAlFinal("ultimo","elementoMenu0",elementosAagregar);
    await document.getElementById("elementoMenu0").addEventListener("click",async function(){
        await removerAgregados("elementoMenu0",elementosAagregar);
    })
})
function validarUsuario(usuario){
    if(usuario.value.length > 0){
        return true;
    }else{
        return false;
    }
}
function validarContraseña(cont){
    if(cont.value.length > 0){
        return true;
    }else{
        return false;
    }
}
function validarUsuarioCont(){
    let usuario = document.getElementById("elementoMenu4");
    let cont = document.getElementById("elementoMenu5");
    let resultado = document.getElementById("elementoMenu8");
    if(validarUsuario(usuario) && validarContraseña(cont)){
        console.log("usuario y contraseña valida,"+validarUsuario(usuario)+","+validarContraseña(cont));
        return true;
    }else{
        console.log("usuario y contraseña no valida,"+validarUsuario(usuario)+","+validarContraseña(cont));
        resultado.textContent = "usuario o contraseña invalida";
        setTimeout(function(){
            resultado.textContent = " ";
        },2000)
        return false;
    }
}
