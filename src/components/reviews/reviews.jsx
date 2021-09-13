import { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from './review/review';
import Loader from '../loader/loader';
import ReviewForm from '../reviews/review-form/review-form';

import {
  loadReviews,
  loadUsers
} from '../../redux/actions/action';

import {
  restaurantReviewsListSelector,
  restaurantReviewsLoadedSelector,
  restaurantReviewsLoadingSelector
} from '../../redux/selectors';

import style from './reviews.module.css';

function Reviews(
  {
    reviews,
    loadReviews,
    loadUsers,
    restaurantId,
    reviewsIsLoading,
    reviewsIsLoaded }
) {

  useEffect((restaurantId) => {
    loadReviews(restaurantId);
    loadUsers();
  }, [restaurantId])

  if (reviewsIsLoading || !reviewsIsLoaded) return <Loader />;
  return (
    <div
      className={style.reviews}
      data-test="reviews"
    >
      {
        reviews.map(review => {
          return <Review key={review.id} id={review.id} />
        })
      }
      <ReviewForm restaurantId={restaurantId} />
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

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
