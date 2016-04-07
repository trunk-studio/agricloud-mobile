import {
  RECEIVED_TODAY,
} from '../actions/DateActions';

export function getToday(state = {}, action) {
  switch (action.type) {
    case RECEIVED_TODAY:
      return {
        ...state,
        month: action.month,
        date: action.date,
      };
    default:
      return state;
  }
}
