import produce from "immer";
import {
  ADD_REVIEW,
  ERROR,
  FETCH_USERS,
  LOADED, LOADING, STATUS
} from '../constants/constants';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default produce((draft = initState, action) => {

  const { type, userId, review, users, error } = action;

  switch (type) {
    case FETCH_USERS + LOADING: {
      return {
        ...draft,
        error: null,
        status: STATUS.loading
      }
    }
    case FETCH_USERS + LOADED: {
      const entities = users.reduce((acc, user) => (
        {
          ...acc,
          [user.id]: user
        }
      ), {});

      return {
        ...draft,
        entities
      }
    }
    case FETCH_USERS + ERROR: {
      return {
        ...draft,
        error
      }
    }
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