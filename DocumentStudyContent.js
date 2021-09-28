// ID = h1 인 것을 가져와서 활용
let h1 = document.getElementById("h1")
h1.innerText = "Got you!"
console.log(h1.className)

// getElementsByClassName : 배열로 해당하는 class 이름을 가진 것들을 가져온다.
const hellos = document.getElementsByClassName("hello");
console.log(hellos)

// querySelector : element를 css 방식으로 검색할 수 있다. ex) .classname #idname
// 가장 자주 쓸 검색 함수가 querySelector이다.
// hello 클래스 안에 h1이 있는 구조가 여러개라면, 가장 첫번째 것을 가져옴.
// 다 가져오려면 querySelectorAll 해주어야함.
let h1 = document.querySelector(".hello h1")
console.log(h1)


// 이벤트를 통해 무언가를 수행하도록 하기
function wordClicked() {
    h1.style.color = "blue";
}
function mouseEntered() {
    h1.innerText = "Mouse is here!"
}
function mouseLeaved() {
    h1.innerText = "Mouse is gone!";
}
// 함수를 인수로 넣어줄 때, 절대로 함수 이름 뒤에 괄호를 넣어서는 안됨!
// 클릭 되었을 때
h1.addEventListener("click", wordClicked);

// 마우스가 위에 올라갔을 때
h1.addEventListener("mouseenter", mouseEntered);

// 마우스가 위에서 내려갔을 때
h1.addEventListener("mouseleave", mouseLeaved);

// window 관련 event "https://developer.mozilla.org/ko/docs/Web/API/Window"
// body, head, h1은 document로 가져올 수 있으나 대부분은 불가능.
function windowResize() {
    document.body.style.backgroundColor = "tomato";
}
function widnowCopy() {
    alert("Stop. Do not copy")
}
function windowOffline() {
    alert("wifi is gone")
}
function windowOnline() {
    alert("wifi is connect!")
}

window.addEventListener("resize", windowResize);
window.addEventListener("copy", widnowCopy);
window.addEventListener("offline", windowOffline);
window.addEventListener("online", windowOnline);

// css에서 글자 색깔 지정 후 js로 가져오기
function wordClicked() {
    // css의 클래스 이름을 한 글자라도 빼먹거나 잘못 쓸 경우 오류 발생.
    // 게다가 어디에서 오류가 났는지도 확인이 힘듬.
    // 따라서 클래스 이름을 담고있는 변수 하나 선언해서 그걸로 대체!
    // const classNameCss = "active"
    // if(h1.className === classNameCss) {
    //     h1.className = ""
    // } else {
    //     h1.className = classNameCss
    // }

    // 위의 모든 코드를 한 코드로 압축 가능.
    h1.classList.toggle("clicked");
}
