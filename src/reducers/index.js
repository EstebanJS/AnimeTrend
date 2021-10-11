import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";
export default combineReducers({
  categoriesReducer,
  searchReducer
});
