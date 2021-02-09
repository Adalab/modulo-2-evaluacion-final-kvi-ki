'use strict';

const favouriteList = document.querySelector('.js-favourites');
const newUl = document.createElement('ul');
const newUlTitle = document.createTextNode('Mis Series Favoritas:');
newUl.appendChild(newUlTitle);

function paintFavourites(movieClicked) {
    const newList = document.createElement('li');
    newList.innerHTML = `${movieClicked.name}<img src="${movieClicked.image}"/>`
    newUl.appendChild(newList);
    newList.classList.add('js-favourite');

    favouriteList.appendChild(newUl);
}
