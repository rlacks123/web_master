// arrayExe1.js
// let numAry = new Array();
// numAry.push(24);
// numAry.push(44);
// numAry.push(34);
// numAry.push(83);
// numAry.push(22);

// console.log(numAry);

let numAry = [34];
numAry.unshift(24); // 앞에 배열객체 생성
numAry.unshift(4);
numAry.push(83);    //뒤에 배열객체 생성
numAry.push(22);

console.log(numAry);
// [24, 44, 34, 83, 22] -> 순서.
numAry.shift();
numAry.unshift(77);

console.log(numAry);
// [77, 44, 34, 83, 22] -> 순서

      // splice 수정 삭제 가능
numAry.splice(2, 1, 55); //수정 첫번째파일: 인덱스, 두번째: 요소갯수, 세번째: 대체할수
console.log(numAry)
// 77,55,34,83,22 -> 순서


// 일요일, 월요일 ~ 토요일
// 수요일, 화요일, 토요일, 금요일, 월요일 ,일요일 ,목요일

let dayAry = [];

dayAry.splice(0,0, '수요일'); // 위에서 순서대로 숫자만큼 > 이동
dayAry.splice(0,0, '화요일');
dayAry.splice(2,0, '토요일');
dayAry.splice(2,0, '금요일');
dayAry.splice(0,0, '월요일');
dayAry.splice(0,0, '일요일');
dayAry.splice(4,0, '목요일');
console.log(dayAry);

console.log(dayAry.indexOf('화요일')) // 인덱스 오브

