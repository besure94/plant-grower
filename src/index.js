import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';
import { createPlant } from '../src/js/plant.js';
import { canBloom } from '../src/js/plant.js';
import { canEatBugs } from '../src/js/plant.js';
import { canGlow } from '../src/js/plant.js';
import { applyPowerups } from '../src/js/plant.js';

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

  const createAnotherPlant = document.getElementById("createAnotherPlant");
  const giveAnotherPlantName = document.getElementById("giveAnotherName");
  const newPlantButton = document.getElementById("createNewPlant");
  const additionalPlantDiv = document.getElementById("additionalPlant");

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
    createPlant.setAttribute("class", "hidden");
    plantGrowerDiv.removeAttribute("class", "hidden");
    createAnotherPlant.removeAttribute("class", "hidden");
  });

  document.getElementById("createAnotherPlant").onclick = function() {
    createAnotherPlant.setAttribute("class", "hidden");
    giveAnotherPlantName.removeAttribute("class", "hidden");
    newPlantButton.removeAttribute("class", "hidden");
  };

  newPlantButton.addEventListener("click", function() {
    const newPlantNameValue = giveAnotherPlantName.value;
    const newlyCreatedPlant = createNewPlant(newPlantNameValue);
    additionalPlantDiv.innerText = newlyCreatedPlant.name;
    giveAnotherPlantName.setAttribute("class", "hidden");
    newPlantButton.setAttribute("class", "hidden");
    createAnotherPlant.setAttribute("class", "hidden");
    additionalPlantDiv.removeAttribute("class", "hidden");
    document.getElementById("additionalPlantFunctions").removeAttribute("class", "hidden");
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

  document.getElementById("feedPlant").onclick = function() {
    const fedState = stateControl(feed);
    document.getElementById('soilValue').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("feedHealthyFood").onclick = function() {
    const fedState = stateControl(healthyFood);
    document.getElementById('soilValue').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("feedAverageFood").onclick = function() {
    const fedState = stateControl(averageFood);
    document.getElementById('soilValue').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("feedBadFood").onclick = function() {
    const fedState = stateControl(badFood);
    document.getElementById('soilValue').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById("eatBugs").onclick = function() {
    const eatingBugsState = applyPowerups(canEatBugs);
    console.log(eatingBugsState);
    document.getElementById('soilValue').innerText = `The plant can now eat bugs! Yum!`;
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

  document.getElementById("bloom").onclick = function() {
    const bloomingPlant = applyPowerups(canBloom);
    console.log(bloomingPlant);
    document.getElementById('water-value').innerText = `The plant is blooming!`;
  };

  document.getElementById("giveWater").onclick = function() {
    const wateredState = stateControl(water);
    document.getElementById('waterValue').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("giveHealthyWater").onclick = function() {
    const wateredState = stateControl(healthyWater);
    document.getElementById('waterValue').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("giveTapWater").onclick = function() {
    const wateredState = stateControl(tapWater);
    document.getElementById('waterValue').innerText = `Water: ${wateredState.water}`;
  };

  document.getElementById("giveDirtyWater").onclick = function() {
    const wateredState = stateControl(dirtyWater);
    document.getElementById('waterValue').innerText = `Water: ${wateredState.water}`;
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

  document.getElementById("glow").onclick = function() {
    const glowingPlant = applyPowerups(canGlow);
    console.log(glowingPlant);
    document.getElementById('light-value').innerText = `The plant is glowing! Beautiful!`;
  };

  document.getElementById("givePlantLight").onclick = function() {
    const lightenedState = stateControl(giveLight);
    document.getElementById('lightValue').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("giveUvLight").onclick = function() {
    const lightenedState = stateControl(uvLight);
    document.getElementById('lightValue').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("giveSunlight").onclick = function() {
    const lightenedState = stateControl(sunlight);
    document.getElementById('lightValue').innerText = `Light: ${lightenedState.light}`;
  };

  document.getElementById("giveDarkness").onclick = function() {
    const lightenedState = stateControl(darkness);
    document.getElementById('lightValue').innerText = `Light: ${lightenedState.light}`;
  };
});