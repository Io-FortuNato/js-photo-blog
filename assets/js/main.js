const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

const row = document.querySelector(".row");

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then(res => res.json())
  .then(data => {

    // Partiamo da indice 0 ma usiamo i+2
    data.slice(1, 6).forEach((event, index) => {

      const col = document.createElement("div");
      col.className = "col-4 mb-3";

      col.innerHTML = `
        <div class="card">
          <img class="top-icon" src="./assets/img/pin.svg" alt="Icona in cima">
          <img src="./assets/img/${index + 2}.png" alt="Immagine card">
          <div class="card-body">
            <div class="card-text">${event.date}</div>
            <h3>${event.title}</h3>
          </div>
        </div>
      `;

      row.appendChild(col);
    });

  })
  .catch(error => console.error(error));
