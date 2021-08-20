import { connect } from 'react-redux';
import Menu from '../../menu';
import Reviews from '../../reviews/reviews';
import Rate from '../../rate';
import ReviewForm from '../../reviews/review-form/review-form';
import {
  restaurantByIdSelector,
  restaurantReviewListSelector,
  averageRatingSelector
} from '../../../redux/selectors';

import style from './restaurant.module.css';

function Restaurant({ id, restaurant, reviews, rating }) {

  return (
    <div key={restaurant.id}>
      <h3>{restaurant.name}</h3>
      <h4>Average Rating: </h4>
      <Rate rating={rating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={reviews} />
      <ReviewForm restaurantId={id}/>
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
