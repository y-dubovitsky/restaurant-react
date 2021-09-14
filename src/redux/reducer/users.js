import produce from "immer";

import {
  ERROR,
  FETCH_USERS,
  LOADED, LOADING, STATUS
} from '../constants/constants';

import {
  addReview,
} from '../features/reviews';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default produce((draft = initState, action) => {

  const {
    type,
    payload,
    meta,
    users,
    error } = action;

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

      Object.assign(draft.entities, entities);

      break;
    }
    case FETCH_USERS + ERROR: {
      return {
        ...draft,
        error
      }
    }
    case addReview.type: {
      const { review } = payload;
      const { userId } = meta;

      Object.assign(draft.entities, { [userId]: { id: userId, name: review.name } })

      break;
    }
    default: return draft;
  }
});