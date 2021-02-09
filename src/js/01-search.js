'use strict';

const searchField = document.querySelector('.js-search');
const searchButton = document.querySelector('.js-button');
const resultsList = document.querySelector('.js-result');

let moviesList = [];

function getResult() {
    fetch(`http://api.tvmaze.com/search/shows?q=${searchField.value}`)
        .then(response => response.json())
        .then(data => {
            moviesList = data;
            paintMovies();
        });
}

function paintMovies() {
    const ul = document.createElement('ul');
    for (let i = 0; i < moviesList.length; i++) {
        if (moviesList[i].show.image === null) {
            moviesList[i].show.image = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;
        } else {
            moviesList[i].show.image = moviesList[i].show.image.medium
        }
        const list = document.createElement('li');
        list.innerHTML = `${moviesList[i].show.name}<img src="${moviesList[i].show.image}"/>`
        ul.appendChild(list);
        resultsList.appendChild(ul);

        list.addEventListener('click', () => paintFavourites(moviesList[i].show));
    }
}

searchButton.addEventListener('click', getResult);