import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  LOADING,
  LOADED,
  ERROR,
} from '../constants/constants';
import requests from '../requests/requests';

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
    type: FETCH_RESTAURANTS,
    callApi: () => requests.loadRestaurants()
  }
)

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: FETCH_REVIEWS + LOADING, restaurantId });

  try {
    const data = await requests.loadReviews(restaurantId);
    dispatch({ type: FETCH_REVIEWS + LOADED, data, restaurantId });
  } catch(error) {
    dispatch({type: FETCH_REVIEWS + ERROR, error, restaurantId});
  }
}