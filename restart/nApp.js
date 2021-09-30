const title = document.querySelector(".hello h1");

function titleClicked() {
    title.style.color = "Blue";
}

function mouseEnter() {
    title.innerText = "Mouse is here"
}

function mouseLeave() {
    title.innerText = "Mouse is gone"
}

title.addEventListener("click", titleClicked);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);
