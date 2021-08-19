import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce((acc, review) => ({...acc, [review.id]: review}), {});

export default (state = defaultReviews, action) => {
  switch (action.type) {
    default: return state;
  }
}