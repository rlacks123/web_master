// array2.js
// let numAry = [23, 32, 56, 34, 77, 90];

// numAry.forEach(function(num, idx) {
//     console.log(idx, '=>',num);
// })

// //조건을 만족 하는 새로운 배열 생성.
// let newAry = numAry.filter(function (num) {
//    if(num > 50) {
//     return true;
//    }
//    return false;
// });

// console.log(newAry); // 50 보다 큰값 반환해서 출력

// let fruits = ['apple', 'cherry', 'banana', 'melon']
// let efuits = fruits.filter(function(elem){ // filter 필터 함수 안에 함수만들고 네임을지음
//     console.log('뭔지',elem); // elem이 뭔지 확인
//     if(elem.indexOf('e') != -1) { // 문자열에서 문자를 찾을때. indexOf //-1 없다 아니면 있다
//        return true;
//     }
//     return false; 
// });
// console.log(efuits);

let dupAry = ['홍길동','김민혁','장동숙','홍길동','홍길도','김민']
// let newAry = [];
// let tempAry = []; // 안쪽에 느면 반복되서 출력안됨

let newAryy = dupAry.filter(function(elem, index, array) {
    // 찾을 배열값
    // console.log('확인',elen);
    if(array.indexOf(elem) == index ){ // 이렇게해도됨 참조
        // tempAry.push(elem);
        return true;
    }
    return false;
});

console.log(newAryy); // ['홍길동','김민혁','장동숙','홍길도','김민'] 중복된값제거하고 만들기