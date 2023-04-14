// Задание 1

function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber(4, 10));
console.log(minNumber(9, 3));
console.log(minNumber(5, 5));

// Задание 2

function evenOdd() {
    let num = Number(prompt('Введите число'))
    if (num % 2 === 0) {
        console.log('Число четное');
    } else if (num % 2 === 1) {
        console.log('Число нечетное');
    } else {
        console.log('Вы ввели не число');
    }
}

evenOdd();


// Задание 3

// 3.1

function squareNumber() {
    let n = Number(prompt('Введите число'));
    console.log(n ** 2);
}

squareNumber();

// 3.2

function squareDigit() {
    let digit = Number(prompt('Введите число'));
    return digit ** 2;
}

console.log(squareDigit());


// Задание 4

function howOld() {
    const age = prompt('Сколько вам лет?')
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Вы ввели не число');
    }
}

howOld();


// Задание 5


function multiplyNumbers() {
    const num1 = prompt('Введите первое число')
    const num2 = prompt('Введите второе число')
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(multiplyNumbers());

// Задание 6

function numberCubed() {
    const cubed = prompt('Введите число');

    if (isNaN(cubed)) {
        return 'Переданный параметр не является числом';
    } else {
        const result = cubed ** 3;
        return `${cubed} в кубе равняется ${result}`;
    }
}

console.log(numberCubed());


// Задание 7

function getCircleArea() {
    return Math.PI * this.radius ** 2;
}

function getCirclePerimeter() {
    return Math.PI * 2 * this.radius;
}

const circle1 = {
    radius: 15,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

const circle2 = {
    radius: 62,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


// Задание 8

function getSeason() {
    const monthNumber = Number(prompt('Введите номер месяца'))
    if (monthNumber <= 11 && monthNumber >= 9) {
        alert('Осень');
    } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    } else {
        alert('Такого месяца не существует');
    }
}




