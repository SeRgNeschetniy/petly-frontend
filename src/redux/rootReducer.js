import { combineReducers } from 'redux';
import petsReducer from './notices/notices-slice';
import searchReducer from './search/search-slice';
import { userPetsReducer } from './userpage/userpage-slice';
const rootReducer = combineReducers({
  pets: petsReducer,
  search: searchReducer,
  user: userPetsReducer,
});

export default rootReducer;
