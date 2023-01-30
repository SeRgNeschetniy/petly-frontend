import { combineReducers } from 'redux';
import petsReducer from './notices/notices-slice';
import searchReducer from './search/search-slice';

const rootReducer = combineReducers({
  pets: petsReducer,
  search: searchReducer,
});

export default rootReducer;
