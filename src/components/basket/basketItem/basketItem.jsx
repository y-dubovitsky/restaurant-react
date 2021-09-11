import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../../redux/actions/action';

function BasketItem({ product, increment, decrement, remove }) {

  const { name, amount, price } = product;

  if (amount === 0) return null; //TODO Так нормально?

  return (
    <div>
      <p>{name}</p>
      <h3>Amount: {amount}</h3>
      <h3>Total: {price * amount} $</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={remove}>x</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
})

export default connect(null, mapDispatchToProps)(BasketItem);