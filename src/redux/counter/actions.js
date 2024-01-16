import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementCount = (id) => {
  return { type: INCREMENT, payload: id };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};
