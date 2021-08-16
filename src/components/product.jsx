import Counter from '../hocs/counter';

function product(props) {

  const { amount, increment, decrement } = props;

  return (
    <div>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <p>Amount: {amount}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter(product)

