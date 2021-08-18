import { connect } from 'react-redux';
import BasketItem from "./basketItem";

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

  const { order, restaurants } = state;

  const products = restaurants.flatMap((restaurant) => restaurant.menu);

  const orderIds = Object.keys(order);
  const productArray = Object.keys(products).map(key => products[key]);
  const orderedProducts = productArray.filter(product => orderIds.includes(product.id)).map(product => {
    return {
      ...product,
      amount: order[product.id]
    }
  });

  const totalOrderCost = orderedProducts.reduce((acc, {amount, price}) => acc + amount * price, 0);

  return {
    products: orderedProducts,
    totalOrderCost: totalOrderCost
  }
}

export default connect(mapStateToProps)(Basket);