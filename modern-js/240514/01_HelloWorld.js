/*
01. 과제
외부 스크립트를 이용해 alert 창 띄우기
중요도: 5
이전 과제 alert 창 띄우기의 해답에 있는 스크립트를 alert.js라는 외부 파일로 옮겨보세요.
해당 파일을 문서와 동일한 경로로 옮긴 후, 스크립트가 기존처럼 alert 창을 잘 띄워주는지 확인해보세요.
*/
alert('자바스크립트!')

/*
02. 과제 - 바람직한 변수명
변수 가지고 놀기
중요도: 2
admin과 name이라는 변수를 선언하세요.
name에 값으로 "John"을 할당해 보세요.
name의 값을 admin에 복사해 보세요.
admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
*/

let admin;
let name;
name = 'John';
admin = name;
alert(admin);

/*
03. 과제 - 올바른 이름 선택하기
중요도: 3
현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
*/

const ourPlanetName = "earth";
let currentUserName = "Somi";

/*
04. 과제 - 간단한 페이지 만들기
간단한 페이지 만들기
중요도: 4
사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지를 만들어 보세요.
*/

let userName = prompt('Wie heißen Sie?', '');
document.write(`Hallo, ${userName}`)


/*
05. 과제 - 자바스크립트의 공식 이름
if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.
사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.
*/

let javaScriptName = prompt('Wie ist den offizielen Name von Javascript?', '');
if (javaScriptName === 'ECMAScript') {
    alert('정답입니다!')
} else { 
    alert('모르셨나요? 정답은 ECMAScript입니다!')
}

// (javaScriptName === 'ECMAScript') ?  alert('정답입니다!') : alert('모르셨나요? 정답은 ECMAScript입니다!')

/*
06. 과제 - 입력받은 숫자의 부호 표시하기
if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

입력받은 숫자가 0보다 큰 경우 1을 출력
입력받은 숫자가 0보다 작은 경우 -1을 출력
입력받은 숫자가 0인 경우 0을 출력
(사용자는 항상 숫자를 입력한다고 가정)
*/

let number = +prompt('숫자를 입력하세요', '');

if (number > 0) {
    alert(1)
} else if (number = 0) {
    alert(0)
} else { 
    alert(-1)
}

/* 
07. 과제 - 'if..else'를 '?'로 교체하기
조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.
가독성을 위해 표현식을 여러 줄로 분할해 작성해 보시길 바랍니다.

let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}
*/

let message = (login == '직원') ? '안녕하세요' :
        (login == '임원') ? '환영합니다.' :
        (login == '') ? '로그인이 필요합니다.' :
        '';