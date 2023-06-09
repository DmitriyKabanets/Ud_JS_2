////////////////////////////////
// Об'єкти

const obj = {
    name: 'Dimon',
    age: 39,
    proj: 'KS',
    otherObj: {},
    otherArr: []
}

console.log(obj);
console.log(obj.age);
console.log(obj['age']);

// присвоєння значення або додавання нового ключ: значення в об'єкт
obj.age = 40;

// або
obj['age'] = 40;

console.log(obj.age);

// використов. дужки [] ключ об'єкту можна задати цифру

const numb = {
    1: 111,
    2: 222,
    3: 333,
    4: 444
};

console.log(numb);
console.log(numb[2]);

numb[6] = 666;
console.log(numb);

////////////////////////////////
//Масиви


const arr = [4444, 5555, 8888, 'aaaaa', 'nnnnn', false, true];

console.log(arr);
console.log(arr[3]);

//так задавати не можна бо з'являєть проміжок з порожніми елементами (3 empty items)
arr[10] = 100000;
console.log(arr);

////////////////////////////////
// Взаємодія з користувачем

// Виводить значення
alert('Hello world');

// Запитує й поверта true або false
const result = confirm('Are you here');
console.log(result);

// Можливо вводити в поле, повертає строку
const answer = promp("Скільки Вам років", "");
console.log(answer);
console.log(typeof(answer));

// Визначення типу змінної
// typeof();

// Замінює вміст всієї сторінки
document.write();

////////////////////////////////
// Інтерполяція в ES6 та конкатенація рядків

// конкатенація
let categore = 'toys';
let someVariable = 'toysName';

console.log('these products: ' + categore + ' apple');
console.log('https://someurl.com/' + categore + '/' + '4' + '/' + someVariable);

// Інтерполяція в ES6
// використовувати бектіки ``
let categore_1 = 'toys';
let someVariable_1 = 'toysName';

console.log(`these products: ${categore_1} apple`);
console.log(`https://someurl.com/${categore_1}/4/${someVariable_1}`);

////////////////////////////////
// Умови

let x = 6;

if (x > 5) {
    console.log('Ok');
} else {
    console.log('Замало');
}

//

let y = 1;

if (y > 10) {
    console.log('Багато');
} else if (y < 5){
    console.log('Замало');
} else {
    console.log('Норма');
}

// Умова з тернарними операт

//(num == 50) ? дія в случаї правдивої умови : дія якщо умова не виконалась;
let num = 55;
(num == 50) ? console.log('Умова = 50') : console.log('умова не вірна');

// Switsh
let sw = 10;

switch (sw) {
    case 49:
        console.log('умова = 49');
        break;
    case 100:
        console.log('умова = 100');
        break;
    case 150:
        console.log('умова = 150');
        break;
    default:
        console.log('Errr');
}


////////////////////////////////
// Цикли
//одне повторення циклу називається ітарація

// 1. while

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

// 2.спочатку перевіряє умову, а потім виконується
// do while
let num = 50;

do {
    console.log(num);
    num++;
}
while (num <= 55);

// 3. for

for (let i =1; i < 10; i++) {
    console.log(i);
}

// дострокове закінчення циклу
//оператор break повністю перериває цикл та виходить з нього
//оператор continue пропускає ітерацію яка відповідає умові, цикл доходить до кінця
for (let i =1; i < 10; i++) {
    if (i == 2 || i == 7) {
       // break; 
        
        continue; 
    }

    console.log(i);
}

//Цикли в циклі
for (let i =1; i <= 3; i++) {
    console.log(`Вивід змінної I=${i}`);
    for (let j=1; j < 10; j++) {
        console.log(`Вивід змінної j=${j}`);
    }
}

// малюнок трикутника
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let st = '';
    for (let j = 1; j <= i; j++){
        st = st + '*';
    }

    console.log(st);
}

// Варіант 2
let result = '';
const length = 7;

for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

// 4. необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:
//      *
//     ***
//    *****
//   *******
//  *********

const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let k = 1; k <= (i * 2) + 1; k++) {
        result += 'x'
    }

    result += '\n';
}

console.log(result);


// запитує кількість рядків трикутника
let lines = +prompt('Скільки рядків трикітника', '');

for (let i = 1; i <= lines; i++) {
    let st = '';
    for (let j = 1; j <= i; j++){
        st += '*';
    }

    console.log(st);
}

// мітка

first: for (let i = 1; i <= 2; i++) {
    console.log(`First level ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`Second level ${j}`);
        for (let k = 1; k <= 5; k++) {
            if (k == 3) continue first;
            console.log(`Third level ${k}`);
        }
    }
}



////////////////////////////////
// Функції
// function declaration --- можливо спочатку використовувати а потім оголошувати (можливо в кінці коду)

function showMessage(text) {
    console.log(text);
    //let num = 20;
}

showMessage('Hello world');

//
let result = 0;

function calc(a, b) {
    return a + b;
}

result = calc(5, 14);

console.log(result);
console.log(calc(15, 100));

// function expression --- спочатку оголошується а потім використовуються
const logger = function() {
    console.log('Hello');
};

logger();

// стрілочні функції
const calc = (a, b) => a + b;
const calc = (a, b) => { 
    console.log('sdfsdf');
    return a + b ;
};

calc(1, 2);

////////////////////////////////
// Методи та властивості рядків та чисел

const str = 'Hello World';

// достати символ за індексом в рядку
console.log(str[1]);

// властивість .length довжина рядка
console.log(str.length);

// метод перетворення в великий та маленький регістр. Не змінює вихідну строку
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// метод шукає кусок на рядку і виводить індекс початку. Значення -1 --- незнайдено що шукали
console.log(str.indexOf('Wo'));

// Вирізання куска
const str = 'Hello World';
console.log(str.slice(6, 11));
console.log(str);
// буде вирізати з вказаного символа і до кінця
console.log(str.slice(4));
// теж вирізає вказаний шматок
console.log(str.substring(3, 7))
// вирізає вказаний шмат. 
// 2-вказую з якого індекса починати, а 4-кількість символів
console.log(str.substr(2, 4));

// Для роботи з числами в JS є міні бібліотека (Math.)
const num = 12.47833;
Math.round(num) // округляє до цілого числа

// метод переводить і іншу систему числення (двійкову, десяткову)
// при використанні на рядку видасть ціле число за прикладом
const t = '15.5px';
console.log(parseInt(t)); // перетворить на 15, число

// строку або число повертає в десятковому значенні
const t = '15.5px';
console.log(parseFloat(t)); // перетворить на 15.5, число




