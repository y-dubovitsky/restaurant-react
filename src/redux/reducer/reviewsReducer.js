import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants/constants';

const defaultReviews = normalizedReviews.reduce((acc, review) => ({ ...acc, [review.id]: review }), {});

export default (state = defaultReviews, action) => {

  const { type, reviewId, review, userId } = action;

  switch (type) {
    case ADD_REVIEW: {
      return {
        ...state,
        [reviewId]: {
          id: reviewId,
          userId,
          text: review.text,
          rating: review.rating
        }
      }
    }
    default: return state
  }
}