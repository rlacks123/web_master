// // function.js
// // 기능을 구현하기 위한 실행명령의 조합.

// // 두 수입력 => 첫번째 값에 +5, 두번째 값 +3 => 두수 곱한 결과값.

// let result =calculateFunc(10, 20); //함수호출 => 실제값
// document.write('<p><b>'+ result + '</p></b>'); // result 리절트로 반환된걸 웹에 표시해줌


// result = calculateFunc(5, 7); // 새로운 함수호츨
// document.write('<p><b>'+ result + '</p></b>');



// // 함수정의하는 곳에서는 매개변수
// function calculateFunc(parameter1, parameter2) { //함수 2개로 나눔
// let num1 = parameter1, num2 = parameter2; // 나눈 2개를 각각 네임 붙여줌

// num1 = num1 + 5;
// num2 = num2 + 3;

// console.log(num1 * num2);
// return num1 * num2; 
// }




let result;
result = calculateFunc(10, 20, document.querySelector('.result'));
result = calculateFunc(5, 7, document.querySelector('.value'));


// 함수정의하는 곳에서는 매개변수
function calculateFunc(parameter1, parameter2, parameter3) { 
let num1 = parameter1; 
    num2 = parameter2; 

num1 = num1 + 5;
num2 = num2 + 3;

parameter3.innerHTML = '<b>' + num1 * num2 + '</b>'
}

function sum(num1, num2) {
    let result = num1 +num2;
    return result;
}
//return 은 뭐에요?
// 10 + 20 => ? // 5 + 7 => ?
console.log(sum(sum(10,20),sum(5,7))); // 반환 처리된 결과값을 되돌려줌