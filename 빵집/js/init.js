// init.js

// id, pw, name 멤버데이터

const memberData = [{
    id: 'user01',
    pw: '1111',
    name: '고객1',
    responsibiliry: 'User'
},
{
    id: 'user02',
    pw: '2222',
    name: '고객2',
    responsibiliry: 'User'
},
{
    id: 'user03',
    pw: '3333',
    name: '관리자',
    responsibiliry: 'Admin'
}
]


// pcode, pname, price 제품 데이터
const productData = [{
    pcode: 'P001',
    pname: '식빵',
    price: 3000,
    image: 'plani.jpg'
},
{
    pcode: 'P002',
    pname: '메론빵',
    price: 2500,
    image: 'melon.jpg'
},
{
    pcode: 'P003',
    pname: '크림빵',
    price: 2000,
    image: 'cream.jpg'
},
{
    pcode: 'P004',
    pname: '단팥빵',
    price: 2000,
    image: 'RedBeanBuns.jpg'
},
{
    pcode: 'P005',
    pname: '피자빵',
    price: 3000,
    image: 'Pizza.jpg'
},
{
    pcode: 'P006',
    pname: '사라다빵',
    price: 2500,
    image: 'Sarada.jpg'
},
{
    pcode: 'P007',
    pname: '소보루빵',
    price: 2000,
    image: '소보루.jpg'
},
{
    pcode: 'P008',
    pname: '소금빵',
    price: 2000,
    image: '소금빵.jpg'
},
{
    pcode: 'P009',
    pname: '맘모스빵',
    price: 3500,
    image: '맘모스빵.jpg'
},
{
    pcode: 'P0010',
    pname: '통밀빵',
    price: 3500,
    image: '통밀빵.jpg'
},
{
    pcode: 'P0011',
    pname: '마늘빵',
    price: 2500,
    image: '마늘빵.jpg'
},
{
    pcode: 'P0012',
    pname: '커피',
    price: 2500,
    image: '커피.jpg'
}

]

// id, pcode, qty 장바구니 데이터
const cartData = [{
    id: 'user01',
    pcode: 'P003',
    qty: 2
},
{
    id: 'user01',
    pcode: 'P004',
    qty: 2
},
{
    id: 'user01',
    pcode: 'P006',
    qty: 2
},
{
    id: 'user02',
    pcode: 'P004',
    qty: 2
},
{
    id: 'user02',
    pcode: 'P005',
    qty: 2
},
{
    id: 'user02',
    pcode: 'P006',
    qty: 2
}
]

//
// const paymentData = [{
//     id: 'user01',
//     pw: '1111',
//     pcode: 'P003',
//     qty: 2
// }]


// 객체의 정보를 활용해서 row 생성.
function makeRow(obj = {}) {
let tr = document.createElement('tr');
for (let prop in obj) {
    let td = document.createElement('td');
    td.innerHTML = obj[prop];
    tr.appendChild(td);
}

return tr;
}