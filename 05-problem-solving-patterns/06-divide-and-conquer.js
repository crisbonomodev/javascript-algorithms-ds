
const search = (array,value) => {
    let min = 0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min + max) /2);

        if(array[middle] < value) {
            min = middle +1;
        } else if (array[middle] > value) {
            max = middle -1;
        } else {
            return middle;
        }
    }
    return -1;
}


const array = [-20, -10, -8, 3, 7, 9, 15, 30];
console.log(search(array,9));
console.log(search(array,-8));
console.log(search(array,30));
console.log(search(array,4));
console.log(search(array,-20));