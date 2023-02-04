import { combineReducers } from 'redux';
import noticesReducer from './notices/notices-slice';
import { userPetsReducer } from './userpage/userpage-slice';

const rootReducer = combineReducers({
  notices: noticesReducer,
  user: userPetsReducer,
});

export default rootReducer;
