import { navigateContainer } from "./pagination.js";

function createModal(data, index, imageUrls) {
  let modalContainer = document.createElement("section");
  modalContainer.classList.add("modal");
  modalContainer.setAttribute("id", "modal" + index);

  let contentEl = document.createElement("article");
  contentEl.classList.add("modal-content");

  let hideBtn = document.createElement("div");
  hideBtn.classList.add("hide");
  hideBtn.innerHTML = "&times;";

  let moreInfoEl = document.createElement("article");
  moreInfoEl.innerHTML = `<p> <strong> ${data.name} </strong> is a <strong> ${data.type} </strong> and its latin name is <strong> ${data.latinName} </strong> with the orbial period of <strong> ${data.orbitalPeriod} </strong>.</p>`;

  let descriptionEl = document.createElement("p");
  descriptionEl.innerText = data.desc;

  let extraInfoEl = document.createElement("div");
  extraInfoEl.innerHTML = `<p> <strong>${data.name}'s</strong> average distance to the Sun is about <b> ${data.distance} KM </b> from Sun.<b>${data.name}'s</b> maxium temprature is <b> ${data.temp.day}</b> and the minimum temprature is <b> ${data.temp.night}</b> <hr />`;
  let hrEl = document.createElement("hr");

  let moonsTitle = document.createElement("h4");
  moonsTitle.innerText = "Moons:";
  let moonContainer = document.createElement("div");
  moonContainer.classList.add("moons");
  const moonList = data.moons.map((moon) => {
    const moonItemsEl = document.createElement("li");
    moonItemsEl.innerText = moon;
    return moonItemsEl;
  });

  moonList.forEach((moonEl) => moonContainer.appendChild(moonEl));
  let navigationContainer = navigateContainer(data, index, imageUrls);

  contentEl.appendChild(hideBtn);
  contentEl.appendChild(moreInfoEl);
  contentEl.appendChild(descriptionEl);
  contentEl.appendChild(hrEl);
  contentEl.appendChild(extraInfoEl);
  contentEl.appendChild(moonsTitle);
  contentEl.appendChild(moonContainer);
  contentEl.appendChild(navigationContainer);
  modalContainer.appendChild(contentEl);

  hideBtn.addEventListener("click", function () {
    let modal = document.getElementById("modal" + index);
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    let modal = document.getElementById("modal" + index);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  return modalContainer;
}

export { createModal };
