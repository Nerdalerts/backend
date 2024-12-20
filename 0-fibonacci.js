let first = 0;
let second = 1;
let sum;
console.log("fibonnaci series is:");
for (let i = 0; i <= 10 ; i++){
    sum = first + second ;
    console.log(first);
    first = second;
    second = sum;
    }
