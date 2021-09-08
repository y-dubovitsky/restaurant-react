import produce from "immer";
import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants/constants';

const defaultRestaurant = normalizedRestaurants.reduce((acc, rest) => (
  {
    ...acc,
    [rest.id]: rest
  }
), {});

export default (restaurants = defaultRestaurant, action) => {
  const { type, reviewId, restaurantId } = action;

  switch (type) {
    // case ADD_REVIEW: {

    //   const restaurant = restaurants[restaurantId];

    //   return {
    //     ...restaurants,
    //     [restaurantId]: {
    //       ...restaurant,
    //       reviews: [...restaurant.reviews, reviewId]
    //     }
    //   }
    // }
    case ADD_REVIEW: {
      return produce(restaurants, draft => {
        draft[restaurantId].reviews.push(reviewId);

        return draft;
      })
    }
    default: return restaurants
  }
}