const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

for (let link of links) { 
    // 하단 두줄이 없어도 작동되지만, 이미지를 미리 서버에 저장해서 훨씬 빠르게 이미지를 불러올 수 있음.
    const img = new Image();
    img.src = link.dataset.bg;

    link.addEventListener('mouseenter', function () { 
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showClass);
    })
    link.addEventListener('mouseleave', function () { 
        document.body.classList.remove(showClass);
    })
}
