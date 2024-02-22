import Plant from '../src/js/plant.js';

describe('Plant grower', () => {

  let plant;

  beforeEach(() => {
    plant = new Plant();
  });

  test('Should create a class called Plant that has properties for water, soil and light.', () => {
    expect(plant.water).toEqual(0);
    expect(plant.soil).toEqual(0);
    expect(plant.light).toEqual(0);
  });
});