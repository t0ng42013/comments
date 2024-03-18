export const createStore =  (reducer, initialState) => {
  let state =  initialState;
  let listeners = [];

  const getState = () => {
    return  state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  
  };

const subscribe = (listener) => {
  listeners.push(listener);
  return function unsubscribe() {
    listeners = listeners.filter((l) => l !== listener);
  };
};

  return {
    getState,
    dispatch,
    subscribe,
  };
};
