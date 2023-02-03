import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchPets = createAsyncThunk(
  'notices/categoryName',
  async (categoryName, thunkApi) => {
    try {
      const response = await axios.get(`/notices/${categoryName}`);
      console.log(response.data);
      return response.data.notices;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (_id, thunkApi) => {
    try {
      const response = await axios.post(`notices/${_id}/favorites`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'notices/deletePet',
  async (_id, thunkApi) => {
    try {
      const response = await axios.delete(`/notices/${_id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const deletePet = async _id => {
//   const response = await axios.get(`/notices/${_id}`);
//   return response.data;
// };

// export const addToFavorite = async _id => {
//   const response = await axios.post(`/notices/${_id}/favorites`);
//   return response.data;
// };

// export const fetchPets = async categoryName => {
//   const response = await axios.get(`${BASE_URL}/notices/${categoryName}`);
//   return response.data;
// };
