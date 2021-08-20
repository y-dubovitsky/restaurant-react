import { v4 as uuid } from 'uuid';

export default (store) => (next) => (action) => {
  if (!action.generateId) return next(action);

  const { generateId, ...props } = action;

  const ids = generateId.reduce((acc,value) => {
    return {
      ...acc,
      [value]: uuid()
    }
  }, {});

  next({
    ...props,
    ...ids
  })
}