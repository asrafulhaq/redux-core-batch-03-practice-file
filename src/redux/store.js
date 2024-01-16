import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// create store
const store = createStore(rootReducer, composeWithDevTools());

// export default
export default store;
