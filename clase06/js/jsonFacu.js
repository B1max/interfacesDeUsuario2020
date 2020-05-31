// src="solicitudesJSON.js">

//crud de json crear actualizar eliminar y modificar

// let contenido = document.querySelector('#contenido');

//obtengo el json
const requestURL = '../json/tabla.json';

//creo la solicitud y lo agrego a la ultima linea
const respuesta = new XMLHttpRequest();

//abro la solicitud
respuesta.open('GET', '../json/tabla.json', true);

//lo convierto en segundo plano en un objeto JavaScript y  envio la solicitud con send
respuesta.responseType = 'json';
respuesta.send();

respuesta.onload = async function() {
  const tabla = respuesta.response;
  const solicitudes = tabla['Solicitudes'];
  let fecha = solicitudes[0]['Fecha solicitud'];
  let desc = solicitudes['Descripción'];
  let estado = solicitudes['Estado'];
  console.log("fecha"+fecha)
  await agregarSolicitud(fecha,desc,estado);
  // populateHeader(tabla);
  // mostrarSolicitudes(tabla);
}

//una vez obtenidos los datos de la tabla y convertidos en js , agrego las siguientes definiciones
function populateHeader(jsonObj) {
  const datos = document.createElement('h1');
  datos.textContent = jsonObj['squadName'];
  header.appendChild(datos);

  const myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

function mostrarSolicitudes(jsonObj) {
  const datos = jsonObj['Solicitudes']; 
      
  for (var i = 0; i < datos.length; i++) {
    
    const articulo = document.createElement('article');
    const descripcion = document.createElement('p');
    const fechas = document.createElement('p');
    const estado = document.createElement('p');
    const informacion = document.createElement('ul')

    descripcion.textContent = 'Descripción: ' + Solicitudes[i].Descripción;


    fechas.textContent = 'FechaSolicitud: ' + Solicitudes[i].FechaSolicitud;

    estado.textContent = 'Estado: ' + Solicitudes[i].Estado;
     
    ;

    const solicitud = datos[i].Solicitudes;
    for (var j = 0; j < tabla.length; j++) {
      const listItem = document.createElement('soli');
      listItem.textContent = tabla[j];
      informacion.appendChild(listItem);

    }
    articulo.appendChild(articulo)
    articulo.appendChild(descripcion);
    articulo.appendChild(fechas);
    articulo.appendChild(estado);
    articulo.appendChild(informacion)

    section.appendChild(articulo);
  }
}