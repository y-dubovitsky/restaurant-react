import { createSelector } from 'reselect';

const order = state => state.order;
const productMap = state => state.products;
const restaurantsMap = state => state.restaurants;
const reviewsMap = state => state.reviews;
const usersMap = state => state.users;

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

export const reviewByIdSelector = (state, { id }) => {
  return reviewsMap(state)[id];
}

export const userByIdSelector = (state, props) => {
  const user = usersMap(state)[props.review.userId];
  return user;
}

export const averageRatingSelector = createSelector([restaurantReviewListSelector], (reviews) => {
  const sum = reviews.map(review => review.rating).reduce((prev, cur) => prev + cur, 0);
  const average = Math.round(Math.floor(sum / reviews.length));

  return average;
});