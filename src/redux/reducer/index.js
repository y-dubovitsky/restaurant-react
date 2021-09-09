import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  order: order,
  restaurants: restaurants,
  products: products,
  reviews: reviews,
  users: users
});