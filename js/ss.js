//1문제 변수 num과
let num1 =100;
let str1 ='100';
console.log(num1 + str);

//2문제 변수 num에 17을 대입한 후 num값을 3으로 나눈 값을 num1에 num값을 3으로 나눈 나머지를
//num2에 저장하는 코드를 작성하세요
let num =17;
let num1 = num /3;
let num2 = num % 3;

//3문제 1부터 100까지의 숫자의 합을 구하는 코드를 작성하세요


//문제 4 
//51에서 100사이의  임의의 수를 생성하는 작업을 5번 실행하도록 코드를 작성하세요

// function number () {
//     let result = [];
//     for (let i=0; i < 5; i++ {

//     })
// }

for(let i=1; i<5; i++){
    let jlwon = parseInt(Math.random() *50)+51
    console.log(jiwon)
};

//5문제 4에서 작성한 코드를 참고하여 5개의 값을 배열에 저장한후 가장 큰값과 가장 작은값을
//구하는 코드를 작성하세요
let max =51;
let min = 100;
let numAry = [];
let i=0;
for(; i<5; i++){
    let num = parseInt(Math.random() *50 +51)
    numAry[i] = num;
    if(max < numAry[i]){
        max = numAry[i];
    }
    if(min > numAry[i]){
        mix = numAry[i];
    }
}
//문제6 배열 friends = ['홍김동','김민수','박창석','고민형','김형식']을 선언한 후 '김'씨 성을 가진
//친구만 kimsAry에 저장하도록 코드를 작성하세요.
let friends = ['홍김동','김민수','박창석','고민형','김형식']
let kimAry=friends.filter(function(elem,dix,ary){
    if(elem.indexOf('김') == 0){
        return true;
    } 
    return false;
})
console.log(kimsAry);