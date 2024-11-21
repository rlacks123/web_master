// object.js
// 객체.

let ary = []; // 오브젝트타입 중괄호 씀
let obj = { // 오브젝트 타입
    name: '홍길동', // 이름
    age: 20, // 나이
    height: 169.4 // 키
};
console.log(`이름: ${obj.name}, 나이는:${obj['age']}`); // 오브제가 가진 이름과 나이 출력
obj.age = 21; // 값이 바뀌기전에 콘솔 로그 위에 에 바뀐 값을 적어서 변경된 나이로 출력
console.log(`이름: ${obj.name}, 나이는:${obj['age']}`); // 바뀐나이 출력


for (let prop in obj) { // object타입에서 속성을 반환 반복문.for .. in 반복문 포인
    console.log(`prop => ${prop}, 값 => ${obj [prop]}`); // 값을 가져옴 값 => ${obj [prop]}

}

// 홍길동, 김민식, 최홍식.
ary.push(obj); // 홍길동의 정보을 배열에 추가.
ary.push({
    name: '김민식',
    age: 25,
    height: 190
}); //김민식의 정보를 배열추가.
ary.push({
    name: '최홍식',
    age: 28,
    height: 160
}); //최홍식의 정보를 배열추가.
let searchName = '홍길동'; // 홍길동 정보 등록
let searchage = 25;
let sum = 0; // 평균키 => heigth 
// 홍길동의 나이. 찾기

for (let i = 0; i < ary.length; i++) {
    // if (ary[i]['name'] == searchName) { // 홍길동 이름을 기준으로 찾아서 정보조회
    if (ary[i]['age'] == searchage) { // 나이를 기준으로 찾아서 정보조회

        console.log(`이름은 ${ary[i]['name']},나이는 ${ary[i].age}, 키는 ${ary[i]['height']}`);
        // console.log(ary[i]['height']); // 괄호 쓸거면 . 빼기
    }
    sum += ary[i].height; // 평균키 구하는값
}
// console.log(sum/ary.length); //
// console.log(parseInt(sum / ary.length));
console.log(Math.round(sum / ary.length * 100) / 100); // 키 평균을 소수점 까지


// console.log(Math.round(12.555 * 100 ) / 100); // 계산방법

