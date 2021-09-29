
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(events) {
    events.preventDefault(); // 브라우저의 기본 행동들을 하지 못하게 하는 함수.
    const username = loginInput.ariaValueMax;
    loginForm.classList.add("hidden")
    console.log(username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function linkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("click!");
    
}

loginForm.addEventListener("submit", onSubmit)
link.addEventListener("click", linkClick)