
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const link = document.querySelector("a")

function onSubmit(events) {
    events.preventDefault(); // 브라우저의 기본 행동들을 하지 못하게 하는 함수.
    console.log(events);
}

function linkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("click!");
}

loginForm.addEventListener("submit", onSubmit)
link.addEventListener("click", linkClick)