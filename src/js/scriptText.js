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







