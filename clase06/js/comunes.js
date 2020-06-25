const debug = true;
let logs = [];

function UTIL_BORRAR_HTML_pID(ids,info){
    
    let  estados = [];
    for(let i = 0;i<ids.length;i++){
        try {
            document.getElementById(ids[i]).removeEventListener("click",function(){});
        } catch (error) {
            console.log("no hay evento para eliminar");
        }
        try {
            document.getElementById(ids[i]).remove();
            estados.push([i,ids[i],true,""]);
        } catch (error) {
            estados.push([i,ids[i],false,error]);
        }
    }
    if(debug){
        console.log("HTML modificado, se borraron los siguentes IDs")
        console.log(estados);
        console.log("---------------"+info+"-----------------");
    }
}




function UTIL_dibujar_HTML(html){
    html.forEach(function(item){
        try {
            document.body.lastElementChild.insertAdjacentHTML("afterend",item);
        } catch (error) {
            console.log("error dibujando items->"+error);
        }
    });
}




function UTIL_dibujar_HTML2(posicion,html){
    let pos = document.getElementById(posicion);
    html.forEach(function(item){
        try {
            pos.insertAdjacentHTML("afterend",item);
        } catch (error) {
            console.log("error dibujando items->"+error);
        }
    });
}




function UTIL_agregarEvento_pID(lista){
    let resultado = [];
    for(let i = 0;i<lista.lenght;i++){

        let id = lista[i][0];
        let even = lista[i][1];
        let func = lista[i][2];

        let elemento = document.getElementById(id);

        if(elemento!=null){
            elemento.addEventListener(even,func);
        }else{
            if(debug){
                console.log("UTIL: no se puedo agregar el evento "+even+" al id: "+id);
            }
        }
    }
}




function UTIL_quitarEvento_pID(ids,info){
    let resultado =[];
    for(let i = 0;i<ids.length;i++){
        let id = ids[i][0];
        let even = ids[i][1];
        let item = document.getElementById(id);
        if(item!=null){
            item.removeEventListener(even,function(){});
            resultado.push([id,even,true]);
        }else{
            resultado.push([id,even,false]);
        }
    }
    console.log("UTIL: modificaciones de los eventos(quitar)");
    console.log(resultado);
    console.log("---------------"+info+"-----------------");
}




class alerta{
    alerta(){
    }
    mostrar(texto){
        document.body.firstElementChild.insertAdjacentHTML("beforeend","<div id='alerta' class='alerta'>"+
        "<p id='Palerta' class='Palerta' ></p></div>");
        document.getElementById("Palerta").textContent = ""+texto;
        setTimeout(function(){
            document.getElementById("alerta").remove();
        }
        ,3000);
    }
}



class menu{
    static estado = false;
    static pos_inicial = "";
    static ultimo = "ultimo";
    static id_menu =[];
    static html_menu =[];
    static ids_botones =[];
    static html_botones=[];
}



function menu_mostrar_ocultar(menu = new menu()){
    if(menu.estado){
        UTIL_BORRAR_HTML_pID(menu.ids_botones);
        menu.estado=false;
    }else{
        const inicial = document.getElementById(menu.ultimo).parentNode;
        if(inicial != null){
            menu.html_botones.forEach(async function(item){
                console.log("agregando items de menu");
                await inicial.insertAdjacentHTML("beforeEnd",item);
            })
            menu.estado=true;
        }
    }
}



function menu_cargar(eventos, menu){
    const inicial = document.getElementById(menu.pos_inicial);
    if(inicial != null){
    menu.html_menu.forEach(function(item){
        inicial.insertAdjacentHTML("beforeend",item);
    })
    eventos(menu);
    }else{
        console.log("error [punto inicial es nulo]")
    }
}



function menu_salir(menu= new menu()){
    menu.estado = false;
    UTIL_BORRAR_HTML_pID([menu.id_menu]);
    UTIL_BORRAR_HTML_pID(menu.ids_botones);
}
//--------pantalla------------



class pantalla{
    static punto_inicial = "contenedor";
    static menuAsociado = new menu();
    static ids_general = [];
    static html_general = [];
    static evento = {};
}




async function pantalla_cargar(pan){
    const inicial = document.getElementById(pan.punto_inicial);
    if(inicial!=null){
        pan.html_general.forEach(function(panHtml){
            inicial.insertAdjacentHTML("beforeend",panHtml);
        });
        // await eventos();
        // await pan.eventos();
        // pan.evento["menu"]();
        if(pan.menuAsociado!=null && pan.eventoMenu!=null){
            menu_cargar(pan.eventoMenu.evento.self, pan.menuAsociado);
        }
    }else{
        logs.push("el punto inicial de ${pan} no existe o es incorrecto");
    }
}




function pantalla_salir(pan){
    UTIL_BORRAR_HTML_pID(pan.ids_general);
    if (pan.menuAsociado[1]){
        menu_salir(pan.menuAsociado[1]);
    }
}
