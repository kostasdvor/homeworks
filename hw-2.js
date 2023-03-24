confirm('Согласен кайфануть на сайте');

let a = 20; // плохой вид переменной, сделал только чтобы не отходить от тз
alert(a);

let iphoneIssue = 2007;
alert(`Год выпуска первого Iphone - ${iphoneIssue}`)

let javascriptCreator = 'Брендан Эйх';
alert(`Имя создателя JavaScript - ${javascriptCreator}`);

let number = 10;
let digit = 2;

let resultPlus = number + digit;
let resultMinus = number - digit;
let resultMultiply = number * digit;
let resultDivide = number / digit;

alert(resultPlus);
alert(resultMinus);
alert(resultMultiply);
alert(resultDivide);

let result = 2 ** 5;

alert(result);


let b = 9; // плохой вид переменной, сделал только чтобы не отходить от тз

let c = 2; // плохой вид переменной, сделал только чтобы не отходить от тз

alert(9 % 2);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

const user = {
    name: 'Василий',
    age: 47,
    isAdmin: true
}

user.cityOfResidence = 'Romania';
user.age = 50;
// user['age'] = 50;

delete user.cityOfResidence;

let info = prompt('Что вы хотите узнать о пользователе?', 'name', 'age', 'isAdmin');

alert(user[info]);

let userName = prompt('Как вас зовут?');

alert(`Привет, ${userName}!`);




















