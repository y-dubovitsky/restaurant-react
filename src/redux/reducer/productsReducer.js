import { normalizedProducts as defaultProducts } from '../../fixtures';

export default (state = defaultProducts, action) => {
  switch (action.type) {
    default: return state;
  }
}