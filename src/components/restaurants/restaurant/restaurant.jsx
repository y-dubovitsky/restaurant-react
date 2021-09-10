import { connect } from 'react-redux';
import {
  averageRatingSelector,
  restaurantByIdSelector
} from '../../../redux/selectors';
import Menu from '../../menu';
import Rate from '../../rate';
import ReviewForm from '../../reviews/review-form/review-form';
import Reviews from '../../reviews/reviews';


function Restaurant({ restaurant, averageRating }) {

  return (
    <div key={restaurant.id}>
      <h3>{restaurant.name}</h3>
      <h4>Average Rating: </h4>
      {!!averageRating && <Rate rating={averageRating} />}
      <Menu menu={restaurant.menu} />
      <Reviews restaurantId={restaurant.id} />
      <ReviewForm restaurantId={restaurant.id} />
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
