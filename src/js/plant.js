export default class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

export const changeState = (state, prop) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + 1
  }
};
