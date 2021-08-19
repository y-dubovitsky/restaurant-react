import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import restaurantsReducer from './restaurantsReducer';
import productsReducer from './productsReducer';
import reviewsReducer from './reviewsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  order: orderReducer,
  restaurants: restaurantsReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  users: usersReducer
});