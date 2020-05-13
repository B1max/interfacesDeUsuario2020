let imgMoney = document.getElementById("imgMoney")
let imgMiami = document.getElementById("imgMiami")
let imgRickyfort = document.getElementById("imgRickyfort")
let botonMoney = document.getElementById("money")
let botonMiami = document.getElementById("miami")
let botonRickyfort = document.getElementById("rickyfort")

function toggleImg(imagen){imagen.classList.toggle("oculto")}

botonMoney.addEventListener("click",function(){
    toggleImg(imgMoney)
},false)
botonMiami.addEventListener("click",function(){
    toggleImg(imgMiami)
},false)
botonRickyfort.addEventListener("click",function(){
    toggleImg(imgRickyfort)
},false)

imgMoney.addEventListener("click", function(){this.classList.toggle("oculto")},false)
imgMiami.addEventListener("click", function(){this.classList.toggle("oculto")},false)
imgRickyfort.addEventListener("click", function(){this.classList.toggle("oculto")},false)