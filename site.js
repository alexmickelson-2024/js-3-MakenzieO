import { animals } from "./animals.js";

function buildAnimalCard(animal) {
  const animalContent = `<div class="card">
        <img src="${animal.image}" alt="${animal.title}" />
        <div class="card-text">
        <h1>${animal.title}</h1>
        <p>${animal.description}</p>
        </div>
    </div>`;
  return animalContent;
}
function buildAllCards() {
  var cardsHTML = "";
  const url = window.location.href;
  var keyword = "";
  var newList = animals;
  if (url.includes("?")) {
    const urlSplit = url.split("?");
    var searchTerm = urlSplit[1].toLowerCase();
    if (searchTerm.includes("filter")) {
      keyword = searchTerm.split("=");
    }
    newList = filterCard(animals, keyword[1]);
  }
  newList.forEach((animal) => {
    cardsHTML = cardsHTML + buildAnimalCard(animal);
  });
  return cardsHTML;
}
function filterTitleandDescription(cards, keyword) {
  return (
    cards.description.toLowerCase().includes(keyword) ||
    cards.title.toLowerCase().includes(keyword)
  );
}
function filterCard(cardList, keyword) {
  const newList = cardList.filter((card) =>
    filterTitleandDescription(card, keyword)
  );
  return newList;
}
function addAnimalCard(cards) {
  const cardContainer = document.getElementById("card-container-id");
  cardContainer.replaceChildren();
  cardContainer.innerHTML = cards;
}
addAnimalCard(buildAllCards());
