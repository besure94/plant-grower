export const createPlant = () => {
  return {};
}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

// const canBloom = (begonia) => ({
//   bloom: () => {
//     return `The ${begonia} is blooming. Watch it grow!`;
//   }
// });