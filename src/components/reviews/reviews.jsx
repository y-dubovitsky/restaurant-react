import { connect } from 'react-redux';
import Review from './review/review';

import { loadReviews } from '../../redux/actions/action';
import { useEffect } from 'react';

function Reviews({ reviews, loadReviews, restaurantId }) {

  useEffect((restaurantId) => {
    loadReviews(restaurantId)
  }, [restaurantId])

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

export default connect(null, { loadReviews })(Reviews);
