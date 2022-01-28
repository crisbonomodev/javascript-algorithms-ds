
const {performance} = require('perf_hooks');

// Anagrams: Dados dos strings, escribir una funcion para determinar si el segundo string es un anagrama del primero.
// Un anagrama  es una palabra, frase, o nombre formada al reordenar las letras de otra. 


const validAnagram = (string1, string2) => {

if(string1.length !== string2.length) {
    return false;
}
let frequencyCounter1 = {};
let frequencyCounter2 = {};

for (let key of string1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
}

for (let key of string2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
}
//Comparamos entre objetos
for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
            return false;
    }

    if(frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
    }
}
return true;
}

const nestedAnagram = (str1,str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
   
    for (let i = 0; i < str1.length; i++) {
        let correctIndex = str2.indexOf(str1[i]);
        if(correctIndex === -1) {
            return false;
        }
        str2.substr(correctIndex,1);
    }
    return true;
}

//testCases

// console.log(validAnagram('','')); //true
// console.log(validAnagram('aaz','zza')); //false
// console.log(validAnagram('anagram','nagaram')); //true
// console.log(validAnagram('rat','car')); //false

let init = performance.now();
console.log(nestedAnagram('qwertyuiopasdfghjklñzxcvbnmqwertyuiopasdfghjklñzxcvbnm','mnbvcxzñlkjhgfdsapoiuytrewqmnbvcxzñlkjhgfdsapoiuytrewq')); //true
let finish = performance.now();
let result = (finish - init);

console.log(`Case: nested code -  Time elapsed: ${(result)} seconds `);


let init1 = performance.now();
console.log(validAnagram('qwertyuiopasdfghjklñzxcvbnmqwertyuiopasdfghjklñzxcvbnm','mnbvcxzñlkjhgfdsapoiuytrewqmnbvcxzñlkjhgfdsapoiuytrewq')); //true
let finish1 = performance.now();
let result1 = (finish1 - init1);

console.log(`Case: refactor code -  Time elapsed: ${(result1)} seconds `);

