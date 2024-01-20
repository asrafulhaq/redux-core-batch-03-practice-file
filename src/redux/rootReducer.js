import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import backgroundReducer from "./background/backgroundReducer";
import todoReducer from "./todo/todoReducer";
import studentReducer from "./student/studentReducer";

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  bg: backgroundReducer,
  todo: todoReducer,
  student: studentReducer,
});

// export default
export default rootReducer;
