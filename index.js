import createCharacterCard from "./components/card/card.js";
import { ramCharacters } from "./config.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(ramCharacters);
    if (response.ok) {
      const data = await response.json();
      const characterData = data.results;
      cardContainer.innerHTML = "";
      characterData.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
      });
      return data;
    } else {
      console.error("response not OK");
    }
  } catch (error) {
    console.error("API not available: ", error);
  }
}
fetchCharacters();
