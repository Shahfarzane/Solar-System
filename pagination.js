let currentItemIndex = -1;

function navigateContainer(data, index, imageUrls) {
  let nextPlanetBtn = document.createElement("button");
  nextPlanetBtn.classList.add("navigation-button");

  let previousPlanetBtn = document.createElement("button");
  previousPlanetBtn.classList.add("navigation-button");

  let navigationContainer = document.createElement("article");
  navigationContainer.classList.add("navigation-buttons-container");

  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("navigation-buttons");

  let currentLocation = document.createElement("span");
  currentLocation.innerText = `You are on : ${data.name} `;

  navigationContainer.appendChild(buttonsContainer);
  if (index > 0) {
    previousPlanetBtn.innerHTML = `<i class="fa-solid fa-left-long fa-2x"></i><img src=${
      imageUrls[index - 1]
    } class="small-img"></img>`;
    buttonsContainer.appendChild(previousPlanetBtn);
    previousPlanetBtn.addEventListener("click", loadPreviousPlanet);
  }

  buttonsContainer.appendChild(currentLocation);
  if (index < imageUrls.length - 1) {
    nextPlanetBtn.innerHTML = `<img src=${
      imageUrls[index + 1]
    } class="small-img"></img> <i class="fa-solid fa-right-long fa-2x"></i>`;
    buttonsContainer.appendChild(nextPlanetBtn);
    nextPlanetBtn.addEventListener("click", loadNextPlanet);
  }

  return navigationContainer;
}

function openModal() {
  currentItemIndex = parseInt(this.getAttribute("data-id"));
  let modal = document.getElementById("modal" + currentItemIndex);
  modal.style.display = "block";
}
function loadNextPlanet() {
  currentItemIndex++;
  let currentPlanetModal = document.getElementById(
    "modal" + (currentItemIndex - 1)
  );
  currentPlanetModal.style.display = "none";
  let nextModal = document.getElementById("modal" + currentItemIndex);
  nextModal.style.display = "block";
}

function loadPreviousPlanet() {
  let currentPlanetModal = document.getElementById("modal" + currentItemIndex);
  let prevModalId = "modal" + (currentItemIndex - 1);
  let prevModal = document.getElementById(prevModalId);
  currentPlanetModal.style.display = "none";
  currentItemIndex--;
  prevModal.style.display = "block";
}

export { openModal, navigateContainer };
