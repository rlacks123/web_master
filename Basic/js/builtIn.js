// builtIn.js (내장객체) 자바스트립스에 내장된거
// 날짜 (Date객체) 데이트

let today = new Date(); // Date객체.
today.setFullYear(2023, 4, 31); // 년도 바꾸기
today.setMonth(5-1);
today.setDate(31);

console.log(today);
console.log(showTime(today)); // 년월일 시간 분초 출력


// console.log(today); // 날짜 및 시간  정보 출력
// console.log(today.getFullYear()); // 날짜연도

console.log(`월: ${today.getMonth() + 1}, 일: ${today.getDate()}, 요일: ${today.getDay() + 1}`);
//  요일: ${today.getHours()}, 시간: ${today.getMinutes()`, );

function showTime(time = new Date()) {
    // 2024-11-13 14:22:23 포맷.
    let yyyy = time.getFullYear(); // 년 2024
    let MM = time.getMonth() +1; // 월 11 <- 10
    let dd = time.getDate(); // 일 14

    let HH = time.getHours(); // 시간
    let mm = time.getMinutes(); // 분
    let ss = time.getSeconds(); // 초 number
    // console.log(('' + ss).length); // 2-> '2'
    ss = ('' + ss).length ==1 ? '0' + ss : ss; // 00~09 문자 1자리수면 안주고 아니면 0을 준다

    //월요일
   let day = time.getDay(); 

   let days = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']


    return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + ' ' + days[day];
}