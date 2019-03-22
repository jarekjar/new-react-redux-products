import * as types from "./actionTypes";

export const beginApiCall = () => ({ type: types.BEGIN_API_CALL });

export const apiCallError = payload => ({
  type: types.API_CALL_ERROR,
  payload
});
