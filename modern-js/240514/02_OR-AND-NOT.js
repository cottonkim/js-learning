/*
사이 범위 확인하기
중요도: 3
age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

"이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

let age = prompt('Wie alt bist du?');
if (age >= 14 && age <= 90) {
    document.write(`Du bist ${age} Jahre alt.`)
} else { 
    document.write(`Du bist zu alt oder zu jung.`)
}

*/

/*
바깥 범위 확인하기
중요도: 3
age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.

답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.

let age2;
if (!(age2 >= 14 && age2 <= 90))
if (age2 < 14 || age2 > 90)
*/

/*
로그인 구현하기
중요도: 3
프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
순서도는 다음과 같습니다.

중첩 if 블록을 사용하고, 코드 전체의 가독성을 고려해 답안을 작성하세요.
힌트: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.

let admin = prompt("Who's there?");

if (admin === 'admin') {
    let password;
    password = prompt('password?');
    
    if (password === '1234') {
        alert('Welcome!')
    } else if (password === '' || password === null) {
        alert('Canceled')
    } else {
        alert('Wrong password');
    }
} else if (admin === '' || admin === null) {
    alert('Canceled')
} else { 
    alert('I don\'t know you')
}
*/

/*
"switch"문을 "if"문으로 변환하기
중요도: 5
"switch"문을 사용해 작성된 아래 코드를 if..else문을 사용한 코드로 변환해 보세요.
*/

if (browser === 'Edge') {
    alert("Edge를 사용하고 계시네요!");
} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else { 
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}

/*
"if"문을 "switch"문으로 변환하기
중요도: 4
아래 코드를 switch문을 사용한 코드로 바꿔보세요. switch문은 하나만 사용해야 합니다.
*/
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
 }

 /*
'?'나 '||'를 사용하여 함수 다시 작성하기
중요도: 4
아래 함수는 매개변수 age가 18보다 큰 경우 true를 반환합니다.
그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후, 해당 결과를 반환합니다.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.
아래 조건을 충족하는 해답 2개를 작성해야 합니다.

물음표 연산자 ?를 사용하여 본문을 작성
OR 연산자 ||를 사용하여 본문을 작성
 */

function checkAge(age) { 
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge(age) { 
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

/*
min(a, b) 함수 만들기
중요도: 1
a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.

만든 함수는 아래와 같이 동작해야 합니다.

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) { 
    return  return a < b ? a : b;
}


/*
pow(x,n) 함수 만들기
중요도: 4
x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고 pow(x,n)의 반환 값을 보여주는 코드를 작성해 보세요.

주의사항: n은 1 이상의 자연수이어야 합니다. 이외의 경우엔 자연수를 입력하라는 얼럿 창을 띄워주어야 합니다.
*/

let x = +prompt('x?', '');
let n = +prompt('n?', '');

if (n % 1 !== 0) {
    alert('정수를 입력하세요!')
} else { 
    pow(x, n);
}

function pow(x, n) {
    return x ** n;
}

/*
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`);
} else {
  alert( pow(x, n) );
}
*/
