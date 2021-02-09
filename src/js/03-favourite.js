'use strict';

const favouriteList = document.querySelector('.js-favourites');
const newUl = document.createElement('ul');
const newUlTitle = document.createTextNode('Mis Series Favoritas:');
newUl.appendChild(newUlTitle);

let favs = []
const favsData = localStorage.getItem('favs')
if (favsData !== null) {
    favs = JSON.parse(favsData)
}

function addFavourite(myMovie) {
    const newList = document.createElement('li');
    newList.innerHTML = `${myMovie.name}<img src="${myMovie.image}"/>`
    newUl.appendChild(newList);
    newList.classList.add('js-favourite');

    favouriteList.appendChild(newUl);
}

function paintFavourites(movieClicked) {
    addFavourite(movieClicked)
    favs.push(movieClicked);
    localStorage.setItem('favs', JSON.stringify(favs));
}

for (let i = 0; i < favs.length; i++) {
    addFavourite(favs[i]);
}