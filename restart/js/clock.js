const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); // 5초 마다 호출
