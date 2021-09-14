import produce from 'immer';
import requests from '../requests/requests';
import { userByIdSelector } from '../selectors';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import {
  STATUS
} from '../constants/constants';

export const ADD_REVIEW = 'ADD_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';

// ------------------------------- Actions -------------------------------

export const addReview = createAction(
  'reviews/add', // Название action-a
  (review, props) => ( // Функция
    {
      type: ADD_REVIEW,
      payload: { // Данные
        review,
        restaurantId: props.restaurantId,
      },
      meta: { // Служебные данные
        generateId: ['reviewId', 'userId']
      }
    }
  )
);

export const loadReviews = createAsyncThunk(
  'reviews/load',
  (restaurantId) => {
    return requests.loadReviews(restaurantId);
  }
);

// ------------------------------- Reducer -------------------------------

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {

  const {
    type,
    payload,
    meta,
    userId,
    error } = action;

  switch (type) {
    case loadReviews.pending.type: {
      return {
        ...state,
        status: STATUS.loading,
        error: null
      }
    }
    case loadReviews.fulfilled.type: {
      //TODO Вынести в отдельную функцию
      const result = produce(state, draft => {
        const entities = payload.reduce((acc, review) => (
          {
            ...acc,
            [review.id]: review
          }
        ), {});

        Object.assign(draft.entities, entities);
      })

      return {
        ...result,
        status: STATUS.loaded,
      }
    }
    case loadReviews.rejected.type: {
      return {
        ...state,
        status: STATUS.error,
        error
      }
    }
    case addReview.type: {

      const { review } = payload;
      const { reviewId } = meta;

      const updatedReviews = {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: {
            id: reviewId,
            userId,
            text: review.text,
            rating: review.rating
          }
        }
      }

      return updatedReviews;
    }
    default: return state
  }
}

// ------------------------------- Selectors -------------------------------
export const reviewsMap = state => state.reviews.entities;

export const reviewByIdSelector = (state, props) => {
  return reviewsMap(state)[props.id];
}

export const reviewByIdWithUserSelector = (state, props) => {
  const review = reviewsMap(state)[props.id];
  const user = userByIdSelector(state, { id: review.userId });

  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    user: {
      ...user
    }
  }
}