function suma (a,b) {
      return a+b;   }


function resta (a,b) {
    return a-b;
}

function multiplicacion (a,b) {
    return a*b
}
function division (a,b) {
    
    return a/b
}

function calculadora (a,b,operacion)
{
     if (operacion==='*')
     { return multiplicacion(a,b)}
}

let a=3
let b=2

let suma1=suma (a,b);
let resta1=resta(a,b);
let multi1=multiplicacion(a,b);
let divi1=division(a,b);

console.log (`La suma de ${a} y ${b} es ${suma1}`)
console.log (`La resta de ${a} y ${b} es ${resta1}`)
console.log (`La Multi de ${a} y ${b} es ${multi1}`)
console.log (`La Divi de ${a} y ${b} es ${divi1}`)

let suma=a+b
let resta=a-b
let multiplicacion=a*b
let division =a/b
