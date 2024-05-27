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
