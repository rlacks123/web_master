// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.

let question = 3;

if (question == 1) {
    // 1번 코드.
    const thisYear = 2024;
    let inputYear = prompt('태어난 연도를 입력하세요');
    result = thisYear - inputYear;
    console.log('나이는' + result + ' 살 입니다.')

    //   
    // var currentYear = 2024;
    // var birthYear;
    // var age;
    // birthYear = prompt ("태어난 연도를 입력하세요 (YYYY)","");
    // age=currentYear-birthYear+1;
    // document.write(currentYear+"년 현재");
    // document.write(birthYear+"년에 태어난 사람의 나이는" + age + "세입니다")     
} else if (question == 2) {
    // 2번 코드.
    var width = prompt("직사각형의 가로 길이를 입력하세요");
    var height = prompt("직사각형의 세로 길이를 입력하세요");

    var area = width * height;
    alert("직사각형의 넓이는 " + area + "입니다.");
}
else {
    // 3번 코드.
//     let var1 = Number(prompt("첫번째 숫자를 입력하세요"));
//     let min;
//     let max;

//     // 최대값과 최소값을 구한다
//     let var2 = Number(prompt("두번째 숫자를 입력하세요"));
//     if (var1 < var2) {
//         min = var1;
//         max = var2;
//     }
//     else {
//         max = var1;
//         min = var2;
//     }
//     // 이제부턴 최소값/최대값이랑 비교한다
//     let var3 = Number(prompt("세번째 숫자를 입력하세요"));
//     if (min > var3) {
//         min = var3;
//     }
//     if (max < var3) {
//         max = var3;
//     }

//     alert("최대값은 " + max + ", 최소값은 " + min + "입니다.");
// }

    let num1 = prompt('임의값 입력');
    let num2 = prompt('임의값 입력');
    let num3 = prompt('임의값 입력');

    if (num1 == num2 || num2 == num3 || num1 == num3) {
        console.log('동일한 값이 존재합니다.');
    } else {
        let max, min = 0;
        if (num1 > num2) {
            if (num1 > num3) {
                max = num1;
            } else {
                max = num3;
            }
        } else { // num2 > num1
            // num3 과 비교.
            if (num2 > num3) {
                max = num2;
            } else {
                max = num3;
            }
        }
    }
    alert("최대값은" + max + "입니다");
}