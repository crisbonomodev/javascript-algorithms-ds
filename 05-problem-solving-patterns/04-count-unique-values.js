/**
 * Implementar una funcion llamada countUniqueValues, que acepte un array ordenado, y cuente los valores unicos que existen en el array.
 *
 */
 const {performance} = require('perf_hooks');
 const { generate } = require('big-array-generator');

const countUniqueValues = (arr) => {
    if(arr.length === 0) {
        return 0;
    }
let i = 0;

for (let j = 1; j < array.length; j++) {
    if(arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
    }   
}
console.log(arr);
return i +1;
}

const countUniqueValuesWithoutPointers = (arr) => {
    if(arr.length === 0) { //si es 0 devolvemos 0
        return 0;
    }
    let counter = 0; //inicial
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
          if(arr[i] !== arr[j]) {
              counter++;
              i++;
              arr[i] = arr[j];
          }
      }
console.log(arr);
        return counter +1;
    }
}

let array = [1,1,2,2,3,3,4,4];
array2 = [...array];

let init2 = performance.now();
let counter2 = countUniqueValuesWithoutPointers(array);
let finish2 = performance.now();
console.log(`Case: nested code -  Time elapsed: ${(finish2 - init2)} seconds, count: ${counter2} `);

let init = performance.now();
let counter1 = countUniqueValues(array2);
let finish = performance.now();
console.log(`Case: pointers code -  Time elapsed: ${(finish - init)} seconds, count: ${counter1} `);


