// object3.js

let person = {
    name: "박민수",
    birth: "2000-04-05",
    blooType: 'A',
    showInfo: function () {
        // console.log(`이름은 ${person.name}이고, 생일은 ${person.birth}입니다.`) // 객체소속의 함수 => 메소드.//이렇게 해도되고
        console.log(`이름은 ${this.name}이고, 생일은 ${this.birth} 입니다.`) //this 자기자신을 가리킴

    }
}

person.showInfo(); // () 이런건 메소드

Math.round(15.2); // 메소드 실행.
Math.random(); // 0 ~ 1 사이의 임의의 실수. 애도 메소드
console.log(Math.PI); //(Math.PI) 안에있는애들 속성
for (let i=1; i<= 5; i++) {
    // console.log(Math.random() * 10 + 1); // 1 ~ 10 사이의 임의 수 생성.
    console.log(parseInt(Math.random() * 10  + 1)); // parseInt 소숫점 버림

}

// 반복문 (for, while); for 몇번반복할때가 명확할때 , while 조건이 명확할때까지\
let i = 0;
while( i < 5) {
    console.log('i의 값은' + i);
    i++;
}

// 어떤 조건이 만족할 동안에만 반복을 실행하도록.
while(true) {
    if (parseInt(Math.random() * 10  + 1) == 5){
        break
    }
}

//임의의 문자를 입력 => 콘솔: 당신이 입력한 문자는 ??? 입니다.
//"종료" 문자가 들어오면 반복문을 종료.


// while(true){
//     let iv = prompt("임의의 문자를 입력!")
//     console.log(parseInt(`당신이 입력한 문자는 ${iv} 입니다`) );
//     if (iv == '종료') {
//         break;
//     }
// }

i =0;
while(true){
    let iv = prompt("임의의 문자를 입력!");
    console.log(`당신이 입력한 문자는 ${iv} 입니다.`);
    i++; // 횟수체크.
    if (iv == '종료' || i== 5) {
        break;
    }
}