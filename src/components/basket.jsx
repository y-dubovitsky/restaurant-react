import { connect } from 'react-redux';
import BasketItem from "./basketItem";
import {orderedProductsSelector, totalOrderPriceSelector} from '../redux/selectors';

function Basket({ products, totalOrderCost }) {

  return (
    <div style={{ border: '1px solid black' }}>
      <h1>Basket:</h1>
      {
        products.map(product => {
          return <BasketItem key={product.id} product={product} />
        })
      }
      <h3>Total Cost: {totalOrderCost}</h3>
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