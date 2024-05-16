/*
계산기 만들기
중요도: 5
calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.
let calculator = {
  // ... 여기에 답안 작성 ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
    read() { 
        this.num1 = +prompt('숫자1', '');
        this.num2 = +prompt('숫자2', '');
    },
    sum() { 
        return this.num1 + this.num2;
    },
    mul() { 
        return this.num1 * this.num2
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*
계산기 만들기
중요도: 5
아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
예시:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() { 
    this.read = function () {
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/*
누산기 만들기
중요도: 5
생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

데모를 위한 코드는 다음과 같습니다.

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
*/
function Accumulator(startingValue) { 
    this.value = startingValue;
    this.read = function () { 
        this.value += +prompt('num', '');
    }
}

let accumulator = new Accumulator(1);
accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함


/*
6.35.toFixed(1) == 6.3인 이유는 무엇일까요?
중요도: 4
*/
alert(Math.round(6.35 * 10) / 10);

/*
숫자를 입력할 때까지 반복하기
중요도: 5
사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.

반환되는 값은 꼭 숫자형 값이어야 합니다.

사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환하세요.
*/

function readNum() { 
    let number;
    do { 
        number = prompt('num?', '');
    } while (!isFinite(number)); //isFinite(value) : value가 숫자인지 검증하는 메소드 * 빈문자열, 공백만 있는 문자열은 0으로 취급됨

    if (number === null || number === '') return null;
    
    return +num;
}
alert(`Read: ${readNum()}`);

// 첫 글자를 대문자로 변경하기
function ucFirst(str) { 
    return str[0].toUpperCase() + str.slice(1);
}
ucFirst("john")

// 스팸 문자열 걸러내기
function checkSpam(str) { 
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
    ) return true;
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

// 문자열 줄이기
function truncate(str, maxlength) { 
    let strLength = str.length;
    if (strLength > maxlength - 1) { 
        return str.slice(0, maxlength - 1) + '...' 
    }
    return str
}

// 숫자만 추출하기
function extractCurrencyValue(str) { 
    return +str.slice(1);
}