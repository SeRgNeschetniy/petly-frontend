import { createSlice } from '@reduxjs/toolkit';
import {
  userLogOut,
  removePetCard,
  fetchUserPets
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
    [fetchUserPets.pending] (state)   {
      state.isLoading = true;
    },
    [removePetCard.pending] (state)  {
      state.isLoading = true;
    },
    [userLogOut.fulfilled](state) {
            state.body = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
        },
  },
});

export const userPetsReducer = petsSlice.reducer;