import {
  signup,
  login,
  logout,
  current,
  restorePassword,
  patchAvatar,
  refreshToken,
} from './auth-operation';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  loadingAvatar: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addTokenToStore(store, action) {
      store.token = action.payload;
    },
    setError(store, action) {
      store.error = action.payload;
    }
  },
  extraReducers: {
    [signup.pending]: store => {
      // store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      // store.loading = false;
      store.isLogin = true;
    },
    [signup.rejected]: (store, {payload}) => {
      store.error = payload;
      // store.loading = false;
    },
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [login.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [refreshToken.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [refreshToken.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [refreshToken.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store, { payload }) => {
      store.user = {};
      store.token = '';
      store.isLogin = false;
      store.loading = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [current.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.user = payload;
      store.loading = false;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [restorePassword.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [restorePassword.fulfilled]: (store, _) => {
      store.loading = false;
    },
    [restorePassword.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },

    // [addToFavorite.pending]: store => {
    //   store.isLoading = true;
    //   store.error = null;
    // },
    // [addToFavorite.fulfilled]: (store, { payload }) => {
    //   store.loading = false;
    //   store.error = null;
    //   store.user.favorites.push(payload);
    // },
    // [addToFavorite.rejected]: (store, action) => {
    //   store.error = action.payload;
    // },
    [patchAvatar.pending](store) {
      store.loadingAvatar = true;
      store.error = null;
    },
    [patchAvatar.fulfilled]: (store, { payload }) => {
      store.loadingAvatar = false;
      store.error = null;
      store.user = { ...store.user, avatarURL: payload.avatarURL };
    },
    [patchAvatar.rejected]: (store, { error }) => {
      store.loadingAvatar = false;
      store.error = error;
    },
    // [deleteFromFavorites.pending]: store => {
    //   store.isLoading = true;
    //   store.error = null;
    // },
    // [deleteFromFavorites.fulfilled]: (store, { payload }) => {
    //   store.loading = false;
    //   store.error = null;
    //   store.user.favorites = store.user.favorites.filter(
    //     item => item !== payload
    //   );
    // },
    // [deleteFromFavorites.rejected]: (store, action) => {
    //   store.isLoading = false;
    //   store.error = action.payload;
    // },
  },
});

export const { addTokenToStore, setError } = authSlice.actions;
export default authSlice.reducer;
