import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import currentRestaurant from './currentRestaurant';

export default combineReducers({
  order: order,
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  products: products,
  reviews: reviews,
  users: users
});