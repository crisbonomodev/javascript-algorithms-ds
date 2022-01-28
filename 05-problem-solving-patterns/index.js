
const { same } = require("./01-frequency-counter");
const { sameWithNestedLoop } = require("./01-frequency-counter-nested");
const { measurePerformance } = require("./measure-performance");
const microprofiler = require('microprofiler');

// Escribir una funcion llamada same, que recibe 2 arrays.
// La funcion retornara true si cada valor en el array tiene su correspondiente valor al cuadrado en el segundo array. La frecuencia de los valores debe ser la misma.
// Casos de ejemplo:
// same([1,2,3],[4,1,9]) //true
// same([1,2,3],[1,9]) //false
// same([1,2,1],[4,4,1]) //false (debe ser la misma frecuencia)

const array1 =[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3];
const array2 = [9,9,9,9,1,1,1,1,4,4,4,4,9,9,9,9,1,1,1,1,4,4,4,4,9,9,9,9,1,1,1,1,4,4,4,4,9,9,9,9,1,1,1,1,4,4,4,4];


console.time();
sameWithNestedLoop(array1,array2);
console.timeEnd();

console.time();
same(array1,array2);
console.timeEnd();




