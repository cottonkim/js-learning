const content = `I'm Somi, Frond-End Developer`;
const text = document.getElementById('text')
let index = 0; // content 문자열에 접근하기 위한 인덱스

function typing() { 
    text.textContent += content[index++];
    if (index > content.length) { 
        text.textContent = '';
        index = 0;
    }
}

setInterval(typing, 300)

/*
const content = 'Typing Effect';
let text = document.getElementById('text');
let index = 0;

function typing() {
    text.textContent += content[index++];
    if (index > content.length) {
        text.textContent = '';
        index = 0;
    }
}

setInterval(typing, 500);
*/