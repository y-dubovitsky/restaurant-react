export default store => next => async action => {
  //! Проверяем, содержит ли action нужный нам флаг
  if (!action.callApi) return next(action);

  const { callApi } = action;

  const response = await fetch(callApi);
  const data = await response.json();

  next({
    data,
    ...action
  })
}