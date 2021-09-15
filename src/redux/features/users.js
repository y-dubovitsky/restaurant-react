import { produce } from 'immer';
import { createAsyncThunk } from "@reduxjs/toolkit";

import requests from "../requests/requests";

import {
  STATUS
} from '../constants/constants';

import {
  addReview,
} from '../features/reviews';


// --------------------------- Action ---------------------------

export const loadUsers = createAsyncThunk(
  'users/load',
  () => {
    return requests.loadUsers()
  }
);

// --------------------------- Reducer ---------------------------

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default ((state = initState, action) => {

  const {
    type,
    payload, // Данные, которые пришли
    meta,
    error } = action;

  switch (type) {
    case loadUsers.pending.type: {
      return {
        ...state,
        error: null,
        status: STATUS.loading
      }
    }
    case loadUsers.fulfilled.type: {
      const result = produce(state, draft => {
        const entities = payload.reduce((acc, user) => (
          {
            ...acc,
            [user.id]: user
          }
        ), {});

        Object.assign(draft.entities, entities);
        draft.status = STATUS.loaded;
      });

      return result;
    }
    case loadUsers.rejected.type: {
      return {
        ...state,
        error
      }
    }
    case addReview.type: {
      const { review } = payload;
      const { userId } = meta;

      return produce(state, draft => {
        Object.assign(draft.entities, { [userId]: { id: userId, name: review.name } })
      })
    }
    default: return state;
  }
});

// --------------------------- Selectors ---------------------------
const usersMap = state => state.users.entities;

export const userByIdSelector = (state, { id }) => {
  const user = usersMap(state)[id];

  return user;
}