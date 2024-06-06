const btt = document.getElementById('back-to-top');
const docElem = document.documentElement;
let docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
let offset = docHeight / 4;;
let scrollPos;

window.addEventListener('scroll', function () { 
    scrollPos = docElem.scrollTop;
    if (scrollPos > offset) {
        btt.classList.add('visible')
    } else { 
        btt.classList.remove('visible')
    }
})

btt.addEventListener('click', function (event) { 
    event.preventDefault();
    scrollToTop();
})

function scrollToTop() { 
    let smooth = setInterval(() => {
        if (scrollPos !== 0) {
            window.scrollBy(0, -55)
        } else { 
            clearInterval(smooth)
        }    
    }, 10);   
}


/*
// 01. 변수 지정하기
const docElem = document.documentElement; // html 문서 자체를 가져옴
const btt = document.getElementById('back-to-top');
let offset; // 전체 문서의 1/4
let scrollPos; // 스크롤의 양
let docHeight; // 문서의 높이

// 02. 문서 높이 계산하기
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
//  docElem.offsetHeight 또는 scrollHeight로 보여지는 높이를 가져옴. Math.max를 활용해서 둘 중 더 큰 문서의 높이를 사용하도록 함.

if (docHeight != 'undefined') {  // 문서 높이가 지정이 안되어있으면,
    offset = docHeight / 4;
}

// 03. 스크롤 이벤트 추가
window.addEventListener('scroll', function () {
    scrollPos = docElem.scrollTop; // 스크롤의 양
    if (scrollPos > offset) {
        btt.classList.add('visible');
    } else if (scrollPos < offset) { 
        btt.classList.remove('visible');
    }

    // btt.className = (scrollPos > offset) ? 'visible' : ''; 클래스명 바꾸기
});

// 04. 클릭하면 스크롤을 0으로 만들어서 올라가기
btt.addEventListener('click', function (event) { // event는 btt의 기본 속성을 가지고 옴
    event.preventDefault(); // event의 기본 속성을 막음, 여기서는 링크의 본연의 기능을 막는다.
    scrollToTop();
})

function scrollToTop() { 
    let scrollInterval = setInterval(function () { // 일정 시간마다 반복
        if (scrollPos !== 0) { // 스크롤 양이 0이 아닐때
            window.scrollBy(0, -55) // 윈도우의 스크롤 양을 바꾸기 (x, y) y축을 -55만큼 빼주기
        } else { 
            clearInterval(scrollInterval) // 스크롤 양이 0이면 멈추기
        }
    },15)
}

*/