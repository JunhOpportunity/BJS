
const h1 = document.querySelector(".hello h1");
// classList를 이용한 클래스 추가&삭제
function titleClicked() {
    const activeName = "active";
    if(h1.classList.contains(activeName)) { // contains = 괄호 안의 인자가 클래스 리스트에 있는지 확인
        h1.classList.remove(activeName);
    } else {
        h1.classList.add(activeName);
    }
}

h1.classList.toggle(activeName); // 위 코드들을 한 줄로 줄인 것. 있으면 삭제, 없으면 추가
