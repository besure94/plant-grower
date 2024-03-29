import { Plant } from '../src/js/plant.js';
import { PlantTwo } from '../src/js/plant.js';
import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';

describe('Plant grower application tests', () => {

  test('Should create a class called Plant that has properties for water, soil and light.', () => {
    const plant = new Plant();
    expect(plant.water).toEqual(0);
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test('Should contain a "changeState" method, which can create smaller functions which modify a plants properties.', () => {
    const plant = new Plant();
    const feed = changeState("soil");
    const feedResult = feed(5)(plant);

    const hydrate = changeState("water");
    const hydrateResult = hydrate(7)(plant);

    const giveLight = changeState("light");
    const lightResult = giveLight(3)(plant);

    expect(feedResult).toEqual({"light": 0, "soil": 5, "water": 0});
    expect(hydrateResult).toEqual({"light": 0, "soil": 0, "water": 7});
    expect(lightResult).toEqual({"light": 3, "soil": 0, "water": 0});
  });

  test('"changeState" method should create functions which can modify a plants soil property by different values.', () => {
    const plant = new PlantTwo();
    const dankFood = changeState("soil")(10);
    const midFood = changeState("soil")(5);
    const badFood = changeState("soil")(-1);

    const dankFoodResult = dankFood(plant);
    const midFoodResult = midFood(plant);
    const badFoodResult = badFood(plant);

    expect(dankFoodResult).toEqual({"light": 0, "soil": 10, "water": 0});
    expect(midFoodResult).toEqual({"light": 0, "soil": 5, "water": 0});
    expect(badFoodResult).toEqual({"light": 0, "soil": -1, "water": 0});
  });

  test('App should contain a "storeState" method, which can store the new state of a modified object.', () => {
    const springWater = changeState("water")(10);
    const tapWater = changeState("water")(5);
    const rancidWater = changeState("water")(-5);

    const stateControl = storeState();

    const springWateredPlant = stateControl(springWater);
    const tapWateredPlant = stateControl(tapWater);
    const rancidWateredPlant = stateControl(rancidWater);

    expect(springWateredPlant).toEqual({ water: 10 });
    expect(tapWateredPlant).toEqual({ water: 15 });
    expect(rancidWateredPlant).toEqual({ water: 10 });
  });

  test('App should be able to access an objects state without changing it.', () => {
    const stateControl = storeState();
    const currentState = stateControl();
    expect(currentState).toEqual({});
  });
});