import { connect } from 'react-redux';
import {restaurantListSelector} from '../../redux/selectors';

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
    restaurants: restaurantListSelector(state)
  }
)

export default connect(mapStateToProps)(Navigation);