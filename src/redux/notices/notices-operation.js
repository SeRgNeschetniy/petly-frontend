import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchSellPets = async () => {
  const response = await axios.get(
    `https://petly-backend-vopf.onrender.com/api/notice/category/sell`
  );
  console.log(response.data);
  return response.data;
};

// export const fetchSellPets = createAsyncThunk(
//   '/notice/fetchSellPets',
//   async (_, thunkApi) => {
//     try {
//       const response = await axios.get('/notice/category/sell');
//       console.log(response);

//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchLostFoundPets = createAsyncThunk(
  '/notice/fetchLostFoundPets',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/notice/lost-found');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchForFreePets = createAsyncThunk(
  '/notice/fetchForFreePets',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/notice/for-free');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'notices/deletePet',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/notice/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (id, thunkApi) => {
    try {
      const response = await axios.post(`notices/favorites/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
