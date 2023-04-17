// Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2

function searchStart(arr, str) {

str = str.toLowerCase();

const resultArr = [];

for (let i = 0; i < arr.length; i++) {

    const arrElement = arr[i].toLowerCase();

    if (arrElement.startsWith(str)) {
        resultArr.push(arr[i]);
    }
}
return resultArr;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3

console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// Задание 5

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));

// Задание 6

function getRandomNumbers(num) {
    const arrLength = Math.floor(num / 2);
    const arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * (num + 1))); 
    }

    return arr;
}

console.log(getRandomNumbers(7));
console.log(getRandomNumbers(12));

// Math.round(Math.random() * (num))

// Задание 7

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomInt(1, 10);
console.log(randomNum);

// Данную задачу можно решить более простым способом, используя цикл for, оставлю его, для примера себе же

// for (let i = 0; i < 1; i++) {
//     let randomNum = getRandomInt(1, 10);
//     console.log(randomNum);
// }

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

let myDate = new Date();
console.log(+myDate);

myDate.setDate(myDate.getDate() + 73);
console.log(myDate);

// Задание 10

function formatDate(date) {
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let dayOfWeek = daysOfWeek[date.getDay()];
    let month = months[date.getMonth()];
    let dayOfMonth = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let formattedDate = `Дата: ${dayOfMonth} ${month} ${year} - это ${dayOfWeek}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
}

const nDate = new Date();
console.log(formatDate(nDate));


// Задание 11

function gameTwo() {
    let guessWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    guessWord = guessWord.sort(() => Math.random() - 0.5);
    console.log(guessWord);
    alert(guessWord);

    let firstAnswer = prompt('Чему равнялся первый элемент массива?')?.toLowerCase();
    let secondAnswer = prompt('Чему равнялся последний элемент массива?')?.toLowerCase();

    if (firstAnswer === guessWord[0].toLowerCase() && secondAnswer === guessWord[guessWord.length - 1].toLowerCase()) {
        alert('Ура! Вы угадали оба слова!');
    } else if (firstAnswer === guessWord[0].toLowerCase() || secondAnswer === guessWord[guessWord.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('К сожалению, вы ответили неверно.');
    }
}



