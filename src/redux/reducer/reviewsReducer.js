import {normalizedReviews as defaultReviews} from '../../fixtures';

export default (state = defaultReviews, action) => {
  switch(action.type) {
    default: return state;
  }
}