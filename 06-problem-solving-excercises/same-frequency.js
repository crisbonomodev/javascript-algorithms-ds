/**
 * Escribir una funcion llamada sameFrequency. Dados dos enteros positivos, hallar si los numeros tienen la misma frecuencia de digitos
 */


const sameFrequency = (num1,num2) => {
let frequency1 = {};
let frequency2 = {};

let num1String = num1.toString();
let num2String = num2.toString();

if (num1String.length !== num2String.length ) {
    return false;
}

for (let key of num1String) {
   frequency1[key] = (frequency1[key] | 0) +1;
}

for (let key of num2String) {
    frequency2[key] = (frequency2[key] | 0) +1;
}

for (const key in frequency1) {
   if (!(key in frequency2)) {
       return false;
   }
   if(frequency1[key] !== frequency2[key]) {
       return false;
   }
}
return true;
}

//testCases
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));