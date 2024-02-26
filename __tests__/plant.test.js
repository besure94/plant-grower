import { changeState } from '../src/js/plant.js';
import { storeState } from '../src/js/plant.js';
import { createPlant } from '../src/js/plant.js';
import { canBloom } from '../src/js/plant.js';
import { canEatBugs } from '../src/js/plant.js';
import { canGlow } from '../src/js/plant.js';

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

  test('App should have functionality to store state about multiple plant objects.', () => {
    const plantOneStateControl = storeState();
    const plantTwoStateControl = storeState();
    const plantThreeStateControl = storeState();

    const feedHealthyFood = changeState("soil")(5);
    const feedBadFood = changeState("soil")(-1);
    const hydrateSpringWater = changeState("water")(5);
    const hydrateDirtyWater = changeState("water")(-1);
    const giveUvLight = changeState("light")(5);
    const lackOfLight = changeState("light")(-1);

    const plantOneNewState = plantOneStateControl(feedHealthyFood);
    const plantOneNewStateTwo = plantOneStateControl(feedBadFood);
    const plantTwoNewState = plantTwoStateControl(hydrateSpringWater);
    const plantTwoNewStateTwo = plantTwoStateControl(hydrateDirtyWater);
    const plantThreeNewState = plantThreeStateControl(giveUvLight);
    const plantThreeNewStateTwo = plantThreeStateControl(lackOfLight);

    expect(plantOneNewState).toEqual({ soil: 5 });
    expect(plantOneNewStateTwo).toEqual({ soil: 4 });
    expect(plantTwoNewState).toEqual({ water: 5 });
    expect(plantTwoNewStateTwo).toEqual({ water: 4 });
    expect(plantThreeNewState).toEqual({ light: 5 });
    expect(plantThreeNewStateTwo).toEqual({ light: 4 });
  });

  test('App should contain functionality to give different abilities to different plants', () => {
    const begonia = createPlant('begonia');
    const venusFlyTrap = createPlant('venusFlyTrap');
    const petunia = createPlant('petunia');

    const canBloomResult = canBloom(begonia);
    const canEatBugsResult = canEatBugs(venusFlyTrap);
    const canGlowResult = canGlow(petunia);

    expect(canBloomResult.name).toEqual("begonia");
    expect(canBloomResult.bloom()).toEqual("The begonia is blooming. Watch it grow!");

    expect(canEatBugsResult.name).toEqual("venusFlyTrap");
    expect(canEatBugsResult.eatBugs()).toEqual("The venusFlyTrap can eat bugs. Yum!");

    expect(canGlowResult.name).toEqual("petunia");
    expect(canGlowResult.glow()).toEqual("The petunia is glowing. Beautiful!");
  });
});