document.addEventListener('DOMContentLoaded', function () {
    let inputElement01 = document.querySelector('input[name="numberInput01"]');
    let inputElement02 = document.querySelector('input[name="numberInput02"]');
    let inputElement03 = document.querySelector('input[name="numberInput03"]');
    let inputElement04 = document.querySelector('input[name="numberInput04"]');
    
    function inputFunktion(event) {
        // 소수점 두 번째 자리까지 입력 허용
        let value = this.value; //입력 필드의 현재 값을 변수 value에 저장합니다.
        value = value.replace(/,/g, '.'); // 콤마를 점으로 변환
        value = value.replace(/[^0-9.]/g, ''); // 숫자와 점(.)만 허용
        let parts = value.split('.'); // 점을 기준으로 두개로 나눔 ['12','34]
        
        if (parts.length > 2) { // parts배열의 길이가 2보다 크다면
            value = parts[0] + '.' + parts.slice(1).join(''); // 두 개 이상의 점(.)이 입력되는 경우 첫 번째 점(.)만 유지
        }

        if (parts[1] && parts[1].length > 2) { //배열 parts의 두 번째 요소가 존재하고 그 길이가 2보다 크다면 
            value = parts[0] + '.' + parts[1].substring(0, 2); // 소수점 두 번째 자리까지만 유지
        }

        this.value = value; // 수정된 값을 다시 입력 필드에 할당
        validateInputs(); // 유효성 검사
    }

    function validateInputs() { // 유효성 검사 함수
        let value1 = parseFloat(inputElement01.value);
        let value2 = parseFloat(inputElement02.value);
        let value3 = parseFloat(inputElement03.value);
        let value4 = parseFloat(inputElement04.value);
        let isValid = true; // 유효성 검사 초기화
        let inputs = document.querySelectorAll("input");

        if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4) ||
            value2 >= value1 || value3 >= value2 || value4 >= value3) {
            isValid = false;
        }

        if (isValid) {
            for (let input of inputs) {
                input.style.borderColor = "green"; // 유효할 때 테두리 색상 변경
            }        
        } else {
            for (let input of inputs) {
                input.style.borderColor = ""; // 유효하지 않을 때 테두리 색상 변경
            }
        }

        return isValid;
    }

    document.getElementById('myForm').addEventListener('submit', function (event) {
        let isValid = validateInputs();

        if (!isValid) {
            alert('유효한 숫자를 입력하세요. 두 번째 숫자는 첫 번째 숫자보다 작아야 하며, 세 번째 숫자는 두 번째 숫자보다 작아야 합니다.');
            event.preventDefault(); // 폼 제출 중지
        }
    });

    inputElement01.addEventListener('input', inputFunktion);
    inputElement02.addEventListener('input', inputFunktion);
    inputElement03.addEventListener('input', inputFunktion);
    inputElement04.addEventListener('input', inputFunktion);
});
