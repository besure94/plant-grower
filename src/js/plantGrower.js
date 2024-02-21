class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) +  1
  }
};