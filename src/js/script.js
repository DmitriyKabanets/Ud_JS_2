/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// 2.19

// const personalMovieDB = {
//     count: '',
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// personalMovieDB.count = 7;

// let numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// personalMovieDB.count = numberOfFilms;

// let a = prompt('Один із останніх переглянутих фільмів', '');
// let b = +prompt('Оцініть цей фільм', '');
// let c = prompt('Один із останніх переглянутих фільмів', '');
// let d = +prompt('Оцініть цей фільм', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


const arr = [3, 5, 8, 16, 20, 23, 50, 70, 88];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];

}

console.log(result);



const data = [5, 10, 'Shopping', 20, 'Homework'];

console.log(data[0] * 2);

for (let i = 0; i <= data.length; i++) {
    // if (data[0].typeof === )
    console.log
}


