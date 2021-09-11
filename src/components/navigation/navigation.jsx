import { connect } from 'react-redux';
import { restaurantListSelector } from '../../redux/selectors';

import style from './navigation.module.css';

function Navigation({ restaurants, onRestaurantClick }) {
  return (
    <>
      <h1>Our Restaurants:</h1>
      <div className={style.navigation}>
        {
          restaurants.map(restaurant => {
            return (
              <div
                key={restaurant.id}
                onClick={() => onRestaurantClick(restaurant.id)}
                className={style.nav}
                style={{ backgroundImage: `url(${restaurant.image})` }}
              >
                <h2>{restaurant.name}</h2>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

const mapStateToProps = state => (
  {
    restaurants: restaurantListSelector(state)
  }
)

export default connect(mapStateToProps)(Navigation);