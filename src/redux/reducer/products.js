import { ERROR, FETCH_PRODUCTS, LOADED, LOADING, STATUS } from '../constants/constants';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {

  const { type, data, error } = action;

  switch (type) {
    case FETCH_PRODUCTS + LOADING: {
      return {
        ...state,
        error: null,
        status: STATUS.loading
      }
    }
    case FETCH_PRODUCTS + LOADED: {
      const entities = data.reduce((acc, prod) => (
        {
          ...acc,
          [prod.id]: prod
        }
      ), {})

      return {
        ...state,
        status: STATUS.loaded,
        entities
      }
    }
    case FETCH_PRODUCTS + ERROR: {
      return {
        ...state,
        status: STATUS.error,
        error: error
      }
    }
    default: return state;
  }
}