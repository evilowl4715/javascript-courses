"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersinaLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    toogleVisibledMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            // if (favoriteGenre === '' || favoriteGenre == null) {
            //     console.log('вы ничего не ввели!');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = favoriteGenre;
            // }

            const favoriteGenre = prompt(`Введите жанры через запятую`, '');

            if (favoriteGenre === '' || favoriteGenre == null) {
                console.log('вы ничего не ввели!');
                i--;
            } else {
                // personalMovieDB.genres[i - 1] = favoriteGenre;
                 personalMovieDB.genres = favoriteGenre.split(', ');
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }

};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersinaLevel();
// personalMovieDB.toogleVisibledMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();