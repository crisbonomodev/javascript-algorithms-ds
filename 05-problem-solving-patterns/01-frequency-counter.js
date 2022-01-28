
const {performance} = require('perf_hooks');



const same = (array1,array2) => {
  
    //validamos longitudes de arrays para descartar de base
    if(array1.length !== array2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    let operationsCounter = 0;

    //contabilizamos cada item de los arrays en los objetos
    //Al pasarle el valor como key, va a validar si esa key existe ya o no, si existe, le suma 1 al contador, sino, la crea y le suma 1.
   for (let value of array1) {
       frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
   }

   for (let value of array2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
   }

    //Comparamos entre objetos
    for (let key in frequencyCounter1) {
        operationsCounter++;
        if (!(key**2 in frequencyCounter2)) {
                return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(operationsCounter);
    return true;
}

const array1 =[1,2,4,4,2,1,2,4,1,1,2,4,4,2,1,2,4,1,1,2,4,4,2,1,2,4,1];
const array2 = [16,4,1,1,4,16,4,1,16,16,4,1,1,4,16,4,1,16,16,4,1,1,4,16,4,1,16];

console.time();
same(array1,array2);
console.timeEnd();
