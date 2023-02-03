import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addToFavorite } from './notices-operation';

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
    [fetchPets.pending]: handlePending,
    [fetchPets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPets.rejected]: handleRejected,
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
      state.items = state.items.filter(pet => pet.id !== action.payload.id);
    },
  },
});

export default petsSlice.reducer;
