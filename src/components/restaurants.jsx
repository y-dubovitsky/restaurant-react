import Menu from './menu';

export default function Restaurants(props) {
  return (
    <div>
      <Menu menu={props.restaurants[0].menu} />
    </div>
  )
}