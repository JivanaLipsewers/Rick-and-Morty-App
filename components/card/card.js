export function createCharacterCard() {
    const characterImageSrc = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    const characterName = "Rick Sanchez";
    const characterStatus = "Alive";
    const characterType = null;
    const characterOccurrences = 51;
    const cardContent = `
    <div class="card__image-container">
      <img
        class="card__image"
        src=${characterImageSrc}
        alt="${characterName}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${characterName}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${characterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${characterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${characterOccurrences}</dd>
      </dl>
    </div>`
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = cardContent;

  return newCard

}

console.log(createCharacterCard());