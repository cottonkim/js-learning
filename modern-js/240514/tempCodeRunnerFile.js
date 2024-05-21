function sumInput() { 
    let arr = [];
    let number = prompt('number', '');
    let result;

    if (isFinite(number)) {
        for (let i = 0; i < arr.length; i++) {
            arr.push(number);
        }
    } else if (number === '' || number === null) { 
        return;
    }   
}