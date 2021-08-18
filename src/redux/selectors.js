import { createSelector } from 'reselect';

const restaurantSelector = state => state.restaurants;
const orderSelector = state => state.order;

// Если изменений в restaurantSelector не будет, то пересчитываться ничего не будет
const productsSelector = createSelector([restaurantSelector], (restaurants) => {
  return restaurants.flatMap((restaurant) => restaurant.menu);
});

//TODO Оптимизировать этот метод!
export const orderedProductsSelector = createSelector(
  // Массив значений, от которых зависит, будет ли пересчитываться функция
  [productsSelector, orderSelector],
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
