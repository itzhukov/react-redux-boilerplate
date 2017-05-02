import * as ActionTypes from '../constants/ActionTypes';

export const testAction = (payload) => ({ type: ActionTypes.TEST_ACTION, payload })
export const fetchingProgress = () => ({ type: ActionTypes.FETCHING_PROGRESS})
export const fetchingSuccess = () => ({ type: ActionTypes.FETCHING_SUCCESS})
export const fetchingError = () => ({ type: ActionTypes.FETCHING_ERROR})
export const fetchingStart = (payload) => {
  return (dispatch) => {
    dispatch(fetchingProgress())
    setTimeout(() => {
      dispatch(fetchingSuccess())
    }, 1000)
  }
}
