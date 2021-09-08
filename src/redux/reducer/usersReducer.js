import produce from "immer";
import { ADD_REVIEW } from '../constants/constants';
import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

export default produce((draft = defaultUsers, action) => {

  const { type, userId, review } = action;

  switch (type) {
    case ADD_REVIEW: {
      draft[userId] = {
        id: userId,
        name: review.name
      }
      break;
    }
    default: return draft;
  }
});