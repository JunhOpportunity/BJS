///////////////////////////////////////////////////////////////////
// const는 변수를 만들 때 사용하는 것
const a = 5;
const b = 2;

// let도 변수를 만들 때 사용하는 것
let c = 7;
let d = 4;

/* 
그렇다면, const와 let의 차이점은 뭘까?
-> 원래 알고 있었지만, const는 대부분 상수 즉 변하지 않는 것에 사용된다.
C에서 처럼 변수 선언 후 자유롭게 수정, 삽입이 가능한 변수를 만들고 싶다면
let을 사용하자! 

But, 항상 const를 사용하고, 가끔 let을 사용하자. var은 절대 NO NO !
*/

console.log(a + b)
console.log(a / b)

///////////////////////////////////////////////////////////////////
// null과 undefined의 차이
const name = null; // 변수가 비어있지만, null값이 들어가있음
let something; // 변수 안에 아무것도 넣지 않았으므로 undefined

///////////////////////////////////////////////////////////////////
// 배열
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

// 배열에 내용 추가
daysOfWeek.push("sun");
console.log(daysOfWeek);

///////////////////////////////////////////////////////////////////
// object
// 객체 안에서 대입할 때는 '=' 대신 ':' 를 사용한다!
// const player = {
//     name: "junho",
//     points: 10,
//     fat: false
// };

// // 새로운 객체 추가
// player.lastName="pototo";
// console.log(player)

///////////////////////////////////////////////////////////////////
// function
function sayHello(name) {
    console.log("Hello your name is " + name);
}

sayHello("jj");

function plus(a, b){
    console.log(a + b);
}

plus(10, 11)

///////////////////////////////////////////////////////////////////
// object & function
const player = {
    name: "junho",
    sayHello: function(otherPersonName) {
        console.log("hello! " + otherPersonName);
    },
};

console.log(player.name);
player.sayHello("young")

///////////////////////////////////////////////////////////////////
// quiz

const calculate = {
    add: function(a, b){
        console.log(a + b);
    },
    min: function(a, b){
        console.log(a - b)
    },
    div: function(a, b) {
        console.log(a / b)
    },
    mul: function(a, b) {
        console.log(a * b)
    },
    squ: function(a, b) {
        console.log(a ** b)
    }
}

calculate.squ(2, 3)

///////////////////////////////////////////////////////////////////
// parseint : int 형으로 형 변환
parseInt("15") // 문자열 15를 숫자 15로 변환

///////////////////////////////////////////////////////////////////
// prompt : 새로운 팝업 창 띄워서 질문
const age = prompt("How old are you?") // 답변을 age 변수에 저장

///////////////////////////////////////////////////////////////////
// typeof : 무슨 타입인지 알려줌
console.log(typeof age);
console.log(typeof parseInt(age));

///////////////////////////////////////////////////////////////////
// isNaN : 숫자가 아닌가? && if/else if
const age = parseInt(prompt("How old are you?"));
if(isNaN(age) || age <= 0) {
    console.log("Please write a number");
}
else if(age >= 18){
    console.log("You can drink beer");
}
else if(age > 50) {
    console.log("You need exercise");
}