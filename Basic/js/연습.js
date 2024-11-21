// 연습.js

// let x = 25;
// let quotient = x /4;
// let remainder = 

// let x = 25;
// let quotient = Math.floor(x / 4); // 몫
// let remainder = x % 4; // 나머지
// console.log(quotient);
// console.log(remainder);

// let x = 25;
// let quotient = parseInt(x / 4); // 몫
// let remainder = x % 4; // 나머지
// console.log(quotient);
// console.log(remainder);

// var num1 = 200;
// var srt1 = '200';

// // console.log(num1 + srt1); // 해석 숫자값 + 문자값 이라 200200 나온다
// console.log(num1 + Number(srt1));

// exe1.js

console.log('exe1.js');
let numberAry = [10, 22, 39, 84];

let param1 = prompt('첫번째 인덱스를 입력하세요[0~3].');
let param2 = prompt('두번째 인덱스를 입력하세요[0~3].');

let result = 0;
result = numberAry[param1] + numberAry[param2];
// 콘솔에 출력 22 + 84 = 106
console.log(numberAry[param1] + ' + ' + numberAry[param2] +
     ' = ' + result);    
