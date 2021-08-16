export default function product(props) {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
    </div>
  )
}