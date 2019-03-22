import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function businessReducer(
  state = initialState.businesses,
  action
) {
  switch (action.type) {
    case types.LOAD_BUSINESSES_SUCCESS:
      return action.businesses;
    default:
      return state;
  }
}
