// Document Object : 객체(속성, 메소드)
let ulDom = document.querySelector('ul');
// uldom.children)
console.log(ulDom.children[0].innerHTML); // ul 요소의 첫번째 가져옴
// ulDom.children
let children = ulDom = document.querySelector('ul').innerHTML;

// DOM 객체에는 메소드(객체생성 메소드:createElement()).// 크리에이트 엘리먼트
// let liTag = document.createElement('li'); // <li></li> 요소를 생성
// liTag.innerHTML = '수박'; // <li>수박</li>
// ulDom.appendChild(liTag); //어펜트 차일드 ulDm 요소의 자식요소로 liTag등록.

let ptag = document.createElement('p');
ptag.innerHTML = '<b>Welcome</b>';
document.querySelector('#show').appendChild(ptag);

let btn = document.createElement('button');
// btn.innerHTML = '<b>삭제</b>';
btn.innerText = '삭제';         // 텍스트로 만듬
btn.addEventListener('click', (e) => {
//     console.dir(e.trahet.previousElementSidling.remove()); //화면요소 삭제
// console.querySelector('ul>li:nth-of-tyoe(1)').remove();       // ul 요소 삭제
console.log(document.querySelector('ul').children[0].remove()); 
// ulDom = document.querySelector('ul');
})  //remove 리무브 지우겠습니다
document.querySelector('#show').appendChild(btn);


