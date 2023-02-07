import { createSlice } from '@reduxjs/toolkit';

import {
  userLogOut,
  removePetCard,
  fetchUserPets,
  patchContact,
  fetchPets
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
    },
    [fetchUserPets.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [patchContact.pending](store) {
      store.isLoading = true;
      store.error = null;
    },
    [patchContact.fulfilled](store, { payload }) {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [patchContact.rejected](store, error) {
      store.error = error;
    },
    [removePetCard.pending](store) {
      store.isLoading = true;
    },
    [removePetCard.fulfilled](store, {payload}) {
      store.isLoading = true;
      store.items = store.items.filter(item => item._id !== payload);
    },
    [removePetCard.rejected](store, error) {
      store.error = error;
    },
    [userLogOut.fulfilled](store) {
      store.body = { name: null, email: null, password: null };
      store.token = null;
      store.isLoggedIn = false;
    },
          [fetchPets.pending](state) {
            state.isLoading = true;
          },

          [fetchPets.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
          },
          
          [fetchPets.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
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
