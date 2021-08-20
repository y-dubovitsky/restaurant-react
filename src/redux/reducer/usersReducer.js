import { ADD_REVIEW } from '../constants/constants';
import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

export default (state = defaultUsers, action) => {

  const { type, userId, review } = action;

  switch (type) {
    case ADD_REVIEW: {
      console.log(review);
      return {
        ...state,
        [userId]: {
          id: userId,
          name: review.name
        }
      }
    }
    default: return state;
  }

}