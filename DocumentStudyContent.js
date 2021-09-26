// ID = title 인 것을 가져와서 활용
let title = document.getElementById("title")
title.innerText = "Got you!"
console.log(title.className)

// getElementsByClassName : 배열로 해당하는 class 이름을 가진 것들을 가져온다.
const hellos = document.getElementsByClassName("hello");
console.log(hellos)

// querySelector : element를 css 방식으로 검색할 수 있다. ex) .classname #idname
// 가장 자주 쓸 검색 함수가 querySelector이다.
// hello 클래스 안에 h1이 있는 구조가 여러개라면, 가장 첫번째 것을 가져옴.
// 다 가져오려면 querySelectorAll 해주어야함.
let title = document.querySelector(".hello h1")
console.log(title)


// 이벤트를 통해 무언가를 수행하도록 하기
function wordClicked() {
    title.style.color = "blue";
}
function mouseEntered() {
    title.innerText = "Mouse is here!"
}
function mouseLeaved() {
    title.innerText = "Mouse is gone!";
}
// 함수를 인수로 넣어줄 때, 절대로 함수 이름 뒤에 괄호를 넣어서는 안됨!
// 클릭 되었을 때
title.addEventListener("click", wordClicked);

// 마우스가 위에 올라갔을 때
title.addEventListener("mouseenter", mouseEntered);

// 마우스가 위에서 내려갔을 때
title.addEventListener("mouseleave", mouseLeaved);