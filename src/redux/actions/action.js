import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS
} from '../constants/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReview = (review, props) => (
  {
    type: ADD_REVIEW,
    review,
    restaurantId: props.restaurantId,
    generateId: ['reviewId', 'userId']
  }
);
export const loadRestaurants = () => (
  {
    type: LOAD_RESTAURANTS,
    callApi: '/api/restaurants'
  }
)