// function1.js

// let numAry1 = [50, 60, 40, 70, 20]
// let numAry2 = [55, 63, 42, 79, 27]

// console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
// console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
// console.log(sum( sumAry([10, 20, 30]) , sumAry([10,20])));


// 매개값을 배열로 받아서 배열요소의 합.
// function sumAry (param1) {
//  let sum = 0;
//  for (let i = 0; i < param1.length; i++){
//    sum += param1[i];
//  }
//  return sum;
// }

// function sum (param1, param2) {
//     let result = param1 + param2;
//     return result;
// }

// 배열을 매개값으로 받아서 요소중에서 제일 큰값을 구하는 함수.
// 함수 이름은 getMaxValue(배열) 로 와야함 제일 큰값에 와서 반환하기


// let numAry1 = [50, 60, 40, 70, 20];
// let numAry2 = [55, 63, 42, 79, 27];

// function getMaxValue(param1) {
//   let max = param1[0]; 

  
//   for (let i = 1; i < param1.length; i++) {
//     if (param1[i] > max) {
//       max = param1[i]; 
//     }
//   }

//   return max; // 
// }


// console.log(getMaxValue(numAry1)); 
// console.log(getMaxValue(numAry2)); 



// Math.random() 활용해서 11 ~ 20 사이의 임의 수 생성.
// 배열[5]에 저장

function sumAry (param1) {// 여기서부터 // 함수 이름과 매개 설정
  let sum = 0;            //변수 선언 썸 0;
  for (let i = 0; i < param1.length; i++){ // 반복문 설정 0이고 param1 보다 작으면 반복 
    sum += param1[i];                      //  i의 값이 sum 에 더해짐
  }
  return sum;                              // sum 의 반환 처리된 결과값을 돌려줌
 }
 
 function sum (param1, param2) {          // 함수 선언 이름 sum 매개 param1,param2
     let result = param1 + param2;        // 변수 선언 결과값 합이 매개 param1 + param2 한 값
     return result;                       // result 의 반환 처리된 값을 돌려줌
 }// 여기


function makeNumberFnc() { // 함수 설정
  let randomAry = []       // 변수 선언 이름 랜덤 어레이 값은 없음
  for (let i=1; i<= 5; i++) { // 반복문 선언 값은 1이고 5번 실행 
    let temp = parseInt (Math.random() * 10) + 11; // 생성범위: 11 <= ? < 21 // 이름 temp parseInt 파스 인트로 소숫점 버림 (Math.random() * 10) + 11; 임의의 수 생성 11~20 사이
    randomAry.push(temp); // 랜덤 어레이를 푸쉬로 배열추가로 만들고 값은 temp
  }
  console.log(randomAry); // 콘솔 화면에 랜덤 에어리 출력
  let sum = sumAry (randomAry); // 변수 선언 sum은 sumAry 썸 에어리랑
  // 결과값 반환.
  return sum;
}
let result = makeNumberFnc();

// console.log(`임의의 배열의 합은 ${makeNumberFnc()}입니다.`)
console.log(`임의의 배열의 합은 ${result}입니다.`)


// 결과: 임의의 배열의 합은 ?? 입니다.
// return parseInt(Math.random() * 10 + 11)