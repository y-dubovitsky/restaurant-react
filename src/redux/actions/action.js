import {
  ADD_REVIEW,
  PICK_RESTAURANT,
  FETCH_CURRENT_REST_PRODUCTS,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  FETCH_USERS,
  LOADING,
  LOADED,
  ERROR,
} from '../constants/constants';
import requests from '../requests/requests';

export const loadRestaurants = () => (
  {
    type: FETCH_RESTAURANTS,
    callApi: () => requests.loadRestaurants()
  }
);

export const setCurrentRestaurant = (id) => (dispatch) => {
  dispatch({ type: PICK_RESTAURANT, id })
}

export const loadCurrentRestaurantProducts = (curRestId) => async (dispatch) => {
  dispatch({ type: FETCH_CURRENT_REST_PRODUCTS + LOADING });

  try {
    const data = await requests.loadProducts(curRestId);
    dispatch({ type: FETCH_CURRENT_REST_PRODUCTS + LOADED, data, curRestId });
  } catch (error) {
    dispatch({ type: FETCH_CURRENT_REST_PRODUCTS + ERROR, curRestId });
  }
}