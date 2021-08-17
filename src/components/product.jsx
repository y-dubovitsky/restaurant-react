import Counter from '../hocs/counter';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Product(props) {

  const { product, amount, increment, decrement, fetchData } = props;

  useEffect(() => {
    fetchData && fetchData(product.id);
  }, [])

  return (
    <div data-test="product">
      <p>{product.name}</p>
      <p>${product.price}</p>
      <hr />
      <p>{product.ingredients.join(", ")}</p>
      <p data-test="product-amount">Amount: {amount}</p>
      <button data-test="product-decrement" onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter(Product);

