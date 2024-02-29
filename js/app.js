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
  // modal.style.width = "800px";  // Establece el ancho deseado
  // modal.style.maxHeight = "80vh";  // Establece la altura máxima deseada
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



// function filterCards() {
//   const filterValue = document.getElementById("filterSelect").value;
//   const searchValue = document.getElementById("searchInput").value.toLowerCase();

//   document.querySelectorAll('.card').forEach((card) => {
//     const cardType = card.classList.contains('card-marvel') ? 'marvel' : 'dc';
//     const isTypeMatch = filterValue === 'all' || cardType === filterValue;
//     const cardTextContent = card.textContent.toLowerCase();
//     const isSearchMatch = searchValue === '' || cardTextContent.includes(searchValue);

//     card.style.display = isTypeMatch && isSearchMatch ? 'flex' : 'none';
//   });
// }

// filterCards()

function filtrarComics() {
  const filtro = document.getElementById("filtro").value;

  const seccionMarvel = document.querySelector("section.cardsmarvel");
  const seccionDC = document.querySelector("section.cardsDC");


  seccionMarvel.style.display = "none";
  seccionDC.style.display = "none";


  if (filtro === "marvel") {
    seccionMarvel.style.display = "grid";
  } else if (filtro === "dc") {
    seccionDC.style.display = "grid";
  } else {

    seccionMarvel.style.display = "grid";
    seccionDC.style.display = "grid";
  }
}


