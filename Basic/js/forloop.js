// forloop.js
// 1 ~ 5 까지 합 => sum 변수 누적.
let sum = 0;
sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;

// let i = 0;
// i = i + 1;

sum = 10 % 3;

console.log('1 ~ 5 까지의 합: ' + sum);
sum = 0; // 초기화.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1){ //홀수의값만 누적.
        console.log('sum=>' + sum + ', i=>' + i);
        sum = sum + i; // i값: 1, i값: 2, 
    }
    // if (i == 7){
    //     break;
    // }
}
console.log('1 ~ ' + 10 + '까지의 합:' + sum);

