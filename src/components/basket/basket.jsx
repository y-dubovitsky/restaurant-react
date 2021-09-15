import { connect } from 'react-redux';
import BasketItem from "./basketItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { orderedProductsSelector, totalOrderPriceSelector } from '../../redux/features/order';

import { useContext } from 'react';
import { MoneyContext } from '../../context/money-context';

import style from './basket.module.css';

function Basket({ products, totalOrderCost }) {

  const { recalculatePrice } = useContext(MoneyContext);

  return (
    <div className={style.basket}>
      <i><FontAwesomeIcon icon={faShoppingBasket} /></i>
      {
        products.map(product => {
          return <BasketItem key={product.id} product={product} />
        })
      }
      <h3>Total Cost: {recalculatePrice(totalOrderCost)}</h3>
    </div>
  )
}

// Важно, передается state и props самого объекта Product!
const mapStateToProps = (state) => {

  return {
    products: orderedProductsSelector(state),
    totalOrderCost: totalOrderPriceSelector(state)
  }
}

export default connect(mapStateToProps)(Basket);