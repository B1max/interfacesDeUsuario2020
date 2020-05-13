let ultimo = document.getElementById("boton")
let primera = true;
const seEjecutaEnEvento = (()=>{document.body.classList.toggle("color")})
function bep3(){
    let ultimo = document.body.firstElementChild
    ultimo.insertAdjacentHTML("afterend","<p>beep</p>")
    seEjecutaEnEvento()
}

document.querySelector("button").addEventListener("click",bep3)

function bep(){
    let parrafo = document.createElement('p');
    parrafo.textContent = "beep"
    ultimo.parentNode.appendChild(parrafo,ultimo)
    }
function bep2(){
    let parrafo;
        if(primera){
            parrafo = document.createElement('p');
            parrafo.textContent = "beep"
            parrafo.id = "parrafo";
            ultimo.parentNode.appendChild(parrafo,ultimo)
            primera = false;
        }else{
            let myParrafo = document.getElementById("parrafo");
            myParrafo.textContent += " beep";
        }
    }