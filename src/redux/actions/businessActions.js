import * as types from "./actionTypes";
//import * as businessApi from "../../api/businessApi";
import { beginApiCall } from "./apiStatusActions";

export const loadBusinessSuccess = businesses => ({
  type: types.LOAD_BUSINESSES_SUCCESS,
  businesses
});

// export const loadBusinesses = () => dispatch => {
//   dispatch(beginApiCall());
//   return businessApi
//     .getBusinesses()
//     .then(businesses => {
//       dispatch(loadBusinessSuccess(businesses));
//     })
//     .catch(error => {
//       dispatch(apiCallError(error));
//       throw error;
//     });
// };

//  ** ABOVE IS THUNK, BELOW IS AN ACTION FOR THE EPIC ** \\

export const loadBusinessesEpic = () => ({ type: types.LOAD_BUSINESSES });

export const loadBusinesses = () => dispatch => {
  dispatch(beginApiCall());
  dispatch(loadBusinessesEpic());
};
