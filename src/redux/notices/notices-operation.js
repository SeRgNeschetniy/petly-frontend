import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchPets = async categoryName => {
  const response = await axios.get(`${BASE_URL}/notices/${categoryName}`);
  return response.data;
};

export const deletePet = async _id => {
  const response = await axios.get(`${BASE_URL}/notices/${_id}`);
  return response.data;
};

export const addToFavorite = async _id => {
  const response = await axios.post(`${BASE_URL}/notices/${_id}`);
  return response.data;
};

// export const addToFavorite = createAsyncThunk(
//   'notices/addToFavorite',
//   async (id, thunkApi) => {
//     try {
//       const response = await axios.post(`notices/favorites/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchPets = createAsyncThunk(
//   'notices/fetchAll',
//   async (categoryName, thunkApi) => {
//     try {
//       const response = await axios.get(`/notices/${categoryName}`);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

// export const deletePet = createAsyncThunk(
//   'notices/deletePet',
//   async (_id, thunkApi) => {
//     try {
//       const response = await axios.delete(`/notices/${_id}`);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
