const numbersDiv = document.querySelector('.numbers');
const drawBtn = document.querySelector('#draw');
const resetBtn = document.querySelector('#reset');

let lottoNumbers = [];
let colors = ['tomato', 'blue', 'yellow', 'orange', 'purple', 'teal'];

function color(number) {
    let index = Math.floor(number / 10);
    const eachNumDiv = document.createElement('div');    
    eachNumDiv.classList.add('eachnum');
    eachNumDiv.style.backgroundColor = colors[index];
    eachNumDiv.textContent = number;
    numbersDiv.appendChild(eachNumDiv)
}

drawBtn.addEventListener('click', function() { 
    while (lottoNumbers.length < 6) { 
        let ran = Math.floor(Math.random() * 45) + 1;        
        if (lottoNumbers.indexOf(ran) !== 1) { 
            lottoNumbers.push(ran);      
            color(ran);            
        }
    }
});

resetBtn.addEventListener('click', function () { 
    lottoNumbers = [];
    numbersDiv.textContent = '';
})