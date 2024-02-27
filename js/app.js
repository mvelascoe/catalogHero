import data from '../data.json' assert {type: 'json'};

function createHeroCards(heroData) {
  const cardInnerHTML = `
  <div class="card-img">
    <img src="${heroData.img}" alt="Personaje">
  </div>
  <div class="card-content">
    <h3>${heroData.name}</h3>
    <p>${heroData.description}</p>
    <button id="${heroData.name}" class="boton">Ver más</button>
  </div>`;

  //<a href="" class="btn-more">Ver más</a>
// const btn = querySelector('#abrirModal');

  const customDiv = document.createElement("div"); // Elemento padre
    customDiv.className = "card";
  customDiv.innerHTML = cardInnerHTML;

  document.querySelector("section.cardsmarvel").appendChild(customDiv);
}

data.forEach(function (heroData) {
    createHeroCards(heroData);
});

const carta = document.querySelector("section.cardsmarvel")

carta.addEventListener("click", (event) =>{
  if(event.target.classList.contains("boton")){
    const personaje = event.target.id
    mostrarModal(personaje)
  }
});

const boton = document.querySelector(".boton");
// const modal = document.querySelector(".modal")

const span = document.getElementsByClassName("cerrar")[0];

const modal = document.getElementById("ventanaModal");

function mostrarModal(heroe){
    const datos = buscarHero(heroe)
    console.log(datos)
    modal.style.display = "block";
    const h2 = document.querySelector(".tituloModal")
    h2.textContent = datos.name

    const imgs = document.querySelector(".imagen")
    imgs.src = datos.img

    const parrafo = document.querySelector(".descripcion")
    parrafo.textContent = datos.description


  }

  function buscarHero(nombre){
    const heroe = data.find((h) => h.name === nombre)
    return heroe
  }

span.addEventListener("click",function() {
  modal.style.display = "none";
});

// window.addEventListener("click",function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


