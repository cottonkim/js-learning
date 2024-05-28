const today = document.getElementById('today');
const time = document.getElementById('time');

function timer() { 
    const date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    month = month < 10 ? `0${month}` : month;
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    today.textContent = `${year}년 ${month}월 ${days}일`
    time.textContent = `${hours}시 ${minutes}분 ${seconds}초`
}
timer();
setInterval(timer, 1000);