const panelQuestions = document.querySelectorAll('.panel-question');
const panelHeadings = document.querySelectorAll('.panel-heading');
const panelBodys = document.querySelectorAll('.panel-body');
const btnCollapse = document.getElementById('btn-collapse');
const clickedClass = 'active';


let curIdx = 0;

// 제목을 클릭하면 할 일
for (let i = 0; i < panelHeadings.length; i++) {         
    panelHeadings[i].onclick = function (ev) { 
        for (let panelQuestion of panelQuestions) { 
            panelQuestion.classList.remove(clickedClass);
        }
        ev.target.parentNode.classList.add(clickedClass);
        // ev.target은 클릭한 것!!!.의 부모에게 클래스 추가
        activateBody();
    }
}

// body acive 하기
function activateBody() { 
    for (let panelBody of panelBodys) { 
        panelBody.style.display = 'none'
    }

    let activePanel = document.querySelector('.panel-question.active .panel-body')
    activePanel.style.display = 'block'
}

// collapse all 하기
btnCollapse.addEventListener('click', function () { 
    for (let panelBody of panelBodys) {
        panelBody.style.display = 'none'
    }
})

activateBody();

/*
전체가 안보이게 하기 - 혼자 시도해봄
btnCollapse.addEventListener('click', function () { 
    for (let panelBody of panelBodys) { 
        panelBody.classList.add(clickedClass)
    }
})

function displayNone() { 
    for (let i = 0; i < panelQuestions.length; i++) {         
        panelHeadings[i].onclick = function () { 
            panelBodys[i].classList.toggle(clickedClass)
        }
    }
}

displayNone()
*/

