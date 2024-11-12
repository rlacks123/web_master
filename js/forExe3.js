// forExe3.js
// 점수를 입력 * 5번.
// 점수의 합(sum), 평균(averge) 저장.
// 큰값 (max) 저장. 최소값 (min)
// prompt ('점수를 입력');

// 합계는 ?? 이고, 평균은 ?? 이고, 최고점수는 ?? 입니다.

// var sum = 0,  averge = 0, max = 0;

// let sum = 0;
// let averge = 0;
// let max = 0;
// for (let i = 1; i <= 5; i++) {
//     // 블럭안에 있는 코드가 5번 반복실행.
//     let inputValue = prompt('점수를 입력');
//     sum = sum + parseInt(inputValue);  // 누적
//         // 조건문: max < inputValue 50, 70, 80, 60, 90
//         if(max < inputValue) {
//             max = inputValue;
//         }
//     }
//     averge  = sum / 5;
//     console.log(sum, averge); //오전수업

    // alert (`합계는 ${sum} 이고, 평균은 ${averge} 이고, 최고점수는 ${max}  입니다.`);


    let sum = 0;
    let averge = 0;
    let max = 0;
    let min = 100; // min 입력값 이상 최저점수 안나옴
    for (let i = 1; i <= 5; i++) {
        // 블럭안에 있는 코드가 5번 반복실행.
        let inputValue = prompt('점수를 입력');
        sum = sum + parseInt(inputValue);  // 누적
            // 조건문: max < inputValue 50, 70, 80, 60, 90
            if(max < inputValue) {
                max = inputValue;
            }
            if(min > inputValue) {
                min = inputValue;
            }
        }
        averge  = sum / 5;
        console.log(sum, averge, max, min);
        alert (`합계는 ${sum} 이고, 평균은 ${averge} 이고, 최고점수는 ${max}  최저점수는 ${min}입니다.`);
//오후 수업 min 추가해서 최소값추가함