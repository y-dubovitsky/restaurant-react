import { connect } from 'react-redux';

function Navigation({ restaurants, onRestaurantClick }) {
  return (
    <div>
      {
        restaurants.map(restaurant => (
          <button
            key={restaurant.id}
            onClick={() => onRestaurantClick(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => (
  {
    //TODO Улучшить это
    restaurants: Object.values(state.restaurants)
  }
)

export default connect(mapStateToProps)(Navigation);