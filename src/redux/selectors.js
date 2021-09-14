import { createSelector } from '@reduxjs/toolkit';
import { STATUS } from './constants/constants';
import { reviewsMap } from './features/reviews';

export const productMap = state => state.products.entities;
const currentRestaurantSelector = state => state.currentRestaurant;
const restaurantsMap = state => state.restaurants.entities;
const usersMap = state => state.users.entities;

// ---------------------------- Current Restaurants ----------------------------
export const currentRestaurantIdSelector = state => {
  return currentRestaurantSelector(state).currentRestaurantId;
}

// ---------------------------- Restaurants ----------------------------
export const restaurantsLoadingSelector = state => state.restaurants.status === STATUS.loading;
export const restaurantsLoadedSelector = state => state.restaurants.status === STATUS.loaded;

export const restaurantReviewsLoadingSelector = state => state.reviews.status === STATUS.loading;
export const restaurantReviewsLoadedSelector = state => state.reviews.status === STATUS.loaded;

export const restaurantListSelector = createSelector([restaurantsMap], (restaurantsMap) => {
  return Object.values(restaurantsMap);
});

export const restaurantByIdSelector = ((state, { id }) => {
  return restaurantsMap(state)[id];
});

export const restaurantReviewsListSelector = (state, { id }) => {
  const reviewList = restaurantsMap(state)[id].reviews.map(key => {
    return reviewsMap(state)[key];
  })
  return reviewList; // просто список, не map
};

export const averageRatingSelector = createSelector(
  restaurantByIdSelector,
  reviewsMap,
  (restaurant, reviews) => {
    const ratings = restaurant.reviews.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  });

// ---------------------------- Products -------------------------------
export const productLoadingSelector = state => state.products.status === STATUS.loading;
export const productLoadedSelector = state => state.products.status === STATUS.loaded;

export const productByIdSelector = (state, id) => {
  const product = productMap(state)[id];

  return product;
};

// ---------------------------- Order ----------------------------------


// ---------------------------- Review ----------------------------------


// ---------------------------- Users ----------------------------------
export const userByIdSelector = (state, { id }) => {
  const user = usersMap(state)[id];

  return user;
}

