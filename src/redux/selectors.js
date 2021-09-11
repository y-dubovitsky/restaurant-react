import { createSelector } from 'reselect';
import { STATUS } from './constants/constants';

const order = state => state.order;
const currentRestaurantSelector = state => state.currentRestaurant;
const productMap = state => state.products.entities;
const restaurantsMap = state => state.restaurants.entities;
const reviewsMap = state => state.reviews.entities;
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
export const productByIdSelector = (state, id) => {
  const product = productMap(state)[id];

  return product;
};

// ---------------------------- Order ----------------------------------
//TODO Оптимизировать этот метод!
export const orderedProductsSelector = createSelector(
  // Массив значений, от которых зависит, будет ли пересчитываться функция
  [productMap, order],
  (products, order) => {
    const orderIds = Object.keys(order);
    const productArray = Object.keys(products).map(key => products[key]);

    return productArray.filter(product => orderIds.includes(product.id)).map(product => {
      return {
        ...product,
        amount: order[product.id]
      }
    })
  });

export const totalOrderPriceSelector = createSelector([orderedProductsSelector], (product) => {
  return product.reduce((acc, { amount, price }) => acc + amount * price, 0)
});

// ---------------------------- Review ----------------------------------
export const reviewByIdSelector = (state, props) => {
  return reviewsMap(state)[props.id];
}

export const reviewByIdWithUserSelector = (state, props) => {
  const review = reviewsMap(state)[props.id];
  const user = userByIdSelector(state, { id: review.userId });

  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    user: {
      ...user
    }
  }
}

// ---------------------------- Users ----------------------------------
export const userByIdSelector = (state, { id }) => {
  const user = usersMap(state)[id];

  return user;
}

