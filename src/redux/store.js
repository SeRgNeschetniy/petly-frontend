import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import searchReducer from './search/search-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { petsReducer } from './notices/notices-slice';
import authReducer from './auth/auth-slice';
import { userPetsReducer } from './userpage/userpage-slice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: petsReducer,
    search: searchReducer,
    auth: authPersistedReducer,
    user: userPetsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
