import { INCREMENT, DECREMENT, REMOVE } from "../constants/constants";

export default (state = {}, action) => {

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
    case REMOVE: {
      // const filtered = Object.entries(state).reduce((acc, [ k, v ]) => k !== id ? { ...acc, [k]: v } : acc, {})

      return {
        ...state,
        [id]: 0
      }
    }
    default: {
      return state
    }
  }
}