/*
무한스크롤에서 사용되는 속성들
window.innerHeight - 브라우저에서 실제로 표시되는 영역의 높이. 사용자가 보고있는 영역의 높이
window.scrollY - 스크롤이 세로로 얼마나 이동했는지를 px로 나타냄. 0부터 시작해서 스크롤을 내릴수록 증가
document.body.offsetHeight - 요소의 실제 높이 = 보이는 영역 + 가려진 영역 (전체의 높이)
*/

let count = 2;
window.onscroll = function () { 
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
        let toAdd = document.createElement("div");
        toAdd.classList.add("box")
        toAdd.textContent = `${++count}번째 블록`
        document.querySelector('section').appendChild(toAdd);
    }
}