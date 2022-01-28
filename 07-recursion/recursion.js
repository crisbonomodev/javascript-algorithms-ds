function countdown(num){
    //base case
        if(num<=0) {
            console.log("All done!");
            return;
        }
        console.log(num);
        num--;
        countdown(num);
}

function countdownArray(num){
        for (let index = num; index >= 0; index--) {
            console.log(index);
        }
        console.log("All done!");
}

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

function factorial(num) {
    if(num=== 1) return 1;
    return num * factorial(num-1);
}

console.time();
countdown(5);  
console.timeEnd();
console.time();  
countdownArray(5);
console.timeEnd();



console.log(sumRange(5));
console.log(factorial(5));