import { TODO_ADD, TODO_DELETE, TODO_UPDATE } from "./actionTypes";
import { initialState } from "./initialState";

// create reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];

    case TODO_DELETE:
      return state.filter((data) => data !== action.payload);

    case TODO_UPDATE:
      state[state.indexOf(action.payload.old)] = action.payload.new;
      return state;

    default:
      return state;
  }
};

// export default
export default todoReducer;
