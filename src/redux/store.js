import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import logger from './middleware/logger';

export default createStore(reducer, applyMiddleware(logger));
