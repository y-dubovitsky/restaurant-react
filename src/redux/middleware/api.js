import { ERROR, LOADED, LOADING } from "../constants/constants";

export default store => next => async action => {
  //! Проверяем, содержит ли action нужный нам флаг
  if (!action.callApi) return next(action);

  const { callApi, type } = action;

  next({ ...action, type: type + LOADING })

  try {
    const response = await fetch(callApi);
    const data = await response.json();
    
    next({ ...action, data, type: type + LOADED })
  } catch (error) {
    next({ ...action, type: type + ERROR, error })
  }
}