import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

// redux middleware
const middleware = [thunk];

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export default
export default store;
