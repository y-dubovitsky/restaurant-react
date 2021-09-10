import { ADD_REVIEW, ERROR, FETCH_REVIEWS, LOADED, LOADING, STATUS } from '../constants/constants';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {

  const { type, reviewId, review, userId, data, error } = action;

  switch (type) {
    case FETCH_REVIEWS + LOADING: {
      return {
        ...state,
        status: STATUS.loading,
        error: null
      }
    }
    case FETCH_REVIEWS + LOADED: {
      const entities = data.reduce((acc, review) => (
        {
          ...acc,
          [review.id]: review
        }
      ), {});

      return {
        ...state,
        status: STATUS.loaded,
        entities
      }
    }
    case FETCH_REVIEWS + ERROR: {
      return {
        ...state,
        status: STATUS.error,
        error
      }
    }
    case ADD_REVIEW: {
      return {
        ...state,
        [reviewId]: {
          id: reviewId,
          userId,
          text: review.text,
          rating: review.rating
        }
      }
    }
    default: return state
  }
}