import { pingEpic } from "./pingEpic";
import { businessEpic } from "./businessEpic";
import { combineEpics } from "redux-observable";
import { productEpic } from "./productEpic";

export const rootEpic = combineEpics(pingEpic, businessEpic, productEpic);
