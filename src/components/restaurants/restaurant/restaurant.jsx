import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Menu from '../../menu';
import Rate from '../../rate';
import Reviews from '../../reviews/reviews';

import {
  averageRatingSelector,
  restaurantByIdSelector,
  currentRestaurantIdSelector
} from '../../../redux/selectors';

import { loadCurrentRestaurantProducts } from '../../../redux/actions/action';

import style from './restaurant.module.css';

function Restaurant(
  {
    currentRestaurantId,
    loadCurrentRestaurantProducts,
    restaurant,
    averageRating
  }
) {

  useEffect(() => {
    loadCurrentRestaurantProducts(currentRestaurantId);
  }, [currentRestaurantId])

  const [revToMenuSwitcher, setRevToMenuSwitcher] = useState(true);

  return (
    <div className={style.restaurant}>
      <h3>{restaurant.name}</h3>
      <h4>Average Rating: </h4>
      {!!averageRating && <Rate rating={averageRating} />}
      <button onClick={() => setRevToMenuSwitcher(true)}>Menu</button>
      <button onClick={() => setRevToMenuSwitcher(false)}>Reviews</button>
      {revToMenuSwitcher ?
        <Menu menu={restaurant.menu} />
        :
        <Reviews restaurantId={restaurant.id} />
      }
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    currentRestaurantId: currentRestaurantIdSelector(state),
    restaurant: restaurantByIdSelector(state, props),
    averageRating: averageRatingSelector(state, props)
  }
}

export default connect(mapStateToProps, {loadCurrentRestaurantProducts})(Restaurant);
