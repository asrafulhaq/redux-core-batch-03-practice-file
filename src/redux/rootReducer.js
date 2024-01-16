import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import backgroundReducer from "./background/backgroundReducer";
import todoReducer from "./todo/todoReducer";

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  bg: backgroundReducer,
  todo: todoReducer,
});

// export default
export default rootReducer;
