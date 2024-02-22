import Plant from '../src/js/plant.js';
import { hydrate } from '../src/js/plant.js';

describe('Plant grower application tests', () => {

  test('Should create a class called Plant that has properties for water, soil and light.', () => {
    const plant = new Plant();
    expect(plant.water).toEqual(0);
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
  });

  test('App should contain a method which adds to the plants "water" property.', () => {
    const plant = new Plant();
    const result = hydrate(plant);
    expect(result.water).toEqual(1);
  });
});