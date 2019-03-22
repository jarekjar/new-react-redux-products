import { combineReducers } from "redux";
import products from "./productReducer";
import businesses from "./businessReducer";
import isPinging from "./pingReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  products,
  businesses,
  apiCallsInProgress,
  isPinging
});

export default rootReducer;
