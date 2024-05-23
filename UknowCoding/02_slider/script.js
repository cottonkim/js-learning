let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 620;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');

function next() { 
    if (curPos < 2) {
        prevBtn.removeAttribute('disabled');
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    }
    if (curPos === 2) {
        nextBtn.setAttribute('disabled', 'true');
    }
}

function prev() { 
    if (curPos > 0) {
        nextBtn.removeAttribute('disabled');
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`
        curPos -= 1;
    }
    if (curPos === 0) { 
        prevBtn.setAttribute('disabled', 'true')
    }
}

function init() { // 이전으로 돌아갈 수 없게 초기화!
    prevBtn.setAttribute('disabled', 'true');
    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)
}

init();