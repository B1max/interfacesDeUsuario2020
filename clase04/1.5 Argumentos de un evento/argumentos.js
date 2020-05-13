document.body.addEventListener("click", function(infoEvento) {
    console.log(infoEvento)
})
// Copiá este código, pegalo en la consola y mueve el mouse
document.body.addEventListener("mousemove", function(infoEvento) {
    console.log("El mouse está en X: " + infoEvento.clientX + " Y: " + infoEvento.clientY)
})
document.querySelector("input").addEventListener('keydown', function (e) {
    document.querySelector('#code').textContent=e.keyCode
    document.querySelector('#string').textContent=String.fromCharCode(e.keyCode)
})