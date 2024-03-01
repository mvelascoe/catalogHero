import data from "../data.json" assert { type: "json" };

// Crear un arreglo de json que contenga los personajes de los dos universos
const allHeros = [...data.marvel, ...data.dc];

// Mostrar todos los personajes de los 2 universos en un solo div
allHeros.forEach(function (heroData) {
  createHeroCards(heroData, "section.cardsmarvel");
});

// console.log(data);

function createHeroCards(heroData, sectionSelector) {
  const cardInnerHTML = `
    <div class="card-img">
      <img src="${heroData.img}" alt="Personaje">
    </div>
    <div class="card-content">
      <h3>${heroData.name}</h3>
      <button id="${heroData.name}" class="boton">Ver más</button>
    </div>`;

  const customDiv = document.createElement("div");
  customDiv.className = "card";
  customDiv.innerHTML = cardInnerHTML;

  document.querySelector(sectionSelector).appendChild(customDiv);
}
const mainSection = document.querySelector(".cardsmarvel");

function mostrarHeroes(universo) {
  while (mainSection.firstChild) {
    mainSection.removeChild(mainSection.firstChild);
  }
  universo.forEach(function (heroData) {
    createHeroCards(heroData, "section.cardsmarvel");
  });
}

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

  modal.style.display = "block";
  const h2 = document.querySelector(".tituloModal");
  h2.textContent = datos.name;

  const imgs = document.querySelector(".imagen");
  imgs.src = datos.img;

  const año = document.querySelector(".año");
  año.textContent = datos.añoCreacion;

  const parrafo = document.querySelector(".descripcion");
  parrafo.textContent = datos.description;
}

document.body.classList.add('modal-abierta');
document.body.classList.remove('modal-abierta');

function buscarHero(nombre) {
  const heroeMarvel = data.marvel.find((h) => h.name === nombre);
  const heroeDC = data.dc.find((h) => h.name === nombre);

  return heroeMarvel || heroeDC;
}

span.addEventListener("click", function () {
  modal.style.display = "none";
});

const soloDc = document.querySelector("#soloDc");
const soloMarvel = document.querySelector("#soloMarvel");
const home = document.querySelector("#home");

soloDc.addEventListener("click", () => {
  mostrarHeroes(data.dc);
  console.log("dc");
});

soloMarvel.addEventListener("click", () => {
  mostrarHeroes(data.marvel);
  console.log("marvel");
});

home.addEventListener("click", () => {
  mostrarHeroes(allHeros);
  console.log("allHeros");
});

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", searchHero);

function searchHero(e) {
  console.log(e.target.value);
  const valor = e.target.value.toLowerCase();
  const resultado = allHeros.filter((hero) =>
    hero.name.toLowerCase().startsWith(valor)
  );
  while (mainSection.firstChild) {
    mainSection.removeChild(mainSection.firstChild);
  }
  resultado.forEach(function (heroData) {
    createHeroCards(heroData, "section.cardsmarvel");
  });
}