/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms; 
console.log(numberOfFilms);



function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
    while (numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    } 
}

//start();

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Один из последних просмотренных фильмов?", "");
        let q2 = +prompt("На сколько оцените его?",""); 
     
        if (q1 != "" && q2 != "" && q1 != null && q2 != null && q1.length <50) {
            personalMovieDB.movies[q1] = q2;
        } else {
            console.log("Try again!");
            i--;
            }
         }
    }
//rememberMyFilms();

  

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка");
    } 
}
//detectPersonalLevel();


function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
//showMyDB ();

/*3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genreAns = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genreAns);
        console.log(personalMovieDB.genres);
    }
}
writeYourGenres();