import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoneyContext } from '../../context/money-context';
import { makeOrder, orderedProductsSelector, orderList, totalOrderPriceSelector } from '../../redux/features/order';
import style from './basket.module.css';
import BasketItem from "./basketItem";

function Basket({ products, totalOrderCost, makeOrder, orderList }) {

  const { recalculatePrice } = useContext(MoneyContext);

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
        <button onClick={() => makeOrder(orderList)}>Checkout</button>
      </Link>
    </div>
  )
}

// Важно, передается state и props самого объекта Product!
const mapStateToProps = (state) => {

  return {
    orderList: orderList(state),
    products: orderedProductsSelector(state),
    totalOrderCost: totalOrderPriceSelector(state)
  }
}

export default connect(mapStateToProps, { makeOrder })(Basket);