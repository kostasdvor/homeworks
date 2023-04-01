// Задание 1

let a = 0;

while (a < 2) {
  console.log('Привет');
  a++;
}


// Задание 2

let b = 1;

while (b <= 5) {
  console.log(b);
  b++;
}

// Задание 3

let c = 7;

while (c <= 22) {
  console.log(c);
  c++;
}

// Задание 4

let obj = {
  'Коля': 200,
  'Вася': 300,
  'Петя': 400
};

for (let salary in obj) {
  console.log(`${salary} — зарплата ${obj[salary]} долларов.`);
}

// Задание 5

let d = 1000;
let num = 0;

while (d >= 50) {
  d /= 2;
  num++;
}

console.log(d);
console.log(num);

// Задание 6

const firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}