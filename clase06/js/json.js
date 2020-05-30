const { promises } = require('fs');
const fs = require("fs");
const util = require("util");
const archivoJson = '../json/tabla.json';

function convertirR() {
    return fs.readFileSync("../json/tabla.json", "utf8")
         .split("\n")
         .map(string => string.trim())
         .map(string => string.replace("{",""))
         .map(string => string.replace("{",""))
         .map(string => string.replace("}",""))
         .map(string => string.replace("\"Solicitudes\": [",""))
         .map(string => string.replace(",",""))
         .map(string => string.replace("]",""))
         .map(string => string.replace("\"Fecha Solicitud\": \"",""))
         .map(string => string.replace("\"Descripción\": \"",""))
         .map(string => string.replace("\"Estado\": ",""))
         .map(string => string.replace("\"",""))

         .map(string => string.replace("Abierta\"","Abierta"))

         .map(string => string.replace("En progreso\"","En progreso"))

         .map(string => string.replace("Cerrada\"","Cerrada"))

         .filter(string => string.length > 0)
}
async function agregar(fecha,descripcion,estado){
    let arrDatos = convertirR();
    console.log("largo del array recibido-> "+arrDatos.length);
    let resultante;
    const inicio =""+"{\n"+"    \"Solicitudes\": [\n";
    const final ="\n    ]\n"+"}";
    resultante = inicio;
    arrDatos.push(fecha);
    arrDatos.push(descripcion);
    arrDatos.push(estado);

    for(let i = 0;i<arrDatos.length;i+=3){
        if(i>0){resultante +=",\n"}
        resultante += 
        "        {\n"+
        "            \"Fecha Solicitud\": \""+arrDatos[i]+"\",\n"+
        "            \"Descripción\": \""+arrDatos[i+1]+"\",\n"+
        "            \"Estado\": \""+arrDatos[i+2]+"\"\n"+
        "        }";
    }
    resultante += final;
    console.log("ubicacion 0 ->"+resultante);
    fs.truncate(archivoJson, 0, function(){
        console.log('done');
        fs.writeFileSync(archivoJson,resultante);
    })
    console.log("mostrando json "+resultante+"\n");
}

// agregar("test2","test2","En progreso");
