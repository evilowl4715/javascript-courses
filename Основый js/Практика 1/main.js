"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const ratingFilm = prompt('На сколько оцените его?', '');

    if (lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = ratingFilm;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);