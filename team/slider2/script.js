const sliderWrapper = document.querySelector('.container'); 
const sliderContainer = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let slideCount = slides.length; // 슬라이드 개수
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let curIdx = 0; // 현재 인덱스 번호. 지금 어디를 보고 있는건지
let topHeight = 0; // 높이로 반영할 변수
let slideWidth = 100;

// 슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide() { 
    for (let i = 0; i < slideCount; i++) { 
        if (slides[i].offsetHeight > topHeight) { 
            topHeight = slides[i].offsetHeight;
        }        
    }
    sliderWrapper.style.height = `${topHeight}px`;
    sliderContainer.style.height = `${topHeight}px`;
}

calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기
for (let j = 0; j < slideCount; j++) { 
    slides[j].style.left = j * slideWidth + '%';
}

// 슬라이드 이동함수
function goToSlide(idx) { 
    sliderContainer.style.left = idx * -100 + '%';
    sliderContainer.classList.add('animated');
    curIdx = idx;
    // updateBtn(); 버튼 disabled 만드는 함수 제거
};

// 버튼 기능 업데이트 함수
function updateBtn() { 
    // 처음일때
    if (curIdx === 0) {
        prevBtn.classList.add('disabled');
    } else{ 
        prevBtn.classList.remove('disabled');
    }
    // 마지막일때
    if (curIdx === slideCount - 1) {
        nextBtn.classList.add('disabled');
    } else { 
        nextBtn.classList.remove('disabled');
    }
}

// 버튼을 클릭하면 슬라이드 이동시키기
nextBtn.addEventListener('click', function (event) { 
    event.preventDefault();
    if (curIdx < slideCount - 1) {
        goToSlide(curIdx + 1);
    } else { 
        goToSlide(0);
    }
})
prevBtn.addEventListener('click', function (event) { 
    event.preventDefault();
    if (curIdx !== 0) { // 처음이 아니라면 curIdx > 0
        goToSlide(curIdx - 1);
    } else { 
        goToSlide(slideCount - 1)
    }
})

// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);