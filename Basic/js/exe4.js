// exe4.js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 성적을 입력 프롬포트등 입력.
// 성적을 합산후 => 평균, 최고점수, 최저점수 구해서
// 콘솔에 우리반 평균은 ??, 최고점은 ?? 이고, 최저점은 ?? 이다.
// 반복, 배열, 조건문 사용.
// 배열에 추가 푸쉬등 사용

// let fname = []; // 배열 변수 선언.
// fnames[0] = '홍길동';
// fnames[1] = '김민오';
// fnames[2] = '박창석';
// fnames[3] = '박지희';
// fnames[4].push = '김오동';

// let n = prompt('성적을 입력하세요');

// let sum = 0;
// let averge = 0;
// let max = 0;
// let min = 0;

// let grade = prompt('점수를 입력');
// // let grade = [60, 45, 58, 82, 98, ];
// for (let i = 0; i <= 5; i++) {
//     // console.log(`${i} 위치=> ${grade[i]}`);
//     if (grade[i] % 2 == 0)
//         sum += grade[i];
// }

// averge  = sum / 5;
// console.log(sum, averge, max, min);
// alert(`합계는 ${sum} 이고, 평균은 ${averge} 이고, 최고점수는 ${max}  최저점수는 ${min}입니다.`);

// let sum = 0;
// let average = 0;
// let max = 0;
// let min = 100;


// for (let i = 0; i < 5; i++) {
//     let grade = parseInt(prompt(`점수 ${i + 1}을 입력해주세요:`), 10);
//     sum += grade;
  
//     if (grade > max) {
//         max = grade;
//     }
//     if (grade < min) {
//         min = grade;
//     }
// }

// average = sum / 5;

// console.log(sum, average, max, min);
// alert(`합계는 ${sum} 이고, 평균은 ${average} 이고, 최고점수는 ${max} 최저점수는 ${min}입니다.`);


let scoreAry = []; // 10, 20, 30 , 40, 50
for (let i=1; i <=5; i++) {
    let inputValue=prompt('점수입력');
    scoreAry.push(inputValue);
}

let sum = 0;
let average = 0;
let max = 0;
 min = scoreAry [0];

 // 배열갯수만큼 반복.
 for(let i=0; i<scoreAry.length; i++) {
    sum += scoreary[i];
    if(max < scoreAry[i]) {// 최대값.
       max = scoreAry[i];
    }
    if(min > scoreAry[i]) {// 최소값.
        max = scoreAry[i];    
    }
 }
 average = sum / scoreAry.length;
 console.log(`우리반 평균은 ${average}, 최고점은 ${max} 이고, 최저점은 ${min} 이다.`)