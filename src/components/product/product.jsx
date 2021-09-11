import Loader from '../loader';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import {
  increment,
  decrement,
  loadProducts
} from '../../redux/actions/action';

import {
  productByIdSelector,
  orderProductAmountSelector
} from '../../redux/selectors';

import style from './product.module.css';

function Product(props) {

  const { product, amount, increment, decrement, loadProducts } = props;

  useEffect(() => {
    loadProducts();
  }, [])

  if (!product) return <Loader />;

  return (
    <div data-test="product" className={style.productContainer}>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <p>{product.ingredients.join(", ")}</p>
      <p data-test="product-amount">Amount: {amount || 0}</p>
      <button data-test="product-decrement" onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    amount: orderProductAmountSelector(state, props),
    product: productByIdSelector(state, props.id)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
  loadProducts: () => dispatch(loadProducts(props.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

