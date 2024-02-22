export default class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

export const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

export const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

export const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}
