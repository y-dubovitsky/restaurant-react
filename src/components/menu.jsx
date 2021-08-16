import Product from './product';

export default function menu(props) {
  return (
    <div>
      {props.menu.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}