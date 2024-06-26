/*
배열과 관련된 연산
중요도: 5
배열과 관련된 다섯 가지 연산을 해봅시다.

요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
"Rock-n-Roll"을 배열 끝에 추가합니다.
배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
배열의 첫 번째 요소를 꺼내서 출력합니다.
"Rap"과 "Reggae"를 배열의 앞에 추가합니다.
단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.
*/

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// styles.splice(Math.floor(styles.length / 2), Math.floor(styles.length / 2), 'Classics'); 내 답
styles.shift(0);
styles.unshift('Rap', 'Reggae');

/*
입력한 숫자의 합 구하기
중요도: 4
아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
배열 요소의 합을 계산하고 리턴합니다.
주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.
*/

function sumInput() { 
    let numbers = [];

    while (true) {         
        let value = prompt('number', '');

        if (value === '' || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) { 
        sum += number;
    }
    return sum;
}
alert(sumInput());

/*
정렬코드!!
arr.sort( (a, b) => a - b );

요약
지금까지 살펴본 배열 메서드를 요약해보도록 합시다.

요소를 더하거나 지우기

push(...items) – 맨 끝에 요소 추가하기
pop() – 맨 끝 요소 추출하기
shift() – 첫 요소 추출하기
unshift(...items) – 맨 앞에 요소 추가하기
splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
원하는 요소 찾기

indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함
배열 전체 순회하기

forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음
배열 변형하기

map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
reverse() – 배열을 뒤집어 반환함
split/join – 문자열을 배열로, 배열을 문자열로 변환함
reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨
기타

Array.isArray(arr) – arr이 배열인지 여부를 판단함
sort, reverse, splice는 기존 배열을 변형시킨다는 점에 주의하시기 바랍니다.
*/

function camelize(str) { 
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

/*
특정 범위에 속하는 요소 찾기
중요도: 4
배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
*/

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) { 
    return arr.filter(item => (a <= item && item <= b));
}
alert(filtered);

/*
특정 범위에 속하는 요소 찾기(배열 변경하기)
중요도: 4
배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.
*/

function filterRangeInPlace(arr2, a, b) { 
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < a || arr2[i] > b) { 
            arr2.splice(i, 1);
            i--; // 왜지?
        }
     }
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert(arr2); // [3, 1]
arr.reverse((a,b) => a-b);
arr.sort((a, b) => a - b);

//내림차순으로 정렬하기

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert(arr3); // 8, 5, 2, 1, -10

/*
배열 복사본을 정렬하기
중요도: 5
문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
*/

let arr4 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) { 
    return arr.slice().sort();
}

let sorted = copySorted(arr4);

alert( sorted ); // CSS, HTML, JavaScript
alert(arr4); // HTML, JavaScript, CSS (no changes)

/*
이름 매핑하기
중요도: 5
name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
alert(names); // John, Pete, Mary

/*
객체 매핑하기
중요도: 5
세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.

name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(item => ({fullName: item.name + " " + item.surname, id: item.id}));

console.log(usersMapped)

/*
나이를 기준으로 객체 정렬하기
중요도: 5
프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(arr) { 
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

/*
배열 요소 무작위로 섞기
중요도: 3
배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.

shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.
*/

let arr = [1, 2, 3];

function shuffle(arr) { 
    return arr.sort( () => Math.random() - 0.5)
}

console.log(shuffle(arr));

/*
평균 나이 구하기
중요도: 4
age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다. 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.

평균을 구하는 공식은 (age1 + age2 + ... + ageN) / N 입니다.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) { 
    let sum = 0;
    arr.forEach(user => (sum += user.age));
    return sum / arr.length;
}

console.log(arr)

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28