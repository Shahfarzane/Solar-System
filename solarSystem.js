let container = document.querySelector(".all-planets-container");
import { openModal } from "./pagination.js";
import { imageUrls } from "./variables.js";
import { createModal } from "./createModal.js";

function loadSolarSystem(data) {
  data.forEach(function (data, index) {
    console.log(data);
    let planetNameEl = document.createElement("h6");
    planetNameEl.innerText = data.name;
    let planetContainer = document.createElement("article");
    planetContainer.classList.add("planet-container");
    planetContainer.setAttribute("data-id", index);
    let planetImgEl = document.createElement("img");
    planetImgEl.classList.add("planet-icon");
    if (imageUrls[index]) {
      planetImgEl.src = imageUrls[index];
    } else {
      planetImgEl.src = "Moon.png";
    }
    let modalEl = createModal(data, index, imageUrls);
    planetContainer.addEventListener("click", openModal);
    container.appendChild(modalEl);
    planetContainer.appendChild(planetImgEl);
    planetContainer.appendChild(planetNameEl);
    container.appendChild(planetContainer);

    return container;
  });
}

export { loadSolarSystem };
