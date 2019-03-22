import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { loadBusinesses } from "./businessActions";

export const loadProductSuccess = products => ({
  type: types.LOAD_PRODUCTS_SUCCESS,
  products
});

export const createProductSuccess = product => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  product
});

export const updateProductSuccess = product => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  product
});

export const deleteProductOptimistic = product => ({
  type: types.DELETE_PRODUCT_OPTIMISTIC,
  product
});




export const loadProducts = () => dispatch => {
  dispatch(beginApiCall());
  return productApi
    .getProducts()
    .then(products => {
      dispatch(loadProductSuccess(products));
    })
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    })
    .then(dispatch(loadBusinesses()));
};


export const saveProduct = (product, history, toast, setSaving, setErrors) => ({type: types.CREATE_PRODUCT, product, history, toast, setSaving, setErrors});


// export const saveProduct = product => dispatch => {f
//   dispatch(beginApiCall());
//   return productApi
//     .saveProduct(product)
//     .then(savedProduct => {
//       product.id
//         ? dispatch(updateProductSuccess(savedProduct))
//         : dispatch(createProductSuccess(savedProduct));
//     })
//     .catch(error => {
//       dispatch(apiCallError(error));
//       throw error;
//     });
// };

export const deleteProduct = product => dispatch => {
  //doing optimistic delete, so not dispatching begin/end api call
  //actions, or api call error action since we're not showing the loading status for this
  dispatch(deleteProductOptimistic(product));
  return productApi.deleteProduct(product.id);
};
