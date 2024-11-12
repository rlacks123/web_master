// forExe4.js

// function addFriendFns() {
//     //사용자 입력값을 확인 => 목록으로 출력.
//     let fname = document.querySelector('#inputValue').value;
//     fname = fname.value;
//     console.log('친구이름 ',fname); // sum = sum +i
//     document.querySelector('#show').innerHTML = `<p>${fname}<p>`;

let fnames = [];

function addFriendFns() {
    //사용자 입력값을 확인 => 목록으로 출력.
    let fname = document.querySelector('#inputValue').value;
    fnames.push(`<p>${fname}<p>`);

    // 출력.
    let str = '';
    for(let i = 0; i < fnames.length; i++) {
      str =  str + fnames[i]; // str += fnames[i]
    }
    document.querySelector('#show').innerHTML = str;
    
}


// // forExe4.js

// // function addFriendFns() {
// //     //사용자 입력값을 확인 => 목록으로 출력.
// //     let fname = document.querySelector('#inputValue').value;
// //     fname = fname.value;
// //     console.log('친구이름 ',fname); // sum = sum +i
// //     document.querySelector('#show').innerHTML = `<p>${fname}<p>`;
// // }
// // let fname1 = ''; // 친구 이름 변수로 정함
// // let fname2 = ''; // 아래 방식이 더 편하다
// // let fname3 = '';
// // 원시자료형 vs. 복합자료형.

// // let fname = []; // 배열 변수 선언.
// // fnames[0] = '홍길동';
// // fnames[1] = '김민수';
// // fnames[2] = '박창석';
// // push(값) 푸쉬 마지막에 추가할때
// // fnames.push('박지희');
// //배열의 크기를 반환: length

// function addFriendFns() {
//     //사용자 입력값을 확인 => 목록으로 출력.
//     let fname = document.querySelector('#inputValue').value;
//     // fname = fname.value;
//     console.log('친구이름 ',fname); // sum = sum +i
//     // <p>홍길동</p><p>김민수</p><p>최민기</p>
//     // document.querySelector('#show').innerHTML = `<p>${fname}<p>`;
//     // document.querySelector('#show').innerHTML = `<p>홍길동</p><p>김민수</p><p>최민기</p>`;
//     fnames.push(`<p>${fname}<p>`);
    
//     // 출력.
//     let str = '';
//     for(let i=0; i < fnames.length; i++) {
//       srt += fnames[i];
//     }
//     document.querySelector('#show').innerHTML = str;
// console.log(fnames[1]);
    
// }