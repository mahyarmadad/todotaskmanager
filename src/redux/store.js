import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { addtodoReducer } from "./addtodo-reducer";

export default createStore(addtodoReducer, applyMiddleware(logger));
