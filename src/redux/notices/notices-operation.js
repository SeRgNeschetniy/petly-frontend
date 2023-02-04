import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchNotices = createAsyncThunk(
  'notices/categoryName',
  async (categoryName, thunkApi) => {
    try {
      const { data } = await axios.get(`/notices/${categoryName}`);
      console.log(data.notices);
      console.log(data.favorites);

      return data.notices || data.favorites;
      // console.log(response);
      // return data.favorites;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',

  async (_id, thunkApi) => {
    try {
      const response = await axios.get(`/notices/find/${_id}`);
      return response.data.notices;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addToFavorite = createAsyncThunk(
//   'notices/addFavorite',
//   async (_id, thunkAPI) => {
//     try {
//       const tokenLS = thunkAPI.getState().auth.accessToken;
//       setToken.set(tokenLS);
//       await axios.patch(`/notices/user/${_id}/favorites`);
//       return _id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.request.status);
//     }
//   }
// );

// export const addToFavorite = createAsyncThunk(
//   'notices/addToFavorite',
//   async (_id, thunkApi) => {
//     try {
//       const response = await axios.post(`notices/${_id}/favorites`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (_id, thunkApi) => {
    try {
      const response = await axios.delete(`/notices/${_id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'notices/deleteFromFavorites',
  async (_id, thunkApi) => {
    try {
      const response = await axios.delete(`/notices/${_id}/favorites/`);
      return response.data.notices;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchFavorites = createAsyncThunk(
// //   'notices/fetchFavorites',
// //   async (_, thunkApi) => {
// //     try {
// //       const response = await axios.get(`/notices/favorites`);
// //       return response.data;
// //     } catch (error) {
// //       return thunkApi.rejectWithValue(error.message);
// //     }
// //   }
// // );
