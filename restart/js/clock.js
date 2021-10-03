const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    

}

setInterval(getClock, 1000); // 5초 마다 호출

// padStart(원하는 길이, "남은 자리에 들어갈 문자나 숫자")
// ex) "1".padStart(2, "0")
// 주의, padStart는 문자열에만 사용 가능