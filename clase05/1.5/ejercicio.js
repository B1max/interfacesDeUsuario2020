function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}
var size8 = cambiarDimensionFuente(8);
var size16 = cambiarDimensionFuente(16);
var size24 = cambiarDimensionFuente(24);

function setClicks(){
    document.getElementById('fuente-8').onclick = size8;
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}