
const { createConnection } = require('net');
const {performance} = require('perf_hooks');

// Escribir una funcion llamada same, que recibe 2 arrays.
// La funcion retornara true si cada valor en el array tiene su correspondiente valor al cuadrado en el segundo array. La frecuencia de los valores debe ser la misma.
// Casos de ejemplo:
// same([1,2,3],[4,1,9]) //true
// same([1,2,3],[1,9]) //false
// same([1,2,1],[4,4,1]) //false (debe ser la misma frecuencia)

const sameWithNestedLoop = (array1,array2) => {
 if (array1.length !== array2.length) {
     return false;
 }
let operationsCounter = 0;
 for (let i = 0; i < array1.length; i++) {
     for (let j = 0; j < array2.length; j++) {
         operationsCounter++;
        let correctIndex = array2.indexOf(array1[i]**2);
        if(correctIndex === -1) {
            return false;
        }
        array2.splice(correctIndex,1);
        i++
     }
     
 }
 console.log(operationsCounter);
 return true;
}
const array1 =[1,2,4,4,2,1,2,4,1,1,2,4,4,2,1,2,4,1,1,2,4,4,2,1,2,4,1];
const array2 = [16,4,1,1,4,16,4,1,16,16,4,1,1,4,16,4,1,16,16,4,1,1,4,16,4,1,16];

console.time();
console.log(sameWithNestedLoop(array1,array2));
console.timeEnd();