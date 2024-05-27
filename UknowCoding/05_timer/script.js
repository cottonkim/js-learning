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