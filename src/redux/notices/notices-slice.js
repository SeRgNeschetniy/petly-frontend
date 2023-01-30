import { createSlice } from '@reduxjs/toolkit';
import {
  fetchForFreePets,
  fetchSellPets,
  fetchLostFoundPets,
  deletePet,
  addToFavorite,
} from './notices-operation';

const petsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: {
    [fetchSellPets.pending]: handlePending,
    [fetchSellPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchSellPets.rejected]: handleRejected,
    [fetchForFreePets.pending]: handlePending,
    [fetchForFreePets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchForFreePets.rejected]: handleRejected,
    [fetchLostFoundPets.pending]: handlePending,
    [fetchLostFoundPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchLostFoundPets.rejected]: handleRejected,

    [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addToFavorite.rejected]: handleRejected,
    [deletePet.pending]: handlePending,
    [deletePet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const petsReducer = petsSlice.reducer;
