let parrafos = document.getElementsByTagName("p");
for(let i = 0 ; i<parrafos.length;i++){
        parrafos[i].addEventListener("click",function(){
            parrafos[i].classList.toggle("resaltado")
        },false)
}
