// T20241120.js

// 입력정보 정리
function makeRow(bookList = {Code,Name,auth,pre,pri}){
    let tr = document.createElement('tr');
    tr.addEventListener('click', function(e) { 
      e.stopPropagation();
      console.log(this.children[0].innerHTML)
      document.querySelector('input[name="bookCode"]').value=this.children[1].innerHTML;
      document.querySelector('input[name="bookName"]').value=this.children[2].innerHTML;
      document.querySelector('input[name="author"]').value=this.children[3].innerHTML;
      document.querySelector('input[name="press"]').value=this.children[4].innerHTML;
      document.querySelector('input[name="price"]').value=this.children[5].innerHTML;
    })
    
    let td = document.createElement('td')
    let inp = document.createElement('input')
    inp.setAttribute('type','checkbox');
    inp.addEventListener('click', (e) => e.stopPropagation());
 
    td.appendChild(inp)
    tr.appendChild(td)
  
    for(let prop in bookList){
      let td = document.createElement('td');
    let fname = bookList[prop];
    td.innerHTML=fname;
    tr.appendChild(td);
  } 
    // 삭제 버튼
     td = document.createElement('td')
     btn = document.createElement('button')
    btn.innerHTML = '삭제'
    btn.setAttribute('class','btn btn2')
    btn.addEventListener('click', (e) => {
       
       e.stopPropagation();
       e.target.parentElement.parentElement.remove();
      })  
    td.appendChild(btn)
    tr.appendChild(td)
    return tr;
  }
  
console.log(bookList);
// 데이터 출력
bookList.forEach((T20241120)=>{
    document.querySelector('#list').appendChild(makeRow(T20241120))
  })

// 저장 버튼
document.querySelector('button.btn1').addEventListener('click',(e) => {
    let Code = document.querySelector('input[name="bookCode"]').value;
    let Name = document.querySelector('input[name="bookName"]').value;
    let auth = document.querySelector('input[name="author"]').value;
    let pre = document.querySelector('input[name="press"]').value;
    let pri = document.querySelector('input[name="price"]').value;
    if(!Code||!Name||!auth||!pre||!pri){
      alert('값을 입력하세요');
      return;
    }
    let param={Code, Name, auth, pre,pri }
  
    let tr =makeRow(param);
    document.querySelector('#list').appendChild(tr);
  
    document.querySelector('input[name="bookCode"]').value = '';
    document.querySelector('input[name="bookName"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="press"]').value = '';
    document.querySelector('input[name="price"]').value = '';
  });

 // 체크박스 리스트

 document.querySelector('thead input[type="checkbox"]')//
 .addEventListener('change', (e) => {
   let checke = e.target.checked; 

   document.querySelectorAll('tbody input[type="checkbox"]')//
     .forEach((item) => {
       item.checked = checke;  
     });
 });


  //선택삭제 이벤트
  document.querySelector('button.btn2').addEventListener('click',(e)=>{
    document.querySelectorAll('#list tr')
    .forEach((item)=>{
      console.log(item.children[0].children[0])
      if(item.children[0].children[0].checked){
        item.remove();
      }
    })
  })