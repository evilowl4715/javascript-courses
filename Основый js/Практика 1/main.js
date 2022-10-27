"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const ratingFilm = prompt('На сколько оцените его?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = ratingFilm;

console.log(personalMovieDB);