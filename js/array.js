// array.js

let numAry = new Array(); // []; 배열객체 생성.
numAry[0] = 10;
numAry.push(20);
numAry.push(25);
numAry.push(35);

// 첫번째 제거. shift 마지막제거. pop
// numAry.shift();
console.log('제거된값', numAry.shift());
console.log('제거된값', numAry.pop());
numAry.unshift(99);                  //  첫번째에 배열객체 추가



// 배열일경우 for . . of 포오브 사용
console.log(numAry.length); // 랭크스 속성값 실행한다는
for (let number of numAry) { // for . . of 반복문: 값을 가져올거면 포오브
    console.log(number);
}

// 배열일 경우에 method. 메소드  forEach(함수)
numAry.forEach(function(param1 //// 배열요소 가르킴
    ,param2 // 배열인덱스
    ,param3 // 배열자신
) {
  console.log(param1, param2, param3);
});

//배열의합계
let sum = 0;
numAry.forEach(elem => sum += elem); // 간결하게 수정한거 => 이게 함수
console.log(`배열의 합계: ${sum}`);
// numAry.forEach(function(elem, idx,  sum += elem)}
// );

let obj = {
    name: "Hong",
    age: 20,
    weight: 66.7
}
// object 오브젝트 타입이면 for . . in 반복분 사용
for ( let prop in obj) { // for . . in 포인 속성 출력
    console.log(prop);
}