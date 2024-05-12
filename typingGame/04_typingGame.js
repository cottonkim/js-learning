// 사용변수
let score = 0;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display')
const scoreDisplay = document.querySelector('.score')

wordInput.addEventListener('input', () => { // addEventListener('이벤트', 기능)
    
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) { 
        score++;
        scoreDisplay.innerHTML = score;
        wordInput.value = ''; // 인풋의 value를 초기화
    }
    // console.log(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase());
}) 