import produce from "immer";
import { ADD_REVIEW, LOAD_RESTAURANTS } from '../constants/constants';

export default (restaurants = {}, action) => {
  const { type, reviewId, restaurantId, data } = action;

  switch (type) {
    case LOAD_RESTAURANTS: {
      return data.reduce((acc, rest) => (
        {
          ...acc,
          [rest.id]: rest
        }
      ), {});
    }
    case ADD_REVIEW: {
      return produce(restaurants, draft => {
        draft[restaurantId].reviews.push(reviewId);

        return draft;
      })
    }
    default: return restaurants
  }
}