import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import restaurantsReducer from './restaurantsReducer';

export default combineReducers({
  order: orderReducer,
  restaurants: restaurantsReducer
});