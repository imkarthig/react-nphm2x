import { createStore } from 'redux';
import CounterReducer from './reducer/CounterReducer';
import EmployeReducer from './reducer/EmployeReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  count: CounterReducer,
  employe: EmployeReducer,
});

export const store = createStore(allReducers);

// export const store = createStore(CounterReducer);
