import { createSlice } from '@reduxjs/toolkit';
import {
  userLogOut,
  removePetCard,
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
    
  },
});

export const petsReducer = petsSlice.reducer;