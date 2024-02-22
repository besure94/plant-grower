export class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

export class PlantTwo {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};
