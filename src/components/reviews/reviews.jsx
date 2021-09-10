import { connect } from 'react-redux';
import Review from './review/review';
import Loader from '../loader/loader';

import { loadReviews } from '../../redux/actions/action';
import {
  restaurantReviewsListSelector,
  restaurantReviewsLoadedSelector,
  restaurantReviewsLoadingSelector
} from '../../redux/selectors';
import { useEffect } from 'react';

function Reviews({ reviews, loadReviews, restaurantId, reviewsIsLoading, reviewsIsLoaded }) {

  useEffect((restaurantId) => {
    loadReviews(restaurantId)
  }, [restaurantId])

  if (reviewsIsLoading || !reviewsIsLoaded) return <Loader />;

  return (
    <div data-test="reviews">
      {
        reviews.map(review => {
          return <Review key={review.id} review={review} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    reviews: restaurantReviewsListSelector(state, { id: props.restaurantId }),
    reviewsIsLoading: restaurantReviewsLoadingSelector(state),
    reviewsIsLoaded: restaurantReviewsLoadedSelector(state),
  }
)

export default connect(mapStateToProps, { loadReviews })(Reviews);
