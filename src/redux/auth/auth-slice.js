import {
  signup,
  login,
  logout,
  current,
  restorePassword,
  addToFavorite,
} from './auth-operation';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
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
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store, { payload }) => {
      store.user = {};
      store.token = '';
      store.loading = false;
      store.isLogin = false;
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

    [addToFavorite.pending]: store => {
      store.error = null;
    },
    [addToFavorite.fulfilled]: (store, action) => {
      store.user.favorites.push(action.payload);
    },
    [addToFavorite.rejected]: (store, action) => {
      store.error = action.payload;
    },
  },
});

export default authSlice.reducer;
