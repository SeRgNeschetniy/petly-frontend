import { createSlice } from '@reduxjs/toolkit';

import {
  userLogOut,
  removePetCard,
  fetchUserPets,
  patchContact,
} from './userpage-operation';

const petsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: {
    [fetchUserPets.pending](store) {
      store.isLoading = true;
      store.error = null;
    },
    [fetchUserPets.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
      store.isLogin = true;
      store.error = null;
    },
    [fetchUserPets.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [patchContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },

    [removePetCard.pending](store) {
      store.isLoading = true;
    },
    [userLogOut.fulfilled](store) {
      store.body = { name: null, email: null, password: null };
      store.token = null;
      store.isLoggedIn = false;
    },
  },
});

export const userPetsReducer = petsSlice.reducer;
// [current.fulfilled]: (store, { payload }) => {
//       store.user = payload;
//       store.loading = false;
//       store.isLogin = true;
//     },
//     [current.rejected]: (store, {payload}) => {
//       store.loading = false;
//       store.error = payload;
//     },
