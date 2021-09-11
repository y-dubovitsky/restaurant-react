import { useState } from 'react';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  restaurantByIdSelector
} from '../../../redux/selectors';
import Menu from '../../menu';
import Rate from '../../rate';
import Reviews from '../../reviews/reviews';

function Restaurant({ restaurant, averageRating }) {

  const [revToMenuSwitcher, setRevToMenuSwitcher] = useState(true);

  return (
    <div>
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
    restaurant: restaurantByIdSelector(state, props),
    averageRating: averageRatingSelector(state, props)
  }
}

export default connect(mapStateToProps)(Restaurant);
