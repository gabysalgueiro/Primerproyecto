const ancho=580;
const alto= 400;

// genera la posicion del objetivo llamando a una funcion para generar numeros aleatorios
let objetivo ={
    x:generar_numero_aleatorio(ancho),
    y:generar_numero_aleatorio(alto)
};


let $map=document.querySelector("mapa");
let $distancia=document.querySelector("distancia"); 

let titulos3=document.getElementById("distancia")

let clicks=0;
//Funcion que lee los clicks del usuario y compara con el objetivo calculando distancia entre ellos
//con la funcion calcula_distancia
//Con esta distancia y en base al rango de valores devuelve una pista o mensaje para que el usuario
//sepa si esta cerca o lejos del tesoro
function myFunc(el_click)
{
 clicks++;
 let distancia=calcula_distancia(el_click,objetivo);
  let pista=distancia_mensaje(distancia);
 document.getElementById("distancia").innerHTML=`Pista`;
 let titulos3=document.getElementById("distancia");
  document.getElementById("distancia").innerHTML=pista;

 if (distancia < 30 ) {
    alert(`Tesoro encontrado en ${clicks} clicks!`);
    location.reload();
  }



 


}



//document.getElementById("myBtn")
document.addEventListener("click", myFunc);




