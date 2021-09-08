import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import uuid from './middleware/uuid';
import api from './middleware/api';

export default createStore(reducer, applyMiddleware(api, uuid));
