import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';
import uuid from './middleware/uuid';
import api from './middleware/api';

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk, api, uuid)));
