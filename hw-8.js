// Задание 1

function getResult(arr, callback) {

    let result = arr.reduce(callback);
    return result;
}

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum));

// Задание 2

function compareUser(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

const listUsers = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

listUsers.sort(compareUser);
console.log(listUsers);

// Задание 3

function each(arr, callback) {
    return callback(arr);
}

function reverseArr(arr) {
    return arr.reverse();
}

function toNumberArr(arr) {
    return arr.map(Number).filter((num) => !isNaN(num));
}

const arr1 = [1, '4', 9, 'two'];
const arr2 = [1, '4', false, 9, 'two'];

console.log(each(arr1, reverseArr));
console.log(each(arr2, toNumberArr));

// Задание 4

function currDate() {
    console.log(new Date());
}

const idInterval = setInterval(currDate, 3000);

setTimeout(() => {
    clearInterval(idInterval);
    console.log('30 секунд прошло');
}, 30000);

// Задание 5

function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор');
}

calling();
beeps(talk);

