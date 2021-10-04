const images = ["img1.png", "img2.jpg", "img3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


// 여기부터는 JS에서 HTML에 img 엘리먼트 추가하기.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // append : 제일 뒤에 추가 | prepend : 제잎 위에 추가
