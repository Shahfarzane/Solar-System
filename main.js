import { connet } from "./api.js";
import { loadSolarSystem } from "./solarSystem.js";
import { search } from "./search.js";

async function run() {
  const data = await connet();
  loadSolarSystem(data);
}

run();

document.querySelector("#input").addEventListener("input", search);
