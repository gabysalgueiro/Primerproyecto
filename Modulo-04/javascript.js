

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;




console.log (userAge)
console.log(isFemale)
console.log(points)
console.log(cartValue)
console.log(shippingCost)
console.log(userAge > 21)
//version corta  usando AND
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}
console.log(shippingCost);

//Version Larga
if (userAge > 21) {
    console.log(cartValue >= 300 || points >= 500)
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost);





let isUserReady = confirm("¿Estás listo?");

if (isUserReady) {
    console.log("¡Usuario listo!");
} else {
    console.log("¡Usuario no esta listo!");
}



const INSURANCE_COST = 2.99;
let shippingCost = 9.99;
let isOrderValid = true;
let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

console.log("Inicio Programa")
console.log(`Constante: ${INSURANCE_COST}`)
console.log(`Costo de Envio: ${shippingCost}`)
console.log(`Orden Valida: ${isOrderValid}`)
console.log(`Edad del usuario: ${userAge}`)
console.log(`Puntos:${points}`)
console.log(`Valor Carton:${cartValue}`)
console.log(`Aplica Promo? ${hasPromoCode}`)
console.log(`Tiene Aprobacion Parental? ${hasParentsApproval}`)
console.log(`Agregar Seguro? ${addInsurance}`)
/** calcular costos de envío*/

console.log (userAge>65)
console.log (userAge >= 21)
console.log (hasPromoCode)
console.log(cartValue > 300)
console.log (points > 500)
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {

shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

/** tomar en cuenta la aseguranza */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

/** mostrar mensaje */
if (isOrderValid) {
console.log(shippingCost);
} else {
console.log("No se puede ordenar si es menor que 21");
}