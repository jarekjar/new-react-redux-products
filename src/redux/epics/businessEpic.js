import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import * as businessActions from "../actions/businessActions";
import * as types from "../actions/actionTypes";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

const apiPath = process.env.API_URL + "/businesses/";

export const businessEpic = action$ =>
  action$.pipe(
    ofType(types.LOAD_BUSINESSES),
    mergeMap(() =>
      ajax.getJSON(apiPath).pipe(
        map(response => businessActions.loadBusinessSuccess(response)),
        catchError(error =>
          of({
            type: types.API_CALL_ERROR,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
