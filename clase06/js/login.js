const botonLogear = document.getElementById("BotonLogear");
const itemsMenu = document.getElementById("elementoMenu");
itemsMenu.style.visibility = "hidden";
botonLogear.addEventListener("click",function(){
    itemsMenu.style.display = ((e.style.display!='none') ? 'none' : 'block');

    // e.style.display = ((e.style.display!='none') ? 'none' : 'block');
})
