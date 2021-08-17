import { INCREMENT, DECREMENT } from "./constants";

export default (state = 0, action) => {

  const { type, id } = action;

  switch (type) {
    case INCREMENT: {
      // Нельзя мутировать, нужно полностью новый стейт передавать
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      }
    }
    case DECREMENT: {
      return {
        ...state,
        [id]: state[id] > 0 ? state[id] - 1 : 0
      }
    }
    default: {
      return state
    }
  }
}