import UseAmount from "../hooks/useAmount"

export default function product(props) {

  const {amount, decrement, increment} = UseAmount(0);

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