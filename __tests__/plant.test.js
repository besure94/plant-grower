import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';
import { createPlant } from '../src/js/plant.js';

describe('Plant grower application tests', () => {

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

  test('App should have functionality to create multiple plant objects.', () => {
    const createdPlantOne = createPlant();
    const createdPlantTwo = createPlant();
    const createdPlantThree = createPlant();
    expect(createdPlantOne).toEqual({});
    expect(createdPlantTwo).toEqual({});
    expect(createdPlantThree).toEqual({});
  });

  test('App should have functionality to change state of multiple plant objects.', () => {
    const createdPlantOne = createPlant();
    const createdPlantTwo = createPlant();
    const createdPlantThree = createPlant();

    const feed = changeState("soil");
    const fedPlant = feed(1)(createdPlantOne);
    const healthyFood = changeState("soil")(5);
    const healthyFoodResult = healthyFood(createdPlantOne);
    const badFood = changeState("soil")(-1);
    const badFoodResult = badFood(createdPlantOne);

    const hydrate = changeState("water");
    const wateredPlant = hydrate(1)(createdPlantTwo);
    const springWater = changeState("water")(5);
    const springWaterResult = springWater(createdPlantTwo);
    const dirtyWater = changeState("water")(-1);
    const dirtyWaterResult = dirtyWater(createdPlantTwo);

    const giveLight = changeState("light");
    const lightenedPlant = giveLight(1)(createdPlantThree);
    const uvLight = changeState("light")(5);
    const uvLightResult = uvLight(createdPlantThree);
    const noLight = changeState("light")(-1);
    const noLightResult = noLight(createdPlantThree);

    expect(fedPlant).toEqual({ soil: 1});
    expect(healthyFoodResult).toEqual({ soil: 5 });
    expect(badFoodResult).toEqual({ soil: -1 });

    expect(wateredPlant).toEqual({ water: 1});
    expect(springWaterResult).toEqual({ water: 5 });
    expect(dirtyWaterResult).toEqual({ water: -1 });

    expect(lightenedPlant).toEqual({ light: 1 });
    expect(uvLightResult).toEqual({ light: 5 });
    expect(noLightResult).toEqual({ light: -1 });
  });
});