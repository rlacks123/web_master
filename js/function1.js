// function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
comsole.log(sum( sumAry([10, 20, 30]) , sumAry([10,20])));


// 매개값을 배열로 받아서 배열요소의 합.
function sumAry (param1) {
 let sum = 0;
 for (let i = 0; i < param1.length; i++){
   sum += param1[i];
 }
 return sum;
}

function sum (param1, param2) {
    let result = param1 + param2;
    return result;
}

// 배열을 매개값으로 받아서 요소중에서 제일 큰값을 구하는 함수.
// 함수 이름은 getMaxValue(배열) 로 와야함 제일 큰값에 와서 반환하기

console.log(getMaxValue(numAry1)); 위에 제일 큰값이 70인데 오게해야함;