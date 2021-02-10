'use strict';

const favouriteList = document.querySelector('.js-favourites');
const newUl = document.createElement('ul');
const newUlTitle = document.createTextNode('Mis Series Favoritas:');
newUl.appendChild(newUlTitle);

// To keep favourites always on the screen

let favs = []
const favsData = localStorage.getItem('favs')
if (favsData !== null) {
    favs = JSON.parse(favsData)
}

// Create a list of favourite movies

function addFavourite(myMovie) {
    const newList = document.createElement('li');
    newList.innerHTML = `<img src="${myMovie.image}"/> ${myMovie.name}<i class="fas fa-times icon" id="${myMovie.id}"></i>`
    newUl.appendChild(newList);
    newList.classList.add('js-favourite');

    favouriteList.appendChild(newUl);
}

// Show the list of favourites and save in Local Storage

function paintFavourites(movieClicked) {
    addFavourite(movieClicked);
    favs.push(movieClicked);
    localStorage.setItem('favs', JSON.stringify(favs));
}

// To add fav.movies one by one

for (let i = 0; i < favs.length; i++) {
    addFavourite(favs[i]);
    const removeIcon = document.getElementById(`${favs[i].id}`);
    removeIcon.addEventListener('click', () => removeFavourite(i));
}

// Remove from favourite list and local Storage

function removeFavourite(index) {
    const updatedFavs = favs.splice(index, 1);
    console.log(favs)
    localStorage.setItem('favs', JSON.stringify(favs));

    const favsData = localStorage.getItem('favs')
    if (favsData !== null) {
        favs = JSON.parse(favsData)
    }
}