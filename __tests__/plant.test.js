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
    const createdPlant = createPlant();
    const createdPlantOne = createdPlant;
    const createdPlantTwo = createdPlant;
    const createdPlantThree = createdPlant;
    expect(createdPlantOne).toEqual({});
    expect(createdPlantTwo).toEqual({});
    expect(createdPlantThree).toEqual({});
  });
});