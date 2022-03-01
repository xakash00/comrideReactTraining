import { SET_COUNTER, INCREMENT, DECREMENT } from "./types";

export const setCounter = (counter) => ({
  type: SET_COUNTER,
  payload: counter,
});

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
