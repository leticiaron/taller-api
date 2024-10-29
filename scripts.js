document.addEventListener("DOMContentLoaded", function () {
  // URL de la API
  let apiURL = "https://rickandmortyapi.com/api/character";

  // Función para obtener los datos de los personajes
  function fetchCharacters() {
    fetch(apiURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayCharacters(data.results);
      });
  }

  // Función para mostrar los personajes
  function displayCharacters(characters) {
    let characterCards = document.getElementById("character-cards");
    characterCards.innerHTML = ""; // Limpiar contenido anterior

    characters.forEach(function (character) {
      // Tarjetas de personajes
      let cardHTML = `
      <div class="col-md-4">
        <div class="card">
          <img src="${character.image}" class="card-img-top" alt="${
        character.name
      }">
          <div class="card-body">
            <h5 class="card-title text-center">${character.name}</h5>
            <div class="character-info">
              <p><span>Status:</span> ${character.status}</p>
              <p><span>Species:</span> ${character.species}</p>
              <p><span>Type:</span> ${character.type || "Unknown"}</p>
              <p><span>Gender:</span> ${character.gender}</p>
              <p><span>Origin:</span> ${character.origin.name}</p>
              <p><span>Location:</span> ${character.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    `;

      // Insertar la tarjeta en el contenedor
      characterCards.insertAdjacentHTML("beforeend", cardHTML);
    });
  }
  fetchCharacters();
});
