import { useContext } from 'react';
import { connect } from 'react-redux';
import { MoneyContext } from '../../../context/money-context';
import { increment, decrement, remove } from '../../../redux/features/order';

import style from './basketItem.module.css';

function BasketItem({ product, increment, decrement, remove }) {

  const { name, amount, price } = product;
  const { recalculatePrice } = useContext(MoneyContext);

  if (amount === 0) return null; //TODO Так нормально?

  return (
    <div className={style.basketItem}>
      <div className={style.info}>
        <h3>{name}</h3>
      </div>
      <div className={style.baksetOrder}>
        <button onClick={increment}>+</button>
        <p>{amount}</p>
        <button onClick={decrement}>-</button>
        <button onClick={remove}>x</button>
        {/*TODO Можно добавить цену на конкретный товар */}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
})

export default connect(null, mapDispatchToProps)(BasketItem);