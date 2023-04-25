// // 1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

const arr = [3, 5, 8, 16, 20, 23, 50, 70, 88];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];

}

console.log(result);

// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i <= data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] *= 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] += ' - done';
    }
   
}

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

console.log(data);

for (let i = 0; i < data.length; i++) {
    result[i] = data[data.length - (i + 1)]
}

console.log(result);


// 4. необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)



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


// Функції

function sayHello(name) {
    return `Привіт, ${name}!`
}

console.log(sayHello('Антон'));

//  Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(number){
    let arr = [];
    number -= 1;
    for (let i = 0; i < 3; i++){
        arr[i] = number;
        number++;
    }

    return arr;
}

console.log(returnNeighboringNumbers(5));

//

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
// (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.


function getMathResult(baseNumber, repetitionsNumber) {

    if (repetitionsNumber <= 0 || typeof(repetitionsNumber) != 'number'){
        return baseNumber;
    }

    let result = '';
    for (let i = 1; i <= repetitionsNumber; i++){
        let a = baseNumber + baseNumber * (i-1);
        result += a;

        if (i < repetitionsNumber){
            result += '---';
        }

    }

    return result;
}

console.log(getMathResult(10, '5'));
console.log(getMathResult(3, 0));
console.log(getMathResult(7, -5));

console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(5, 3));




function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(3, 5));