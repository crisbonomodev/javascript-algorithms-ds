/**
 * Escribir una funcion maxSubarraySum, que acepte un array de enteros y un numero n. 
 * La funcion debe calcular la maxima suma de elementos consecutivos n en el array.
 */

const maxSubarraySumWithoutWindow = (array,num) => {
if(num > array.length) {
    return null;
}

let max = -Infinity;
 
for (let i = 0; i < array.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
        temp += array[i+j];
    }
    if(temp > max) {
        max = temp;
    }
}
return max;
}

const maxSubarraySum = (array,num) => {
    if(num > array.length) {
        return null;
    }
    
    let maxSum = 0;
    let tempSum= 0;

    //inicializamos el primer maximo con los 3 primeros valores
    for (let i = 0; i < num; i++) {
        maxSum += array[i];        
    }

    //asignamos este valor a nuestro contador temporal
    tempSum = maxSum;
    //ahora, vamos a ir "moviendo" nuestra ventana de a una posicion, para evaluar si la nueva suma es mayor o menor al maximo
    //a partir de 
    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i-num] + array[i];
        maxSum = Math.max(maxSum,tempSum);
    }

    return maxSum;
}

//testCases
maxSubarraySum([1,2,5,2,8,1,5],2);
maxSubarraySum([1,2,5,2,8,1,5],4);

console.time("without window 1");
console.log(maxSubarraySumWithoutWindow([1,2,5,2,8,1,5],2));
console.timeEnd("without window 1");
console.time("without window 2");
console.log(maxSubarraySumWithoutWindow([1,2,5,2,8,1,5],4));
console.timeEnd("without window 2");


console.time("with window 1");
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.timeEnd("with window 1");
console.time("with window 2");
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.timeEnd("with window 2");