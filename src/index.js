import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';
import { createPlant } from '../src/js/plant.js';
import { canBloom } from '../src/js/plant.js';
import { canEatBugs } from '../src/js/plant.js';
import { canGlow } from '../src/js/plant.js';

const feed = changeState("soil")(1);
// const healthyFood = changeState("soil")(5);
// const averageFood = changeState("soil")(2.5);
// const badFood = changeState("soil")(-1);

const water = changeState("water")(1);
// const healthyWater = changeState("water")(5);
// const okayWater = changeState("water")(2.5);
// const badWater = changeState("water")(-1);

const giveLight = changeState("light")(1);
// const uvLight = changeState("light")(5);
// const sunlight = changeState("light")(2.5);
// const badLight = changeState("light")(-1);

window.addEventListener("load", function() {
  document.getElementById("feed").onclick = function() {
    const fedState = stateControl(feed);
    // const healthyFoodState = stateControl(healthyFood);
    // const averageFoodState = stateControl(averageFood);
    // const badFoodState = stateControl(badFood);
    document.getElementById('soil-value').innerText = `Soil: ${fedState.soil}`;
  };

  document.getElementById('show-state').onclick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
  };
});