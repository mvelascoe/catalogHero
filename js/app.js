import data from '../data.json' assert {type: 'json'};

function createHeroCards(heroData) {
  const cardInnerHTML = `<div class="card-img">
  <img src="${heroData.img}" alt="Personaje1">
</div>
<div class="card-content">
  <h3>${heroData.name}</h3>
  <p>${heroData.description}</p>
  <a href="" class="btn-more">Ver más</a>
</div>`;

  const customDiv = document.createElement("div"); // Elemento padre
    customDiv.className = "card";
  customDiv.innerHTML = cardInnerHTML;

  document.querySelector("section.cardsmarvel").appendChild(customDiv);
}

data.forEach(function (heroData) {
    createHeroCards(heroData);
});