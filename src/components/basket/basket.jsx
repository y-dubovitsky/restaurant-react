import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoneyContext } from '../../context/money-context';
import { STATUS } from '../../redux/constants/constants';
import {
  makeOrder,
  orderedProductsSelector,
  orderList,
  clearOrder,
  totalOrderPriceSelector,
  orderResponseStatus
} from '../../redux/features/order';
import style from './basket.module.css';
import BasketItem from "./basketItem";
import { Switch, Redirect } from 'react-router-dom';

function Basket({ products, totalOrderCost, makeOrder, orderList, status, clearOrder }) {

  const [isDisabled, setIsDisabled] = useState(false);
  const { recalculatePrice } = useContext(MoneyContext);

  useEffect(() => {
    switch (status) {
      case STATUS.loading: {
        setIsDisabled(true);
        break;
      }
      case STATUS.loaded: {
        setIsDisabled(false);
        break;
      }
    }
  }, [status]);

  return (
    <div className={style.basket}>
      <i><FontAwesomeIcon icon={faShoppingBasket} />Your Order: </i>
      {
        products.map(product => {
          return <BasketItem key={product.id} product={product} />
        })
      }
      <h3>Total Cost: {recalculatePrice(totalOrderCost)}</h3>
      <Link to="/checkout">
        <button disabled={isDisabled ? 'disabled' : ''} onClick={() => makeOrder(orderList)}>Checkout</button>
      </Link>
      {
        isDisabled ?
          <Switch>
            <Redirect to={`/restaurants`} />
          </Switch>
          :
          ''
      }
    </div>
  )
}

// Важно, передается state и props самого объекта Product!
const mapStateToProps = (state) => {

  return {
    orderList: orderList(state),
    products: orderedProductsSelector(state),
    totalOrderCost: totalOrderPriceSelector(state),
    status: orderResponseStatus(state),
  }
}

export default connect(mapStateToProps, { makeOrder, clearOrder })(Basket);