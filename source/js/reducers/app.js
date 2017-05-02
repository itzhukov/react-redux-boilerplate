import * as ActionTypes from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  counter: 0
});

export default function app(previousState = initialState, action = {}) {
 switch (action.type) {
   case ActionTypes.TEST_ACTION:
     const counter = previousState.get('counter') + action.payload;
     return previousState.merge({counter});
     break;

   default:
    return previousState.merge({});
 }
}
