import { connect } from 'react-redux';
import { restaurantListSelector } from '../../redux/selectors';

import style from './navigation.module.css';

function Navigation({ restaurants, onRestaurantClick }) {
  return (
    <div className={style.navigation}>
      {
        restaurants.map(restaurant => {
          console.log(restaurant.image);
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
  )
}

const mapStateToProps = state => (
  {
    restaurants: restaurantListSelector(state)
  }
)

export default connect(mapStateToProps)(Navigation);