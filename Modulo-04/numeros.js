const PI=Math.PI

console.log(Math.floor (PI))
console.log(Math.round (PI))
console.log(Math.ceil (PI))
console.log(Math.min(-3,-4,8,20))
console.log(Math.max(-3,-4,8,20))

//No toca el numero 11, genera numeros del 1 al 10 randomicos
//const numero_randomico=Math.random() genera numeros entre 0 a 0,9999 nunca 1
for(i=1;i<10;i++) {
const numero_randomico=Math.round(Math.random()*11)
console.log(numero_randomico)}


for(i=1;i<10;i++)
console.log(Math.PI.toFixed(i))