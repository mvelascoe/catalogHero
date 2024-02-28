import data from "../data.json" assert { type: "json" };

console.log(data)

function createHeroCards(heroData, sectionSelector) {
  const cardInnerHTML = `
    <div class="card-img">
      <img src="${heroData.img}" alt="Personaje">
    </div>
    <div class="card-content">
      <h3>${heroData.name}</h3>
      <p>${heroData.description}</p>
      <button id="${heroData.name}" class="boton">Ver más</button>
    </div>`;

  const customDiv = document.createElement("div");
  customDiv.className = "card";
  customDiv.innerHTML = cardInnerHTML;

  document.querySelector(sectionSelector).appendChild(customDiv);
}

data.marvel.forEach(function (heroData) {
  createHeroCards(heroData, "section.cardsmarvel");
});

data.dc.forEach(function (heroData) {
  createHeroCards(heroData, "section.cardsDC");
});

//Ventana Emergente

const boton = document.querySelector(".boton");
const span = document.getElementsByClassName("cerrar")[0];
const modal = document.getElementById("ventanaModal");

const cartaMarvel = document.querySelector("section.cardsmarvel");
const cartaDC = document.querySelector("section.cardsDC");

cartaMarvel.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton")) {
    const personaje = event.target.id;
    mostrarModal(personaje);
  }
});

cartaDC.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton")) {
    const personaje = event.target.id;
    mostrarModal(personaje);
  }
});

function mostrarModal(heroe) {
  const datos = buscarHero(heroe);
  // console.log(datos);
  modal.style.display = "block";
  const h2 = document.querySelector(".tituloModal");
  h2.textContent = datos.name;

  const imgs = document.querySelector(".imagen");
  imgs.src = datos.img;

  const parrafo = document.querySelector(".descripcion");
  parrafo.textContent = datos.description;
}

function buscarHero(nombre) {
  const heroeMarvel = data.marvel.find((h) => h.name === nombre);
  const heroeDC = data.dc.find((h) => h.name === nombre);

  return heroeMarvel || heroeDC;
}

span.addEventListener("click", function () {
  modal.style.display = "none";
});