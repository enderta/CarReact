//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

/*function digitSum(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
  return sum;
}

function digitalRoot(num){
    let sum = digitSum(num);
    while(sum > 9){
        sum = digitSum(sum);
    }
    return sum;
}

console.log(digitalRoot(942));*/
const sumDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
const digitalRoot = (num) => {
    let sum = sumDigits(num);
    while (sum > 9) {
        sum = sumDigits(sum);
    }
    return sum;
}