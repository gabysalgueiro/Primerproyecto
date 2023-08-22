//Tarea 1
for (i=100;i>0;i-=10)
{
    console.log(i)
}
//tarea 2
let limite_superior=100
let limite_inferior=0

if (limite_inferior>=0&&limite_superior<=100&&limite_inferior<limite_superior){

    for (i=limite_superior;i>limite_inferior;i-=10)
    console.log(i)
}


let number = prompt("Introduce un número aleatorio: ");
if(number > 90 && number < 110) {
    alert("¡Bingo!");
} else {
    alert("¡Fallaste!");
