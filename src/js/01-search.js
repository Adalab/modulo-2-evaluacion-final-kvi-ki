'use strict';

const searchField = document.querySelector('.js-search');
const searchButton = document.querySelector('.js-button');
const resultsList = document.querySelector('.js-result');
const logButton = document.querySelector('.js-log');
let moviesList = [];

function getResult() {
    fetch(`http://api.tvmaze.com/search/shows?q=${searchField.value}`)
        .then(response => response.json())
        .then(data => {
            moviesList = data;
            paintMovies();
        });
}

const ul = document.createElement('ul');
function paintMovies() {
    if (searchField.value === "") {
        alert(`Por favor, escribe el nombre de la pelicula/serie en el campo de la busqueda`);
    } else {
        for (let i = 0; i < moviesList.length; i++) {
            if (moviesList[i].show.image === null) {
                moviesList[i].show.image = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;
            } else {
                moviesList[i].show.image = moviesList[i].show.image.medium
            }
            const list = document.createElement('li');
            list.innerHTML = `<img src="${moviesList[i].show.image}"/> ${moviesList[i].show.name}<p>"${moviesList[i].show.status}"`
            ul.appendChild(list);
            resultsList.appendChild(ul);
            list.classList.add('js-searchlist');

            list.addEventListener('click', () => paintFavourites(moviesList[i].show));
        }
    }
}

searchButton.addEventListener('click', getResult);

function clickLog() {
    for (let i = 0; i < favs.length; i++) {
        console.log(favs[i].name);
    }
}
logButton.addEventListener('click', clickLog);