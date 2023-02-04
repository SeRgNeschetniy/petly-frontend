import { combineReducers } from 'redux';
import noticesReducer from './notices/notices-slice';
import searchReducer from './search/search-slice';
import { userPetsReducer } from './userpage/userpage-slice';

const rootReducer = combineReducers({
  notices: noticesReducer,
  user: userPetsReducer,
  search: searchReducer,
});

export default rootReducer;
