import { Plant } from '../src/js/plant.js';
import { PlantTwo } from '../src/js/plant.js';
import { changeState } from '../src/js/plant.js';

describe('Plant grower application tests', () => {

  test('Should create a class called Plant that has properties for water, soil and light.', () => {
    const plant = new Plant();
    expect(plant.water).toEqual(0);
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test('Should contain a "changeState" method, which can increment any property of any object by any value.', () => {
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
});