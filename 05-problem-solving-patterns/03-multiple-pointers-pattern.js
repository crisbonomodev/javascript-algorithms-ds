/*
Escribir una funciona llamada sumZero que acepte un array ordenado de enteros. La funcion debe encontrar el primer par donde la suma sea 0.
Si la encuentra, debe devolver un array con los valores que suman 0, o undefined si el par no existe. 

testCases: 
sumZero([-3,-2,-1,0,1,2,3]); //[-3,3]
*/


const {performance} = require('perf_hooks');
const { generate } = require('big-array-generator');


const sumZero = (array) => {
//inicializamos los punteros
let left = 0;
let right = array.length -1;
//mientras podamos recorrer el array
while(left < right) {
    //sumamos los valores
    let sum = array[left] + array[right];
    //si la suma es 0, retornamos lo valores
    if(sum === 0) {
        return [array[left],array[right]];
    } else if(sum > 0) {
        //si la suma es mayor a 0, movemos el puntero de la derecha hacia atras
        right--;
    } else {
        //si la suma es menor a 0, movemos el puntero de la izquierda hacia adelante
        left++;
    }
}

}

const nestedSumZero = (array) => {
    for (let i = 0; i < array.length; i++) {
       for (let j = i+1 ; j < array.length ; j++) {
          if(array[i] + array[j] === 0) {
              return [array[i],array[j]];
          }
           
       }
        
    }
}

const array = generate({size: 10000, min: -9999, max: 9998, sort: true});

console.log(`Testing with array: ${array}`);

let init = performance.now();
console.log(nestedSumZero(array)); 
let finish = performance.now();
console.log(`Case: nested code -  Time elapsed: ${(finish - init)} seconds `);

init = performance.now();
console.log(sumZero(array)); 
finish = performance.now();
console.log(`Case: refactor code -  Time elapsed: ${(finish - init)} seconds `);