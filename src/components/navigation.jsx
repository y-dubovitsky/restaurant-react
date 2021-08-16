export default function navigation({restaurants, onRestaurantClick}) {
  return (
    <div>
      {restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantClick(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  )
}