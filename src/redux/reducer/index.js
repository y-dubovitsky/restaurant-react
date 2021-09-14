import { combineReducers } from 'redux';
import order from '../features/order';
import restaurants from './restaurants';
import products from './products';
import reviews from '../features/reviews';
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