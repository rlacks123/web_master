// forExe1.js

// 3 * 1 = 3
// 3 * 2 = 6
// ...
// 3 * 9  = 27
// <table border="2">
// <tr style="background: pink"><tb>3 * 1</tb><tb>=</tb><tb>3</tb><tr>
// <tr style="background: cyon"><tb>3 * 2</tb><tb>=</tb><tb>6</tb><tr>
// ......
// <tr<tb>3 * 8</tb><tb>=</tb><tb>24</tb><tr>
// <tr<tb>3 * 9</tb><tb>=</tb><tb>27</tb><tr>
// </table>


// const num = 3;
// document.write('<table border="2" style="">');
// for (let i = 1; i <=9; i++) {
//     if (1%2==1) { //홀수 .
//     document.write('<tr style="background: pink;" ><td>' + num + ' * ' + i + ' = <tr><td>' + num * i +'<br>');
//     } else { // 짝수.
//     document.write('<tr style="background: cyon;" ><td>' + num + ' * ' + i + ' = <tr><td>' + num * i +'<br>');
//     }
// }
// document.write('</table border>'); 오전수업

document.write('<table border="2" style="">');
for (let j = 2; j <= 9; j++) {
    const num = j; // 2, 3, 4, 5, . . . 9
    for (var i = 1; i <= 9; i++) {
        if (i % 2 == 1) { //홀수 .
            document.write(`<tr style="background: pink; color: white;" ><td>' ${num} * ${i} </tb><td> = ${num * i} </tb></tr>`);
        } else { // 짝수.
            document.write(`<tr style="background: cyan; color: white;" ><td>' ${num} * ${i} </tb><td> = ${num * i} </tb></tr>`);
        }
    } // end of for(let i=1...)
}

document.write('</table border>'); // 포어안에 반복문 오후수업