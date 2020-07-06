class pantalla_usuarios extends pantalla{
  static selectAll = false;
  static menuAsociado = Menu_usuarios;
  static ids_general = ["contenedorDeSolicitudes","tabla"];
  static html_general = [ "<div id='contenedorDeSolicitudes' class='contenedorDeSolicitudes'>"+
  "<table id='tabla' class='tabla'>"+
              "<tr>"+
                  "<td class='colCheck'>"+
                      "<input type='checkbox' id='UcheckAll' class='check'>"+
                  "</td>"+
                  "<td class='colFecha'>"+
                      "Avatar"+
                  "</td>"+
                  "<td class='colDescripcion'>Nombre</td>"+
                  "<td class='colEstado'>Estado</td>"+
              "</tr>"+
          "</table></div>"];


  static eventos = async function(){
    await DB_traer_JSON_USERS();
    await USUARIOS_mostrar_usuarios();
    document.getElementById("UcheckAll").addEventListener("click", function(){
        if(this.selectAll){
          USUARIOS_seleccion = [];
          this.selectAll = false;
        }else{
          USUARIOS_seleccion = [];
          for(let i = 0;i<USUARIOS.length;i++){
            USUARIOS_seleccion.push(i);
          }
          this.selectAll = true;
        }
        for(let i = 0;i<USUARIOS.length;i++){
            document.getElementById("userCheck"+i).checked = this.selectAll;
        }
    });
  };

}





async function USUARIOS_mostrar_usuarios(){
  for(let i = 0 ; i < USUARIOS.length ; i++){
    let id = i;
    let avatar = USUARIOS[i][2];
    let nombre = USUARIOS[i][3];
    let activo = USUARIOS[i][4];
    USUARIOS_mostrar_usuario(id,avatar,nombre,activo);
  }
}




function USUARIOS_mostrar_usuario(id,avatar,nombre,activo){
  document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr id='user"+id+"'>"+
  "<td id='userColCheck"+id+"' class='colCheck'>"+
  "<input type= 'checkbox' id='userCheck"+id+"' class= 'check '>"+
  "</td>"+
  "<td id='userColAvatar"+id+"' class= 'colAvatar'>"+
  "<img id='avatar"+id+"' src='"+avatar+"'>"+
  "</td>"+
  "<td id='userColNombre"+id+"' class='colNombre'>"+nombre+"</td>"+
  "<td id='userColEstado"+id+"' class='colActivo'>"+activo+"</td>"+
  "</tr>");

  USUARIOS_IDs_tabla.push("user"+id);
  document.getElementById("userCheck"+id).removeEventListener("click",function(){});
  document.getElementById("userCheck"+id).addEventListener("click",async function(){
    console.log("item seleccionado");
    let seleccion = USUARIOS[id];
    if(document.getElementById("userCheck"+id).checked){
      USUARIOS_seleccion.push(seleccion);
    }else{
      for(let i = 0; i < USUARIOS_seleccion.length; i++){
        if(USUARIOS_seleccion[i]==seleccion){
          USUARIOS_seleccion.splice(i,1);
        }
      }
    }
    console.log(USUARIOS_seleccion);
  });
}





async function USUARIOS_eliminar_seleccion(){
  for(let i = 0; i < USUARIOS_seleccion.length; i++){
    USUARIOS.forEach(usuario=>{
      if(usuario==USUARIOS_seleccion[i]){
        USUARIOS.splice([USUARIOS.indexOf(usuario)],1);
      }
    });
  }
  USUARIOS_seleccion = [];
}
