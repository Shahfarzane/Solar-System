function search() {
  let allPlanets = document.querySelectorAll(".planet-container");
  let inputValue = document.querySelector("#input").value.toLowerCase();
  let notFoundMessage = document.querySelector("#not-found");
  let results = false;
  allPlanets.forEach(function (planet) {
    var title = planet.querySelectorAll("h6")[0].innerText.toLowerCase();
    if (title.indexOf(inputValue) > -1) {
      planet.style.display = "block";
      results = true;
    } else {
      planet.style.display = "none";
    }
  });
  if (!results && inputValue !== "") {
    notFoundMessage.style.display = "block";
  } else {
    notFoundMessage.style.display = "none";
  }
  if (inputValue === "") {
    notFoundMessage.style.display = "none";
  }
}

export { search };
