const quotes = [
    {
        quote: "포기하지 마라. 끝까지 물고 늘어져라",
        author: "JUNHO KIM",
    },
    {
        quote: "과거를 지양하라. 미래를 지향하라",
        author: "JUNHO KIM",
    },
    {
        quote: "같은 파도는 다시 오지 않는다. 기회도 그렇다.",
        author: "JUNHO KIM",
    },
    {
        quote: "불행은 생각하지 않은 곳에서도 나타나지만, 성공은 생각하지 않은 곳에서 나타나지 않는다.",
        author: "JUNHO KIM",
    },
    {
        quote: "성공은 한 번에 이루어지지 않는다. 매일, 꾸준히 노력한 자에게 주어진다.",
        author: "JUNHO KIM",
    },
    {
        quote: "당신을 다른 사람과 비교하지 말고, 오직 어제의 당신과만 비교하라.",
        author: "JORDAN b. PETERSON",
    },
    {
        quote: "나는 내가 위대해질 운명을 타고났다는 것을 항상 알고 있었다",
        author: "Oprah Gail Winfrey",
    },
    {
        quote: "높은 곳에 올라가 본 사람만이 낮은 곳의 문제점을 파악할 수 있다.",
        author: "JUNHO KIM",
    },
    {
        quote: "우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다.",
        author: "Steve Jobs",
    },
    {
        quote: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
        author: "Bill Gates",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



// Math.floor() 소수점 붙어있다면 가장 아래까지 내려감. int형 변환이랑 비슷
// Math.ceil() 소수점 붙어있다면 가장 위까지 올라감. 반올림 ㄴㄴ 무조건 올림
// Math.round() 소수점 붙어있다면 반올림

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;