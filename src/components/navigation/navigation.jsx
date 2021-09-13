import { connect } from 'react-redux';
import { restaurantListSelector } from '../../redux/selectors';

import style from './navigation.module.css';

function Navigation({ restaurants, onRestaurantClick }) {
  return (
    <div className={style.navContainer}>
      <h1>Our Restaurants:</h1>
      <div className={style.navigation}>
        {
          restaurants.map(restaurant => {
            return (
              <div
                className={style.nav}
                key={restaurant.id}
                onClick={() => onRestaurantClick(restaurant.id)}
                style={{ backgroundImage: `url(${restaurant.image})` }}
              >
                <h2>{restaurant.name}</h2>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => (
  {
    restaurants: restaurantListSelector(state)
  }
)

export default connect(mapStateToProps)(Navigation);