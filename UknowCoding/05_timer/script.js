// 다시 연습
const time = document.getElementById('time');
const stopBtn = document.querySelector('.stop');
const goBtn = document.querySelector('.go');
let timeOn;

function getTime() { 
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    time.textContent = `${hours}:${minutes}:${seconds}`    
}
getTime();
timeOn = setInterval(getTime, 1000);
goBtn.onclick = function () { 
    setInterval(getTime, 1000);
}

stopBtn.onclick = function () { 
    clearInterval(timeOn);
}


/* 첫번째d
let handleId = 0; // 시계가 움직일 경우 동작에 대한 ID
const $h1 = document.getElementById("time");
const stopBtn = document.querySelector('.stop');
const goBtn = document.querySelector('.go');

function getTime() { 
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`
    $h1.textContent = time;
}

getTime();

goBtn.onclick = function () { 
    if (handleId === 0) { 
        handleId = setInterval(getTime, 1000)
    }
}

stopBtn.onclick = function () {     
    clearInterval(handleId);
    handleId = 0;    
}
*/