import { ofType, combineEpics } from 'redux-observable';
import {switchMap} from 'rxjs/operators';
import {defer, Observable} from 'rxjs';
import * as types from "../actions/actionTypes";
import { createProductSuccess, updateProductSuccess  } from '../actions/productActions';
import {beginApiCall, apiCallError} from '../actions/apiStatusActions';
import { saveProduct } from '../../api/productApi';

const createProduct = (product, history, toast, setSaving, setErrors) => {
    return Observable.create(async observer => {
        try{
            observer.next(beginApiCall());
            const response = await saveProduct(product);
            console.log(product)
            product.id ? observer.next(updateProductSuccess(response)) : observer.next(createProductSuccess(response)) 
              toast.success("Product info saved.");
              history.push('/products');
        }
        catch(error){
            observer.next(apiCallError());
            setSaving(false);
            setErrors({ onSave: error.message });
        }
        finally{
            observer.complete();
        }
    })
}

const createProductEpic = ($action) => {
    return $action.pipe(
        ofType(types.CREATE_PRODUCT),
        switchMap(({product, history, toast, setSaving, setErrors}) => defer(() => createProduct(product, history, toast, setSaving, setErrors)))
    );
}

export const productEpic = combineEpics(createProductEpic);