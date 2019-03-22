import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function pingReducer(state = initialState.isPinging, action) {
  switch (action.type) {
    case types.PING:
      return true;

    case types.PONG:
      return false;

    default:
      return state;
  }
}
