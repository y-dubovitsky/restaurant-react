import { createSelector } from 'reselect';
import { STATUS } from './constants/constants';

const order = state => state.order;
const productMap = state => state.products.entities;
const restaurantsMap = state => state.restaurants.entities;
const reviewsMap = state => state.reviews;
const usersMap = state => state.users.entities;

// ---------------------------- Restaurants ----------------------------
export const restaurantsLoadingSelector = state => state.restaurants.status === STATUS.loading;
export const restaurantsLoadedSelector = state => state.restaurants.status === STATUS.loaded;

export const restaurantListSelector = createSelector([restaurantsMap], (restaurantsMap) => {
  return Object.values(restaurantsMap);
});

export const restaurantByIdSelector = (state, { id }) => restaurantsMap(state)[id];

export const restaurantReviewListSelector = (state, { id }) => {
  const reviewList = restaurantsMap(state)[id].reviews.map(key => {
    return reviewsMap(state)[key];
  })

  return reviewList;
};

export const restaurantReviewIdListSelector = (state, { id }) => {
  return restaurantsMap(state)[id].reviews;
};

export const averageRatingSelector = createSelector([restaurantReviewListSelector], (reviews) => {
  const sum = reviews.map(review => review.rating).reduce((prev, cur) => prev + cur, 0);
  const average = Math.round(Math.floor(sum / reviews.length));

  return average;
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
export const reviewByIdSelector = (state, { id }) => {
  return reviewsMap(state)[id];
}

// ---------------------------- Users ----------------------------------
export const userByIdSelector = (state, props) => {
  const user = usersMap(state)[props.review.userId];
  return user;
}

