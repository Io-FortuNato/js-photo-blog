
 const row = document.getElementById("row-cards");

fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then(res => res.json())
  .then(data => {

   
    data.slice(0, 6).forEach((event, index) => {  

      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4 mb-4"; 

      col.innerHTML = `
        <div class="card">
          <img class="top-icon" src="./assets/img/pin.svg" alt="Icona in cima">
          <img src="./assets/img/${index + 1}.png" class="img-fluid" alt="Immagine card">
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