// arrayExe3.js
/* let friendAry = [
    {name:"홍길동", age: 20, weight:56.7},
    {name:"김민기", age: 21, weight:93.7},
    {name:"박철순", age: 22, weight:79.7},
    {name:"이만수", age: 23, weight:88.7}
    
]

// let temp = friendAry.forEach((friend) =>{
//     if(friend.weight > 60){     // 몸무게 60 이상만 출력
//     console.log(friend['age']);  // 나이만 출력
//  }
// });
// console.log(temp);

let temp = friendAry.filter((friend) =>{
    if(friend.weight > 60){     // 몸무게 60 이상만 출력
    console.log(friend);  // 나이만 출력
    return true;
 }
 return false;
});
console.log(temp); */

//empAry => 사원중에서 성별:여자, 급여:5000 이상.
// => femaleAry 저장.

// let femaleAry = empAry.filter(function(elmnt) {
//    if (elmnt.gender.toLowerCase () == "female" && elmnt.salary > 5000) {
//     return true;
//    }
//    else {
//      return false
//    }
// });

// console.log("Result is" , femaleAry);

// let femaleAry = empAry.filter(function(emp) {
//     if (emp.gender == "female" && emp.salary > 5000) {
//      return true;
//     }
//     else {
//       return false
//     }
//  });
 
//  console.log(femaleAry);
let femaleAry = empAry.filter((emp) => {
return emp.gender == "female" && emp.salary > 5000;  // 간결하게줄임 진실또는 거짓 반환
// let femaleAry = empAry.filter(function(emp) {
    // if (emp.gender == "female" && emp.salary > 5000) {
    //  return true;
    // }
    // else {
    //   return false
    // }
 });
 
 console.log(femaleAry);