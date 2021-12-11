import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import authorization from "./reducers/authorization";
import contacts from "./reducers/contacts";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = combineReducers({
  authorization,
  contacts
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
