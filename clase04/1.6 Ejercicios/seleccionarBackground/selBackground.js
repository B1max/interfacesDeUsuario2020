let myColor = document.getElementById("txtcolor")
function cambiarColor(){
    let col = document.body.style.backgroundColor = myColor.value
    console.log("el color elegido es "+col);
}
function borrar(){
    myColor.value = ""
    document.body.style.backgroundColor = "white"
}
document.querySelector("#txtcolor").addEventListener('keydown', function (e) {
    if(e.keyCode==13){
        cambiarColor()
        console.log("apretaste enter")
    }
    if(e.keyCode==8){
        borrar()
    }
})
