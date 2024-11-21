// function2.js
// let sum = 0; // 변수 이름과 같은 함수가 선언되면 안됨
// var sum = 0;

// 함수선언식.
// function sum (param1, param2) {
//     return param1 + param2;
// }

// // 함수표현식.
let sum = function (param1 = 0, param2 = 0) { // 값이 안들어오면 0으로 처리
    // //falsy => 0, '', null, undefined
    // if(!param1 || param2) { //조건문 선언 ! 부정표현
    //     return 0;                       // 매개값에 0을 넣어서 처리하면 이구문 필요없음
    // }
    return param1 + param2;
}
console.log(sum(3, 6));

// 화살표 함수. 단순한 표현 추구.
// let grtMaxFunc = (num1 = 0, num2 = 0) => { // 펑션 지우고 => { 명령어로 함수 블럭을 실행하겠습니다
//     //     if(num1 >= num2) {  // 넘1이 넘2보다 크거나 같으면
//     //         return num1;
//     //     }   else {
//     //         return num2;
//     //     }
//     return num1 >= num2 ? num1 : num2; // ?가 if 이프  num1 >= num2 가 되면  ? num1 처리 아니면 num2 처리
//     // return result;
// }

// 화살표 함수. 단순한 표현 추구.
let grtMaxFunc = (num1 = 0, num2 = 0) => num1 >= num2 ? num1 : num2;
// let grtMaxFunc = (num1 = 0, num2 = 0) => {
//     return num1 >= num2 ? num1 : num2; }
console.log(grtMaxFunc(10,17)); // 둘중에 큰수만 표시