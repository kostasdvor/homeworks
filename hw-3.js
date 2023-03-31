// Задание 1

const password = 'скайпро';

const userPassword = String(prompt('Введите пароль'));



if (userPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// Задание 2

let c = 7;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Поскольку в задании указано "Проверьте работу скрипта" покажу свою проверку ниже с другими переменными

let g = 0;

if (g > 0 && g < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let b = 10;

if (b > 0 && b < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = -3;

if (a > 0 && a < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 2;

if (d > 0 && d < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let f = 97;
let e = 123;

if (f > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4

let h = 2;
let y = 3;
console.log(h + y);


// Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Это месяц зимы');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Это месяц весны');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Это месяц лета');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Это месяц осени');
        break;
    default: console.log('Такого месяца не существует');
        break;
}

// Задание 7

const parityOdd = Number(prompt('Пожалуйста, введите любое число'));

console.log(parityOdd);

if (Math.abs(parityOdd) % 2 === 0) {
    console.log('Число четное');
} else if (Math.abs(parityOdd) % 2 === 1) {
    console.log('Число нечетное');
}
else {
    console.log('Что-то пошло не так');
}

// Задание 8

const clientOS = Number(prompt('Укажите тип вашего устройства: 0 - у вас IOS, 1 - у вас Android'));

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}
else {
    console.log('Что-то пошло не так');
}

// Задание 9

const osClient = Number(prompt('Укажите тип вашего устройства: 0 - у вас IOS, 1 - у вас Android'));
const clientDeviceYear = Number(prompt('Укажите год выпуска вашего устройства'))

if (osClient === 0 && clientDeviceYear >= 2015 && clientDeviceYear <= 2023) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (osClient === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (osClient === 1 && clientDeviceYear >= 2015 && clientDeviceYear <= 2023) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (osClient === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Что-то пошло не так');
}


