let currencyRatio = {
    KRW: {
        KRW: 1,
        EUR: 0.00067,
        USD: 0.00073,
        unit: '원'
    },
    EUR: {
        KRW: 1491.63,
        EUR: 1,
        USD: 1.09,
        unit: '유로'
    },
    USD: {
        KRW: 1371.67,
        EUR: 0.92,
        USD: 1,
        unit: '달러'
    }
};

let fromCurrency = 'KRW';
let toCurrency = 'EUR'
let units = ["", "만", "억", "조", "경"];
let splitUnit = 10000;

document.querySelectorAll('#from-currency a').forEach((menu) => menu.addEventListener('click', function () { 
    // 버튼을 가져온다
    //버튼의 값을 바꾼다
    document.getElementById('from-button').textContent = this.textContent;

    // 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;
    convert();
}))

document.querySelectorAll('#to-currency a').forEach((menu) => menu.addEventListener('click', function () { 
    document.getElementById('to-button').textContent = this.textContent;

    toCurrency = this.textContent;
    convert();
}))

// 1. 키를 입력하는 순간
// 2. 환전이 되서
// 3. 환전값이 보인다.

let fromResult = document.querySelector('.from-result');
let toResult = document.querySelector('.to-result');

// 환전 기능
function convert() { 
    // 1. 얼마를 환전?
    // 2. 가지고 있는 돈이 뭔지?
    // 3. 바꾸고자하는 돈이 뭔지?
    // = 돈 * 환율 = 환전금액

    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    
    document.getElementById('to-input').value = convertedAmount.toFixed(2);
    fromResult.textContent = `${document.getElementById('from-input').value}${currencyRatio.fromCurrency.unit}`
}

// 1. 드랍다운 리스트에 값이 바뀔때마다
// 2. 환전을 다시 한다.