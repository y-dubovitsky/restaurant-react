import { normalizedProducts } from '../../fixtures';

const defaultProducts = normalizedProducts.reduce((acc, product) =>
  ({ ...acc, [product.id]: product }), {}
);

export default (state = defaultProducts, action) => {
  switch (action.type) {
    default: return state;
  }
}