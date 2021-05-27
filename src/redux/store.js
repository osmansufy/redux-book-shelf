import { combineReducers, createStore } from "redux";
import reducerBooks from "./reducers/reducerBooks";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  books: reducerBooks,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
