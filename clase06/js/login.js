const botonLogear = document.getElementById("BotonLogear");
let elementosAagregar = [
    "<div id='elementoMenu0' class='menu-fondo'>esto es del menu",
    "<div id='elementoMenu1' class='ventanaColoreada'>",
    "<div id='elementoMenu2' class='H1ModificarSolicitud'>MODIFICAR SOLICITUD",
    "<div id='elementoMenu3' class='USUARIO_CONTRASEÑA'>USUARIO: <br>CONTRASEÑA: ",
    "<input id='elementoMenu4' class='ingresoDeUsuario' type='text' name='usuario' id='usuario'>",
    "<input id='elementoMenu5' class='ingresoDeContraseña' type='password' name='contraseña' id='contraseña'>",
    "<div id='elementoMenu6' class='BotonAceptar'>",
    "<div id='elementoMenu7' class='ACEPTAR'>ACEPTAR</div></div></div></div></div></div>"
];
async function agregarAlFinal(itemAnterior,itemEventoSalir, items){
    items.forEach(await function(item){
        document.body.lastElementChild.insertAdjacentHTML("afterend",item);
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

// function removerAgregados(){
//     for(let i = 7;i>=0;i--){
//         let elementoMenu = document.getElementById("ultimo");
//         try{
//             // document.getElementById("elementoMenu"+i).remove;
//             elementoMenu.nextElementSibling.remove();
//             // elementoMenu.removeChild(document.getElementById("elementoMenu"+i));
//         }catch (e){
//             console.log("no se encontro el elemento a borrar -> "+e);
//         }
//     }
// }
// botonLogear.addEventListener("click",async function(){
//     console.log("se apreto el boton logear");

//     agregarAlFinal("ultimo","elementoMenu0",elementosAagregar)
//     await setTimeout(function(){
//         document.getElementById("elementoMenu0").addEventListener("click",function(){
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").nextElementSibling.remove();
//             document.getElementById("elementoMenu0").remove();
//             // removerAgregados();
//             // document.getElementById("elementoMenu0").parentElement.parentElement.remove();
//         });
//     },500);
// },false)
