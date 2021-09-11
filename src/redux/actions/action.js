import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  PICK_RESTAURANT,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  FETCH_PRODUCTS,
  FETCH_USERS,
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
);

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: FETCH_REVIEWS + LOADING, restaurantId });

  try {
    const data = await requests.loadReviews(restaurantId);
    dispatch({ type: FETCH_REVIEWS + LOADED, data, restaurantId });
  } catch (error) {
    dispatch({ type: FETCH_REVIEWS + ERROR, error, restaurantId });
  }
};

export const loadProducts = (productId) => (
  {
    type: FETCH_PRODUCTS,
    callApi: () => requests.loadProducts(productId)
  }
);

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS + LOADING });

  try {
    const users = await requests.loadUsers();
    dispatch({ type: FETCH_USERS + LOADED, users });
  } catch (error) {
    dispatch({ type: FETCH_USERS + ERROR, error });
  }
};

export const setCurrentRestaurant = (id) => (dispatch) => {
  dispatch({type: PICK_RESTAURANT, id})
}