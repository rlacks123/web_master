// test.js
// 1. 1 ~ 10 까지의 숫자의 합
// 1 ~ 10의 합: 55 입니다.
// 2. 구구단 4단 출력 ( 4 * 1 = 4) 콘솔에 출력
// 3. 배열의 요소 활용. 합을 구하는데 홀수의 합을 => 출력: 홀수의 합은 ?? 입니다.

// let sum = 0;
// for (let i=1; i<=10; i++){
//      sum += i;
// }
// console.log(1~10 까지의 합 `${sum}`);

// const num =4;
// for (let i = 1; i <=9; i++) {
//     console.log(`${num} * ${i} =${num * i}`);
// }

// let number1 = [23, 66, 92, 71, 52, 49];
// let sum = 0;
// for(let i=0; i < number1.length; i++) {
//     if ( number1[i] % 2 == 1)
//         sum += number1[i];
// }

// console.log(`홀수의 합은 ${sum} 입니다.`);

let scoreAry = []; // 10, 20, 30 , 40, 50
for (let i=1; i <=5; i++) {
    let inputValue=prompt('점수입력');
    scoreAry.push(parseInt(inputValue)); // '80' -> 80
}

let sum = 0;
let max = 0, min = scoreAry [0];
let average = 0;

 // 배열갯수만큼 반복.
 for(let i=0; i<scoreAry.length; i++) {
    sum += scoreAry[i];
    if(max < scoreAry[i]) {// 최대값.
       max = scoreAry[i];
    }
    if(min > scoreAry[i]) {// 최소값.
        max = scoreAry[i];    
    }
 }
 average = sum / scoreAry.length;
 average = parseInt(average);
 console.log(`우리반 평균은 ${average}, 최고점은 ${max} 이고, 최저점은 ${min} 이다.`)