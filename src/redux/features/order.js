import { createSelector } from '@reduxjs/toolkit';
import {
  createSlice
} from '@reduxjs/toolkit';

import { productMap } from '../selectors';

// ----------------------------------- Slice (reducer + actions) -----------------------------------
const { reducer, actions } = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    increment: (state, { payload: id }) => {
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      }
    },
    decrement: (state, { payload: id }) => {
      return {
        ...state,
        [id]: state[id] > 0 ? state[id] - 1 : 0
      }
    },
    remove: (state, { payload: id }) => {
      return {
        ...state,
        [id]: 0
      }
    },
  }
});

const { increment, decrement, remove } = actions;

export default reducer;
export { increment, decrement, remove };

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
