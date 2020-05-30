function traerDatos(){

  document.querySelector('#boton').addEventListener('click', traerDatos);

  console.log('Dentro de la funcion');

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', '../json/tabla.json', true);
  xhttp.send();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      console.log(this.responseText)
      let datos = JSON.parse(this.responseText); //con esto obtengo un array de objetos
      // console.log(datos);
      let res = document.querySelector('#res');
      res.innerHTML = `
      
      <tr>
        <td>${item.Solicitudes}</td>
        
      </tr>  
        ` ;
      
      for(let item of datos){
        //console.log(item.Descripción)
      }
    }
    
  }
}