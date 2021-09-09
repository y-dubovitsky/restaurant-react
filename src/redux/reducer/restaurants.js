import produce from "immer";
import {
  ADD_REVIEW,
  ERROR,
  FETCH_RESTAURANTS,
  LOADED,
  LOADING,
  STATUS
} from '../constants/constants';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {
  const { type, reviewId, restaurantId, data, error } = action;

  switch (type) {
    case FETCH_RESTAURANTS + LOADING: {
      return {
        ...state,
        error: null,
        status: STATUS.loading
      }
    }
    case FETCH_RESTAURANTS + LOADED: {
      const entities = data.reduce((acc, rest) => (
        {
          ...acc,
          [rest.id]: rest
        }
      ), {});

      return {
        ...state,
        status: STATUS.loaded,
        entities
      }
    }
    case FETCH_RESTAURANTS + ERROR: {
      return {
        ...state,
        status: STATUS.error,
        error: error
      }
    }
    case ADD_REVIEW: {
      return produce(state, draft => {
        draft[restaurantId].reviews.push(reviewId);

        return draft;
      })
    }
    default: return state
  }
}