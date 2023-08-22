// funcion para generar numero aleatorio, se usara para esconder el tesoro 
//cada vez que se reinicia el juego en diferente posicion

let generar_numero_aleatorio=size =>{
    return Math.floor(Math.random()*size)
}


//Usado para calcular la distancia entre  el click del jugador y la posisicion del tesoro
//calcula la distancia entre dos coordenadas usando el teorema de pitagoras a2=b2+c2
let calcula_distancia= (el_click,objetivo)=>{
    let dif_eje_x= el_click.offsetX - objetivo.x;
    let dif_eje_j= el_click.offsetY - objetivo.y;
    console.log("f(x) Coordenadas del click",el_click.offsetX,el_click.offsetY)
    console.log("f(x) Coordenadas del objetivo",objetivo.x,objetivo.y);
    console.log("f(x) Distancia: ",Math.sqrt((dif_eje_x*dif_eje_x)+(dif_eje_j*dif_eje_j)))
    return Math.sqrt((dif_eje_x*dif_eje_x)+(dif_eje_j*dif_eje_j));

}

//Funcion que muestra mensajes o pistas entre el click del usuario con el tesoro
let distancia_mensaje = distancia => {
    if (distancia<=30) {
          return "Encontrado!!!";
                   } 
    else if (distancia<40) {
         return "Caliente, Caliente!!";  
                        }
        else if (distancia<60) {
             return "Caliente";
                        }
                else if (distancia<300) { 
                 return "Tibio";
                        }
                    else if (distancia<500) {
                            return "Frio";
                        }
                        else {
                             return "Congelado";
                             };
      
}