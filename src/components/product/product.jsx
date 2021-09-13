import Loader from '../loader';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import {
  increment,
  decrement,
} from '../../redux/actions/action';

import {
  productByIdSelector,
  orderProductAmountSelector,
  productLoadingSelector,
  productLoadedSelector
} from '../../redux/selectors';

import style from './product.module.css';

function Product(props) {

  const { product, amount, increment, decrement, loading, loaded } = props;

  if (loading || !loaded) return <Loader />;

  return (
    <div
      className={style.product}
      data-test="product"
    >
      <div className={style.description}>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.ingredients.join(", ")}</p>
      </div>
      <div className={style.order}>
        <p data-test="product-amount">Amount: {amount || 0}</p>
        <button data-test="product-decrement" onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    loading: productLoadingSelector(state),
    loaded: productLoadedSelector(state),
    amount: orderProductAmountSelector(state, props),
    product: productByIdSelector(state, props.id)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

