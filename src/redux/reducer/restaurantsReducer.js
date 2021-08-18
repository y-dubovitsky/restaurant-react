import { normalizedRestaurants as defaultRestaurant } from '../../fixtures';

export default (restaurants = defaultRestaurant, action) => {
  switch (action.type) {
    default: return restaurants
  }
}