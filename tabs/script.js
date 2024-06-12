/*
링크를 클릭하면 클릭한 그 요소의 href 속성의 값을 변수 tabTarget에 저장. 저장된 값에서 #을 삭제한다
tabTarget = tabs-1
*/

let orgTarget = '#tabs-1'; // a.replace('b', 'c') a 라는 변수에서 b를 c로 변경할 수 있음
let targetLinks = document.querySelectorAll('.tab-menu a');
let tabContents = document.querySelectorAll('#tab-content div')

// 클릭하면 할 일
for (let targetLink of targetLinks) { 
    targetLink.addEventListener('click', function (e) { 
        e.preventDefault();
        orgTarget = e.target.getAttribute('href');
        
        let tabTarget = orgTarget.replace('#', '');
        for (let tabContent of tabContents) { 
            tabContent.style.display = 'none';
        }
        document.getElementById(tabTarget).style.display = 'block';

        for (let i = 0; i < targetLinks.length; i++) { 
            targetLinks[i].classList.remove('active');        
            e.target.classList.add('active');
        }        
    })
}
document.getElementById('tabs-1').style.display = 'block';

