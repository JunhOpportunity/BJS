const title = document.querySelector(".hello h1");

function titleClicked() {
    const currentColor = title.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor
}

// function mouseEnter() {
//     title.innerText = "Mouse is here"
// }

// function mouseLeave() {
//     title.innerText = "Mouse is gone"
// }

// function resized() {
//     document.body.style.backgroundColor = "tomato";
// }

// function copied() {
//     alert("Do Not Copy!");
// }

title.addEventListener("click", titleClicked);
// title.addEventListener("mouseenter", mouseEnter);
// title.addEventListener("mouseleave", mouseLeave);

// window.addEventListener("resize", resized);
// window.addEventListener("copy", copied);