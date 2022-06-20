import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

export const reducer = combineReducers({
  allProducts: productReducer,
});
