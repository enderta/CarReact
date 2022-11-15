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

const solution=(n)=>{
   let x= n.filter((n)=>n%4===0)
    let max=0
    for(let i=0;i<x.length;i++){
        if(x[i]>max){
            max=x[i]
        }
    }
    return max
}
//find bugs and modify one line of code in the incorrect implementation of the function solution
//that is supposed to return the smallest element of array A which contains at mostt 1000 integers
//with range [-1000...1000]
//function solution(A){
//    var ans=0
//    for(var i=0;i<A.length;i++){
//        if(A[i]<ans){
//            ans=A[i]
//        }
//    }
//    return ans
//}

//
//}