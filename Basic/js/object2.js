// object2.js

// 함수 : function 펑션
// 함수호출 실행하려면
// 1.
// friendListFnc(); // 온클릭과 버튼과 연결되서 함수 사용가능

// function friendListFnc() {
//     console.log('friendListFnc()');
// }

let f1 = {name: '홍길동', age: 20};
let f2 = {name: '김길동', age: 21};
let f3 = {name: '박길동', age: 23};
let f4 = {name: '최길동', age: 25};


let myFriends = [f1, f2, f3, f4];

friendListFnc();// 함수호출.

// 함수정의 => 실행은 호출을 통해서
function friendListFnc() { 
    console.log('friendListFnc()'); // tr>td:홍길동. . .

    //새로운 친구 추가 할수 있음
    // let newfriend = document.querySelector('#inputValue').value
    // myFriends.push(newfriend) ; // 새로운 친구 추가 코드
    let newName = document.querySelector('#name').value // id값을 불러옴
    let newAge = document.querySelector('#age').value  // id값을 불러옴
    // falsy => false : '', 0, null, nudefined
    // truth => true  : 값이 있는 것.
    console.log(newName == '' , newAge == '') // 확인용
    if(newName !== '' && newAge !== ''){ 
    // 두개 값이 참일때 밑에 코드를 실행함 공란에 등록 눌러도 등록안됨

        myFriends.push({name: newName, age: newAge}); 
        // 이름과 나이를 id 두개로 해서 등록
    }

    let html = '<table border="2">';
    //코드 작성.<table border='2'><thend><tr><th>이름</th></tr></thend></table>
    //온클릭 등록을 누르면 이름과 홍길동~최길동 4명 테이블에 들어간게 나옴
    html += '<thead><tr><th>이름</th><th>나이</th></tr></thead>';
    html += '<tbody>';
    for (let i=0; i < myFriends.length; i++){
      html += '<tr><td>' + myFriends[i]['name'] + '</tb><td>' //
      + myFriends[i]['age'] + '</tr></tb>';
    }
    html += '</tbody><table>';

    // 문서내용을 쿼리셀렉트로 선택해서 나오게 하는거
    document.querySelector('#show').innerHTML = html;
}