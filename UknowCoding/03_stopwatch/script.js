let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const appendTens = document.getElementById('tenMillis');

const startBtn = document.getElementById('bt__start');
const stopBtn = document.getElementById('bt__stop');
const resetBtn = document.getElementById('bt__reset');

let intervalId; // 스탑버튼에 클리어 인터벌을 넣기 위해서

// 10ms마다 시간에 대한 숫자가 증가한다
function operateTimer() { 
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : `0${tenMillis}`;
    if (tenMillis > 99) {
        seconds++;
        appendSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
        tenMillis = 0;
        appendTens.textContent = '00';
    }

    if (seconds > 3) { 
        minutes++;
        appendMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        seconds = 0;
        appendSeconds.textContent = '00'
    }
    }

startBtn.addEventListener('click', function () { 
    clearInterval(intervalId)  // 의도치않게 두 번 누르게 되면 id가 겹치게 되는 경우가 생길 수 잇어서 기존 아이디를 제거하고 다시. 
    intervalId = setInterval(operateTimer, 10)
})

stopBtn.onclick = function () { 
    clearInterval(intervalId)   
}

resetBtn.onclick = function () { 
    clearInterval(intervalId)   
    minutes = 0;
    appendMinutes.textContent = '00'
    seconds = 0;
    appendSeconds.textContent = '00'
    tenMillis = 0;
    appendTens.textContent = '00'
}
