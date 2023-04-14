// Задание 1

const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] == 10) break;
}

// Задание 2

const n = [1, 5, 4, 10, 0, 3];

let position = n.indexOf(4);
console.log(position);

// Задание 3

let numb = [1, 3, 5, 10, 20];

numb = numb.join(' ');

console.log(numb);

// Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
    let subArray = [];
    for (let j = 0; j < 3; j++) {
        subArray.push(1);
    }
    arr.push(subArray);
}

console.log(JSON.stringify(arr));


// Сложное задание, долго ломал голову, как вывести нужное значение в консоль, а не сам массив, помог всезнающий гугл. Если есть возможность выполнить данное задание другим способом, то покажите его, пожалуйста


// Задание 5

let numbs = [1, 1, 1];

numbs.push(2, 2, 2);
console.log(numbs);

// Задание 6

let variab = [9, 8, 7, 'a', 6, 5];

variab.sort();
variab = variab.filter(item => typeof item === 'number');
console.log(variab);

// Другой способ решения задачи:
// const arrd = [9, 8, 7, 'a', 6, 5];
// arrd.sort().pop();
// console.log(arrd);

// Задание 7

const digit = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt('Введите число от 1 до 10'));

let search = digit.includes(userAnswer);
console.log(search);

// Задание 8

let str = 'abcdef';

str = str.split('');
str = str.reverse();
str = str.join('');

console.log(str);

// Задание 9

let mass = [[1, 2, 3,], [4, 5, 6]];

mass = mass.flat();

console.log(mass);

// Задание 10

const array = [2, 5, 3, 8, 1, 7, 9, 4, 6, 10];

for (let i = 0; i < array.length - 1; i++) {
    const sum = array[i] + array[i + 1];
    console.log(sum);
}

// Задание 11

const integer = [25, 17, 5, 4, 98];

let result = integer.map(item => (item ** 2));

console.log(result);

// Задание 12

const getLengthWords = a => a.map(word => word.length);

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const wordLengths = getLengthWords(words);
console.log(wordLengths);

// Задание 13

function getNegativeNumbers(a) {
    return a.filter((item) => item < 0);
}

const numbers = [1, -2, 3, -4, 5, -6];
const negativeNumbers = getNegativeNumbers(numbers);
console.log(negativeNumbers); 



