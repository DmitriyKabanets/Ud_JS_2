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

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += '-';
    }
    for (let k = 1; k <= (i * 2) + 1; k++) {
        result += 'x'
    }

    result += '\n';
}

console.log(result);
