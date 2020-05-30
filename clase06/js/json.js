const { promises } = require('fs');
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const archivoJson = '../json/tabla.json';
const appendFile = util.promisify(fs.appendFile);
const writeFile = util.promisify(fs.writeFileSync);

function convertirR() {
    return fs.readFileSync("../json/tabla.json", "utf8")
         .split("\n")
         .map(string => string.trim())
         .map(string => string.replace("{",""))
         .map(string => string.replace("}",""))
         .map(string => string.replace("\"Solicitudes\": [",""))
         .map(string => string.replace(",",""))
         .map(string => string.replace("]",""))
         .map(string => string.replace("\"Fecha Solicitud\": \"",""))
         .map(string => string.replace("\"Descripción\": \"",""))
         .map(string => string.replace("\"Estado\": ",""))
         .map(string => string.replace("\"",""))
         .filter(string => string.length > 0)
}
async function jsonificar(arrDatos){
    console.log("largo del array recibido-> "+arrDatos.length);
    let resultante;
    const inicio =""+"{\n"+"    \"Solicitudes\": [\n";
    const final="\n    ]\n"+"}";
    resultante += inicio;
    for(let i = 0;i<arrDatos.length;i+=3){
        if(i!=0){resultante +=",\n"}
        console.log("agregando->"+arrDatos[i]+"-"+arrDatos[i]+"-"+arrDatos[i])
        resultante += 
        "        {\n"+
        "            \"Fecha Solicitud\": \""+arrDatos[i]+"\",\n"+
        "            \"Descripción\": \""+arrDatos[i+1]+"\",\n"+
        "            \"Estado\": \""+arrDatos[i+2]+"\n"+
        "        }";
    }
    resultante += final;
    console.log("ubicacion 0 ->"+resultante[0]);
    resultante[0]="";
    resultante[1]="";
    resultante[2]="";
    resultante[3]="";
    resultante[4]="";
    resultante[5]="";
    resultante[6]="";
    resultante[7]="";
    resultante[8]="";
    // let datosAgrabar = JSON.stringify(resultante);
    // console.log("datos a grabar-> "+datosAgrabar)
    // fs.truncate(archivoJson)
    fs.truncate(archivoJson, 0, function(){
        console.log('done');
        fs.writeFileSync(archivoJson,resultante);
    })
    console.log("mostrando json "+resultante+"\n");
}


console.log(convertirR());

jsonificar(convertirR());
/* }).then(res=> res.split("\""))
     // .then((res)=>{
     //     res.split("\n")
         // .map(string => string.trim())
         // .map(string => string.replace("{",""))
         // .map(string => string.replace("}",""))
         // .map(string => string.replace("\"Solicitudes\": [",""))
         // .map(string => string.replace(",",""))
         // .map(string => string.replace("]",""))
         // .map(string => string.replace("\"Fecha Solicitud\": \"",""))
         // .map(string => string.replace("\"Descripción\": \"",""))
         // .map(string => string.replace("\"Estado\": ",""))
         // .map(string => string.replace("\"",""))
         // .filter(string => string.length > 0)
         return raw;
         /*
     }).then(rawData=>{
         // console.log("items->"+conv.length)
         // let conv = Array.from(rawData);
         let conv = JSON.stringify(rawData,null,2);
         let arr =[]
         for(let i = 0;i<conv.length;i+=3){
             let temp = [conv[i],conv[i+1],conv[i+2]];
             arr.push(temp);
             console.log("agregando"+temp)
         }
         // return arr;
     }).catch((error)=>{
         if (error){
             console.log("error?"+error)
         }
     })*/
/*
function guardar(datos){
    const nuevosDatos =","+
    "       {"+
        "            \"FechaSolicitud\": \"20/2/2020\""+
        "            \"Descripción\": \"asasdklgjnafkgljnafkgjnafg\""+
        "            \"Estado\": \"En progreso\""+
        "       }"+
    "    ]"+
    "}";
    datos.push(nuevosDatos);
    const data = JSON.stringify(datos+nuevosDatos,null,2);
    // console.log("stringyfy-> "+data)
    fs.writeFileSync(archivoJson,"data",function(err){
        console.log("grabando?")
        if(err){
            console.log("error guardando archivo: "+err);
        }else{
            console.log("grabado ok");
        }
    });
}*/

// agregar("20/5/2020","holaaaaaaaaaaaaaaaa","En progreso");
// jsonificar(convertirR)

//   console.log(convertirR());

// async function escribirSobreJson(fecha,descripcion,estado){
    /*{
        "Solicitudes": [
            {
                "FechaSolicitud": "30/03/2020",
                "Descripción": "Pedido de notebook",
                "Estado": "Abierta"
            },
            {
                "FechaSolicitud": "03/04/2020",
                "Descripción": "Cambio de horario",
                "Estado": "En progreso"
            },
        {
            "FechaSolicitud": "12/05/2020",
            "Descripción": "Pedido de una bicicleta para llegar a la universidad",
            "Estado": "Cerrada"
        }
    ]
}*/
//     readFile("../json/tabla.json", "utf8")
//     .then((res)=>{
//         const json = Array.from(res);
//         res.appendFile("testttttttttttt");
//         return [json,json[json.length-4],json[json.length-3],json[json.length-2],json[json.length-1]];
//     }).then((arr)=>{
//         arr.pop()
//     })
//       const inicio = "{        \"Solicitudes\": [";
//   }

 /*
readFile("../json/tabla.json", "utf8").then((res)=>{
    const json = Array.from(res);
    const final = [json.pop(),json.pop(),json.pop(),json.pop()].reverse;
    
    const item =
    ","+
    "    {"+
    "        \"FechaSolicitud\": \"12/05/2029\",\n"+
    "        \"Descripción\": \"Pedido de una bicicleta para llegar a la universidad\",\n"+
    "        \"Estado\": \"Cerrada\"\n"+
    "    }"
    ;
    appendFile("../json/tabla.json",item);
    const sacar = json[json.length-1];
    const anteultimo = json[json.length-4];
    console.log("ante ultimo elem a sacar"+anteultimo);
    console.log("ultimo elem a sacar"+sacar);
})
*//*
var req = new XMLHttpRequest();
req.open('GET', "../json/tabla.json", true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      dump(req.responseText);
     else
      dump("Error loading page\n");
  }
};
req.send(null); */
// async function leerJson(){
//     const myJson =fs.readFileSync(archivoJson);
//     const palabras = JSON.parse(myJson);
//     return palabras;
// }
/*
function agregar(fecha,desc,estado){
    const jsonPuro = fs.readFile(archivoJson,"utf8",function(err,data){
        if(err){
            console.log("error leyendo archivo");
        }else{
            console.log("archivo leido -> "+data)
        }
    });
    // console.log("jsonPuro-> "+jsonPuro)
    return jsonPuro;
}*/
/*
{
    "Solicitudes": [
        {
            "Fecha Solicitud": "30/03/2020",
            "Descripción": "Pedido de notebook",
            "Estado": "Abierta"
        },
        {
            "Fecha Solicitud": "03/04/2020",
            "Descripción": "Cambio de horario",
            "Estado": "En progreso"
        },
        {
            "Fecha Solicitud": "12/05/2020",
            "Descripción": "Pedido de una bicicleta para llegar a la universidad",
            "Estado": "Cerrada"
        }
    ]
}*/