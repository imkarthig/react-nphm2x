import { INCREAMENT, DECREAMENT, COUNTER_RESET } from '../Action/CounterAction';
const initialState = {
  count: 0,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        count: state.count + 1,
      };
    case DECREAMENT:
      return {
        count: state.count - 1,
      };
    case COUNTER_RESET:
      return {
        count: (state.count = 0),
      };
    default:
      return state;
  }
};
export default CounterReducer;
