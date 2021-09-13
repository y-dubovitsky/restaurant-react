import { createSelector } from 'reselect';
import {
  createAction,
  createReducer
} from '@reduxjs/toolkit';

import { productMap } from '../selectors';

// ----------------------------------- Actions -----------------------------------

export const increment = createAction('order/increment');
export const decrement = createAction('order/decrement');
export const remove = createAction('order/remove');

// ----------------------------------- Reducer -----------------------------------

const reducer = createReducer({}, {
  [increment]: (state, { payload: id }) => {
    return {
      ...state,
      [id]: (state[id] || 0) + 1
    }
  },
  [decrement]: (state, { payload: id }) => {
    return {
      ...state,
      [id]: state[id] > 0 ? state[id] - 1 : 0
    }
  },
  [remove]: (state, { payload: id }) => {
    return {
      ...state,
      [id]: 0
    }
  },
});

export default reducer;

// ----------------------------------- Selectors -----------------------------------
const order = state => state.order;

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

export const orderProductAmountSelector = (state, props) => {
  return order(state)[props.id];
}
