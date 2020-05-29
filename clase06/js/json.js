// Para empezar, se debe almacenar la URL del JSON que se quiere recuperar en una variable. Agregue lo siguiente al final del código JavaScript:
const requestURL = '../json/tabla.json';
// Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud desde el constructorXMLHttpRequest, utilizando la palabra clave new. Agregue lo siguiente a continuación de la última línea:
const request = new XMLHttpRequest();
// Ahora es necesario abrir una nueva solicitud utilizando el método open(). Agregue la siguiente línea:
request.open('GET', requestURL);
// Esto requiere al menos dos parámetros — Existen otros parámetros opcionales disponibles. Sólo se requieren los dos obligatorios para este ejemplo:
request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}