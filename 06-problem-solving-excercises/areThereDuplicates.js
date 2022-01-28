/**
 * Implementar una funcion areThereDuplicates, que acepte un numero variable de argumentos, y revise si hay duplicados.
 * 
 */

function areThereDuplicates() {
let array = Array.from(arguments);

let frequency = {};

for (const key of array) {
   frequency[key] = (frequency[key] | 0) + 1;
}

for (const key in frequency) {
    if (frequency[key] >1) {
        return true;
    }
}
return false;
}
console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));

