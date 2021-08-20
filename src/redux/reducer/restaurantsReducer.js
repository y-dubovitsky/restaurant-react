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
    case ADD_REVIEW: {
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, reviewId]
        }
      }
    }
    default: return restaurants
  }
}