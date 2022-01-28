// function outer(input) {
//     let outerReturnVariable = [];

//     function recursiveHelper(helperInput) {
//         //modify the outerReturnVariable
//         recursiveHelper(helperInput--);
//     }

//     recursiveHelper(input);

//     return outerReturnVariable;

// }

//ejemplo
function collectOddValues(arr) {
    let result = [];

    function helper(input) {
        if(input.length === 0) {
            return;
        }
        if(input[0] %2 !== 0) {
            result.push(input[0]);
        }
        helper(input.slice(1));
    }

    helper(arr);

    return result;
}

function pureCollectOddValues(arr) {
    let array = [];

    if(arr.length === 0) {
        return array;
    }

    if(arr[0] %2 !== 0) {
        array.push(arr[0]);
    }
    //utilizamos la concatenacion para ir armando el array que vamos a devolver en lugar de almacenarlo fuera en un helper.
    array = array.concat(pureCollectOddValues(arr.slice(1)));
    return array;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
console.log(pureCollectOddValues([1,2,3,4,5,6,7,8,9]));

