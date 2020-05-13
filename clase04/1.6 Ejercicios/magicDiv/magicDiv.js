let imagen = document.getElementById("imagen");
let myDiv = document.getElementById("magic");

function ocultar(){
    console.log("imagen ocultada")
    imagen.classList.toggle("oculto")
}
if(myDiv!=null){
    myDiv.addEventListener("mouseover",ocultar)
}else{console.log(myDiv)}