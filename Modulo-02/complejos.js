
//Sin Objeto asignar registros
let nombre1="Gabriela"
let apellido1="Salgueiro"
let edad1=40
let correo1="Gabriela.salgueiro@gmail.com"
console.log(nombre1,apellido1,edad1,correo1)

let nombre2="Francisco"
let apellido2="Zenteno"
let edad2=50
let correo2="francisco.zenteno@gmail.com"

console.log(nombre2,apellido2,edad2,correo2)

//Con Objeto
let user1={nombre:"Calvin",
apellido:"Hart",
edad:66,
email:"calvin.hart@gmail.com"}

console.log(user1);
//acceder a un elemento de ese objeto
console.log(user1.nombre)
console.log(user1.apellido)

//Arreglos
let dias=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
console.log(dias[0])
console.log(dias[1])
console.log(dias[2])
console.log(dias[3])
console.log(dias[4])
console.log(dias[5])
console.log(dias[6])
//Las variables primitivas son indivisibles, 
//el resultado de asignar M a la posicion 0 de esta cadena no es Mose, o M sigue siendo Jose
let nombre="Jose"
nombre[0]="M"
console.log(nombre);

//Sin embargo un elemento de un dato complejo como un arreglo si se puede cambiar
let days=["Sun","Mon"]
days[0]="Sunday"
console.log(days)

 // ARRAY VACIO
let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
 // ARRAY CON CONSTRUCTOR
let arr=Array(10)
console.log(arr)


let comida=[["🥑","🥦","🥩"],["🍕","🌭","🍔","🍟"]]
console.log(comida[0][2]);
console.log(comida[1][3]);
console.log(comida[0][1],comida[1][2]);
//Cuando se asigna un objeto a una variable, ojo con lo asignado, no es 
//solo un valor, se puede verificar el tipo
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femalenanes=names[0] //asigno "Olivia", "Emma", "Mia", "Sofia"
console.log(femalenanes)
console.log(femalenanes[0]) //Olivia
console.log(femalenanes[2]) //Mia
//Arreglo de registros distintos tipos de datos
let usuarios= [{name:"Calvin Hart", edad:50,correo:"calvin.hart@gmail.com"},
               {name:"Ariana Grande",edad:20,correo:"ariana.grande@gmail.com"},
               {name:"Paulo Loayza",edad:49,correo:"paulo.loayza@gmail.com"}]
console.log(usuarios)
//Prueba objetos diferentes tipos de datos
let prueba=["Juan", 23, "gaby",123212n]
console.log(prueba)
console.log(prueba[0])
console.log(prueba[1])
console.log(prueba[2])
console.log(prueba[3])


//metodos de arreglos
//typeof
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

//intanceof
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false
//lenght
let names1  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names1.length); // -> 4
//agrego un nuevo elemento a la posicion 5, la 4 esta vacia
names1[5] = "Amelia";
//nuevo lenght
console.log(names1.length); // -> 6

console.log(names1); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names1[3]); // -> Samuel
console.log(names1[4]); // -> undefined
console.log(names1[5]); // -> Amelia

//?length
frutas=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas.length); //5

//indexof
let frutas=["🍈","🍊","🥝","🍇","🥭"]
console.log(frutas.indexOf("🍇"))//3
console.log(frutas.indexOf("🍈"))//0
console.log(frutas.indexOf("🥭"))//4
console.log(frutas.indexOf("🥝"))//2
console.log(frutas.indexOf("🍊"))//1
//lastIndexOf
let comidas=["🍕","🥩","🥩","🌭","🍗","🍦","🥣"]
console.log(comidas.lastIndexOf("🥩"))//5
console.log(comidas.lastIndexOf("🍟"))
console.log(comidas.lastIndexOf("🌭"))
console.log(comidas.lastIndexOf("🥣"))
console.log(comidas.lastIndexOf("🍗"))
console.log(comidas.lastIndexOf("🍕"))
console.log(comidas.lastIndexOf("🍦"))
//Push - Agrega Elemento
let frutas1=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas1);
frutas1.push("🍉")
console.log(frutas1);

//unshift agrega uno o más elementos al inicio del array,
// y devuelve la nueva longitud del array
let frutas1=["🥝","🍓","🍊","🍋","🍊"]  
frutas1.unshift("🍉")
console.log(frutas1);

//shift elimina el elemento en el índice cero y desplaza los valores 
//consecutivos hacia abajo, devolviendo el valor eliminado
let frutas1=["🥝","🍓","🍊","🍋","🍊","🍉"]  
console.log(frutas1.shift())
console.log(frutas1);

//Pop elimina el último elemento de un array y lo devuelve.
// Este método cambia la longitud del array.
let frutas1=["🥝","🍓","🍊","🍋","🍊","🍉"]
console.log(frutas1.pop())
console.log(frutas1);

//reverse nvierte el orden de los elementos de un array in place. 
//El primer elemento pasa a ser el último y el último pasa a ser el primero.
frutas1=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas1)
console.log(frutas1.reverse());

//Slice devuelve una copia de una parte del array dentro de un nuevo array 
//empezando por inicio hasta fin (fin no incluido)
//valor unico positivo
let names=["Olivia","Emma","Mateo","Samuel","Camila"]
n1=names.slice(2)
console.log(n1) //-> ["Mateo", "Samuel","Camila"]
//2 valores positivos
//            0       1       2        3       4        5
let names=["Olivia","Emma","Mateo","Samuel","Camila","Juana"]
n2=names.slice(2,5) //posicion inicial 2,  5 posicion final -1 =4
console.log(n2) //mateo, samuel, camila

//2 valores positivo y negativo
//            0       1       2        3       4        5
let names=["Olivia","Emma","Mateo","Samuel","Camila","Juana"]
n3=names.slice(2,-3) //posicion inicial 2,  -3 ultimos elementos
console.log(n3) //Mateo

//1 valor negativo
let names=["Olivia","Emma","Mateo","Samuel","Camila","Juana"]
n4=names.slice(-2)   //-2 ultimos elementos
console.log(n4) //"Camila","Juana"

//Metodo Concat se usa para unir dos o más arrays. Este método no cambia los arrays existentes, 
//sino que devuelve un nuevo array
let frutas2=['🍋','🍊','🍓']
let comidas2=['🍕','🍔','🍟','🌭']
let frutaComida=frutas2.concat(comidas2)
console.log(frutaComida);


//mas ejercicios
const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(ensalada)
let arreglo1=Array(2) //creará un arreglo de longitud 2 y ninguno de los elementos son definidos en él. Sin embargo, 
let arreglo2=Array(1,2) //creará un arreglo de longitud dos con elementos 1 y 2 en él.
console.log(arreglo1)
console.log(arreglo2)

console.log(Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'])); // returns true
console.log(Array.isArray('🍅')); // returns false
console.log(Array.isArray({ 'tomate': '🍅'})); // returns false
console.log(Array.isArray([])); // returns true



//Laboratorio 

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

   // Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
   contacts.push({name:"Maisie Haley",phone:"0913 531 3030",email:"risus.Quisque@urna.ca."})
   console.log(contacts);
   let primerContacto= contacts[0]
   let ultimoContacto= contacts[contacts.length-1]
   console.log(primerContacto.name + ' / '+ ultimoContacto.name);
   console.log(primerContacto.email + ' / '+ ultimoContacto.email);
   console.log(primerContacto.phone + ' / '+ ultimoContacto.phone);