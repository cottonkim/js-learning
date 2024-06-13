const bg = document.querySelector('.bg');
const links = document.querySelectorAll('.container a');
const bgShow = 'bg-show'

//링크에 마우스를 올림
// 링크의 주소들을 담아서 저장
// 마우스를 올리면 각 태그에 맞는 이미지가 백그라운드에 저장되어 나타남

for (let link of links) { 
    const imgs = new Image();
    imgs.src = link.dataset.bg;

    link.addEventListener('mouseenter', function () {        
        bg.style.backgroundImage = `url(${this.dataset.bg})`
        document.body.classList.add(bgShow);
    })
    link.addEventListener('mouseleave', function () {        
        document.body.classList.remove(bgShow);
    })
}

/*
const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

for (let link of links) { 
    // 하단 두줄이 없어도 작동되지만, 이미지를 미리 서버에 저장해서 훨씬 빠르게 이미지를 불러올 수 있음.
    const img = new Image(); // class 문법에서는 앞에 대문자
    img.src = link.dataset.bg;

    link.addEventListener('mouseenter', function () { 
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showClass);
    })
    link.addEventListener('mouseleave', function () { 
        document.body.classList.remove(showClass);
    })
}

// 객체
function Person(name) { 
    this.name = name;
    this.introduce = function () { 
        return 'My name is' + this.name;
    }
}

p1 = new Person(' Somi');
document.write(p1.introduce());

*/