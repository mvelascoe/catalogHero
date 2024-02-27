import data from '../data.json' assert {type: 'json'};

function createHeroCards(heroData) {
  const cardInnerHTML = `
  <div class="card-img">
    <img src="${heroData.img}" alt="Personaje">
  </div>
  <div class="card-content">
    <h3>${heroData.name}</h3>
    <p>${heroData.description}</p>
    <button id="abrirModal">Ver más</button>
  </div>`;

  //<a href="" class="btn-more">Ver más</a>

  const customDiv = document.createElement("div"); // Elemento padre
    customDiv.className = "card";
  customDiv.innerHTML = cardInnerHTML;

  document.querySelector("section.cardsmarvel").appendChild(customDiv);
}

data.forEach(function (heroData) {
    createHeroCards(heroData);
});



const modal = document.getElementById("ventanaModal");

const boton = document.getElementById("abrirModal");

const span = document.getElementsByClassName("cerrar")[0];

boton.addEventListener("click",function() {
  modal.style.display = "block";
});

span.addEventListener("click",function() {
  modal.style.display = "none";
});

window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


