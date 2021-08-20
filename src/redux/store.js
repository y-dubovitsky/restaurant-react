import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import uuid from './middleware/uuid';

export default createStore(reducer, applyMiddleware(uuid));
