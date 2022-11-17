"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          promoBg =  document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkboxFavorite = addForm.querySelector('[type="checkbox"]'),
          promoInteractiveList = document.querySelector('.promo__interactive-list');


    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkboxFavorite.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавлен любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, promoInteractiveList);
        }

        e.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
    
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    <strong>${i+1}</strong> ${film} 
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(promoAdv);
    makeChanges();
    createMovieList(movieDB.movies, promoInteractiveList);

});