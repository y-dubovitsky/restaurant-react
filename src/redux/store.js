import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk';
import uuid from './middleware/uuid';
import api from './middleware/api';

export default createStore(reducer, applyMiddleware(thunk, api, uuid));
