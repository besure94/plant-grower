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

  test('The "changeState" method should be able to property any property of an object by any value.', () => {
    const plant = new Plant();
    const plantTwo = new PlantTwo();
    const resultOne = changeState(plant, "water", 10);
    const resultTwo = changeState(plantTwo, "light", 5);
    expect(resultOne.water).toEqual(10);
    expect(resultTwo.light).toEqual(5);
  });
});