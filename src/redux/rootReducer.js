import { combineReducers } from 'redux';
import petsReducer from './notices/notices-slice';
import filterReducer from './search/search-slice';

const rootReducer = combineReducers({
  pets: petsReducer,
  filter: filterReducer,
});

export default rootReducer;
