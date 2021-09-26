const title = document.querySelector(".hello h1");

function wordClicked() {
    title.style.color = "blue";
}
function mouseEntered() {
    title.innerText = "Mouse is here!"
}
function mouseLeaved() {
    title.innerText = "Mouse is gone!";
}
// 이벤트를 통해 무언가를 수행하도록 하기
// 함수를 인수로 넣어줄 때, 절대로 함수 이름 뒤에 괄호를 넣어서는 안됨!
// 클릭 되었을 때
title.addEventListener("click", wordClicked);

// 마우스가 위에 올라갔을 때
title.addEventListener("mouseenter", mouseEntered);

// 마우스가 위에서 내려갔을 때
title.addEventListener("mouseleave", mouseLeaved);