// operator.js

// let days = ['sun','Mon','Tue','Wed','Thr','Fri','Sat']
// let src = '';
// for (let day of days) {
//     str += ' ' + day + ' ';

// }

// addEventListener 이벤트가 발생하면 처리 하는 함수를 ('click', addFnc) 이벤트 핸들러

//nth-of-type 버튼의 첫번째 순서
let addFnc = (e) => { // 계산기 간결하게 만들기
    console.log(e.target.innerHTML);
    let v1 = document.getElementById('num1').value; // 수1,수2 id를 가져옴
    let v2 = document.querySelector('#num2').value;
    if(!v1 || !v2){
        alert('값을 입력하세요');
        return;
    }
    let result; // 변수선언.
    if (e.target.innerHTML == '더하기'){
        result = parseInt(v1) + parseInt(v2); // '12' => 12
    } else if (e.target.innerHTML == '빼기') {
        result = parseInt(v1) - parseInt(v2);
    } else if (e.target.innerHTML == '곱하기') {
        result = parseInt(v1) * parseInt(v2);
    } else if (e.target.innerHTML == '나누기') {
        result = parseInt(v1) / parseInt(v2);
    }
    document.querySelector('#result').value = result; 
}
document.querySelector('#add').addEventListener('click', addFnc);
document.querySelector('#sub').addEventListener('click', addFnc);
document.querySelector('#multy').addEventListener('click', addFnc);
document.querySelector('#divid').addEventListener('click', addFnc);


// //nth-of-type 버튼의 첫번째 순서
// let addFnc = () => { // 화살표함수. // 계산기 더하기
//     let v1 = document.getElementById('num1').value; // 수1,수2 id를 가져옴
//     let v2 = document.querySelector('#num2').value;
//     let result = parseInt(v1) + parseInt(v2); // '12' => 12
//     // 수1,수2, 더하기 결과값을 변수 선언함
//     document.querySelector('#result').value = result; 
//     // 계산기 결과id 를 가져와서 결과를 나타냄
// }
// document.querySelector('#add').addEventListener('click', addFnc);

// let addFncc = () => { // 빼기.
//     let v1 = document.getElementById('num1').value;
//     let v2 = document.querySelector('#num2').value;
//     let result = parseInt(v1) - parseInt(v2); // '12' => 12

//     document.querySelector('#result').value = result;
// }
// document.querySelector('#sub').addEventListener('click', addFncc);

// let addFncx = () => { // 곱하기.
//     let v1 = document.getElementById('num1').value;
//     let v2 = document.querySelector('#num2').value;
//     let result = parseInt(v1) *
//      parseInt(v2); // '12' => 12

//     document.querySelector('#result').value = result;
// }
// document.querySelector('#multy').addEventListener('click', addFncx);

// let addFncv = () => { // 나누기.
//     let v1 = document.getElementById('num1').value;
//     let v2 = document.querySelector('#num2').value;
//     let result = parseInt(v1) / parseInt(v2); // '12' => 12

//     document.querySelector('#result').value = result;
// }
// document.querySelector('#divid').addEventListener('click', addFncv);




