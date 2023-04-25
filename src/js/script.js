

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }
}

start();    

personalMovieDB.count = numberOfFilms;

function myFilms (){
    for (let i = 1; i <= 1; i++) {
  
        const a = prompt('Один із останніх переглянутих фільмів', ''),
              b = prompt('Оцініть цей фільм', '');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            
        } else {
            console.log('error');
            i--;
        }   
    }
}

myFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто мало фільмів');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else {
     console.log('Ви кіноман')
    }
}

detectPersonalLevel();

// console.log(personalMovieDB);

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр ${i}`, '');

    }
}

writeYourGenres();

showMyDB();