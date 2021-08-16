export default function navigation(props) {
  return (
    <div>
      {props.restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  )
}