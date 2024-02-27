import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';
import { createPlant } from '../src/js/plant.js';
// import { canBloom } from '../src/js/plant.js';
// import { canEatBugs } from '../src/js/plant.js';
// import { canGlow } from '../src/js/plant.js';

const createNewPlant = createPlant;

const feed = changeState("soil")(1);
const healthyFood = changeState("soil")(5);
const averageFood = changeState("soil")(2.5);
const badFood = changeState("soil")(-1);

const water = changeState("water")(1);
const healthyWater = changeState("water")(5);
const tapWater = changeState("water")(2.5);
const dirtyWater = changeState("water")(-1);

const giveLight = changeState("light")(1);
const uvLight = changeState("light")(5);
const sunlight = changeState("light")(2.5);
const darkness = changeState("light")(-1);

const stateControl = storeState();

window.addEventListener("load", function() {
  const createPlant = document.getElementById("createPlant");
  const plantName = document.getElementById("givePlantName");
  const create = document.getElementById("create");
  const plant = document.getElementById("plant");
  const plantGrowerDiv = document.getElementById("plantGrowerFunctions");
  // event listener for creating a plant
  document.getElementById("createPlant").onclick = function() {
    createPlant.setAttribute("class", "hidden");
    plantName.removeAttribute("class", "hidden");
    create.removeAttribute("class", "hidden");
  };

  create.addEventListener("click", function() {
    const plantNameValue = plantName.value;
    const createdPlant = createNewPlant(plantNameValue);
    plant.innerText = createdPlant.name;
    plantName.setAttribute("class", "hidden");
    create.setAttribute("class", "hidden");
    createPlant.removeAttribute("class", "hidden");
    plantGrowerDiv.removeAttribute("class", "hidden");
  });

  // event listeners for feeding a plant
  document.getElementById("feed").onclick = function() {
    const fedState = stateControl(feed);
    document.getElementById('soil-value').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("healthyFood").onclick = function() {
    const fedState = stateControl(healthyFood);
    document.getElementById('soil-value').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("averageFood").onclick = function() {
    const fedState = stateControl(averageFood);
    document.getElementById('soil-value').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("badFood").onclick = function() {
    const fedState = stateControl(badFood);
    document.getElementById('soil-value').innerText = `Soil: ${fedState.soil}`;
  };

  // event listeners for watering a plant

  document.getElementById("water").onclick = function() {
    const wateredState = stateControl(water);
    document.getElementById('water-value').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("healthyWater").onclick = function() {
    const wateredState = stateControl(healthyWater);
    document.getElementById('water-value').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("tapWater").onclick = function() {
    const wateredState = stateControl(tapWater);
    document.getElementById('water-value').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("dirtyWater").onclick = function() {
    const wateredState = stateControl(dirtyWater);
    document.getElementById('water-value').innerText = `Water: ${wateredState.water}`;
  };

  // event listeners for giving light to a plant

  document.getElementById("giveLight").onclick = function() {
    const lightenedState = stateControl(giveLight);
    document.getElementById('light-value').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("uvLight").onclick = function() {
    const lightenedState = stateControl(uvLight);
    document.getElementById('light-value').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("sunlight").onclick = function() {
    const lightenedState = stateControl(sunlight);
    document.getElementById('light-value').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("darkness").onclick = function() {
    const lightenedState = stateControl(darkness);
    document.getElementById('light-value').innerText = `Light: ${lightenedState.light}`;
  };

  // event listener to show state of a plant

  // code to be added
});