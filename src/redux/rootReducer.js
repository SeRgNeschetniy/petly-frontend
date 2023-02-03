import { combineReducers } from 'redux';
import petsReducer from './notices/notices-slice';
import filterReducer from './search/search-slice';
import { userPetsReducer } from './userpage/userpage-slice';

const rootReducer = combineReducers({
  pets: petsReducer,
  user: userPetsReducer,
  filter: filterReducer,
});

export default rootReducer;
