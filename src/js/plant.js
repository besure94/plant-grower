export const createPlant = (name) => {
  return {
    name: name,
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const canBloom = (plant) => ({
  name: plant.name,
  bloom: () => `The ${plant.name} is blooming. Watch it grow!`
});

export const canEatBugs = (plant) => ({
  name: plant.name,
  eatBugs: () => `The ${plant.name} can eat bugs. Yum!`
});

export const canGlow = (plant) => ({
  name: plant.name,
  glow: () => `The ${plant.name} is glowing. Beautiful!`
});

export const applyPowerups = (...powerups) => (plant) =>
  powerups.reduce((p, powerup) => powerup(p), plant);