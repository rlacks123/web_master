// forExe2.js
// 1~ 10 까지의 2의 배수, 3의 배수 => sum2, sum3 변수 저장.
// 반복문, 조건문.

// 콘솔에 출력: 2의 배수의 합은 ??, 3의 배수의 합은 ?? 입니다.

// const num = 2;
// document.write('<table border"2" >');
// for (let )
// console.log('1 ~ 10 까지의 2의 배수의 합' + sum2);

// let sum2 = 0, sum3 = 0; // 한줄에 변수를 여러개 선언할 경우.
// for (let i = 1; i <=10; i++);{
//     if(i % 2 ==0) {
//         sum2 = sum2 + i;
//     }
//     if(i % 3 == 0) {
//         sum3 = sum3 + i;
//     }
// }
const num = 3;
document.write('<table border="2" >');
for (var i = 1; i <= 9; i++) {
    if (i % 2 == 1) { //홀수 .
        document.write(`<tr style="background: pink; color: white;" ><td>' ${num} * ${i} </tb><td> = ${num * i} </tb></tr>`);
    } else { // 짝수.
        document.write(`<tr style="background: cyan; color: white;" ><td>' ${num} * ${i} </tb><td> = ${num * i} </tb></tr>`);
    }
}
document.write('</table border>');