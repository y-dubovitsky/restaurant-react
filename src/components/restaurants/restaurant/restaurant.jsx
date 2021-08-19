import { connect } from 'react-redux';
import Menu from '../../menu';
import Reviews from '../../reviews/reviews';
import Rate from '../../rate';
import {
  restaurantByIdSelector,
  restaurantReviewListSelector,
  averageRatingSelector
} from '../../../redux/selectors';

function Restaurant({ id, restaurant, reviews, rating }) {

  return (
    <div key={restaurant.id}>
      <h3>{restaurant.name}</h3>
      <h4>Average Rating: </h4>
      <Rate rating={rating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={reviews} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    restaurant: restaurantByIdSelector(state, props),
    reviews: restaurantReviewListSelector(state, props),
    rating: averageRatingSelector(state, props)
  }
}

export default connect(mapStateToProps)(Restaurant);
