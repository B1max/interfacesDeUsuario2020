const botonLogear = document.getElementById("BotonLogear");
const itemsMenu = document.getElementById("elementoMenu");
itemsMenu.style.display ='none'; 
botonLogear.addEventListener("click",function(){
    console.log("se apreto el boton logear")
    itemsMenu.style.display = 'block';
},false)
