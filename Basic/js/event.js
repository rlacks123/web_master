// event.js
// 화면요소에 이벤트 등록하기.

// console.log(document);
// document.onclick = function (){
//     // alert('클릭했습니다')
//     document.location.href = 'https://www.daum.net'; // 다큐먼트 영역 href 영역을 다음 주소로 바꿈
// }

//엘리먼트에 이벤트 등록 메서드 클릭이 실행되면 그후 펑션이 실행됨
document.querySelector('#showBtn').addEventListener('click', function () {
 console.log('버튼 클릭!');                          //콘솔에서 버튼 클릭하면 메시지나옴
 document.querySelector('#desc').style.display = 'block';
                    // 문서 쿼리에서 id desc를 선택해서 스타일 디스플레이 블락으로 표시함
});

//숨기기 기능구현.

// document.querySelector('#height').addEventListener('click', function () {
//     console.log('버튼 숨기기!');
//     document.querySelector('#desc').style.display = 'none';
// });

// 함수 온 클릭으로 대체함
document.querySelector('#height').onclick = function () {
    document.querySelector('#desc').style.display = 'none';
};

// 이미지에 이벤트 등록.
document.querySelector('img').addEventListener('mouseover', function () {
 document.querySelector('#desc').style.display = 'block';
});

document.querySelector('img').addEventListener('mouseover', function () {
    document.querySelector('#desc').style.display = 'none';
   });                             //점 뒤에있는거 속성
                          //함수안 에있는거 메소드
//    document.querySelector('#changeImg').addEventListener('mouseover', function () {
//     document.querySelector('img').src = 'image/이미지.jpg';
// })  // 이미지 폴더에서 불러와서 이미지 체인지 시킴

// 이미지 변경 하기
let imgAry = ['레드향.jpg','딸기.jpg','사과.jpg','포도.jpg'];
let idx = 0; 
document.querySelector('#changeImg').addEventListener('click', function () {
    if(idx > 3) {
        idx = 0;
    }
    let imgeName = imgAry[idx++];
    document.querySelector('img').src = 'image/' + imgeName;
})
