import { mapTo, delay } from "rxjs/operators";
import { ofType } from "redux-observable";
import * as pingActions from "../actions/pingActions";
import * as types from "../actions/actionTypes";

export const pingEpic = action$ =>
  action$.pipe(
    ofType(types.PING),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(pingActions.pong())
  );
