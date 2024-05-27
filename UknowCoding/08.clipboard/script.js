const text = document.getElementById('text');
const copyBtn = document.getElementById('copy');

copyBtn.onclick = function () { 
    text.select(); // select는 텍스트를 선택하는 것
    document.execCommand('copy'); // 편집 가능한 부분에 대해 명령어를 실행시켜줌
    alert('copied!')
}