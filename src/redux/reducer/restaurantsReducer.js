import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurant = normalizedRestaurants.reduce((acc, rest) => (
  {
    ...acc,
    [rest.id]: rest
  }
), {});

export default (restaurants = defaultRestaurant, action) => {
  switch (action.type) {
    default: return restaurants
  }
}