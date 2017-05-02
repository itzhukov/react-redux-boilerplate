import * as ActionTypes from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  counter: 0,
  isFetching: false
});

export default function app(previousState = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.TEST_ACTION:
      const counter = previousState.get('counter') + action.payload;
      return previousState.merge({
               counter
             });
      break;

    case ActionTypes.FETCHING_PROGRESS:
      return previousState.merge({
               isFetching: true
             });
      break;

    case ActionTypes.FETCHING_SUCCESS:
      return previousState.merge({
               isFetching: false
             });
      break;

    default:
      return previousState.merge({});
  }
}
