import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from 'redux/auth/auth-operation';

// axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchNotices = createAsyncThunk(
  'notices/categoryName',
  async ({ categoryName, query = '', page = 1, limit = 8 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/notices/${categoryName}?page=${page}&limit=${limit}&query=${query}`
      );
      // console.log(data.notices);
      // console.log(data.favorites);
      console.log('DATA', data);
      return data.notices || data.favorites;
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
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addNewNotice = createAsyncThunk(
  'notices/addNewNotice',
  async (newData, thunkApi) => {
    try {
      const result = await axios.post('/notices', newData);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (_id, thunkApi) => {
    try {
      const data = await axios.delete(`/notices/${_id}`);
      // console.log(data);
      if (data.status === 200) {
        return _id;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const deleteFromFavorites = createAsyncThunk(
//   'notices/deleteFromFavorites',
//   async (_id, thunkApi) => {
//     try {
//       const response = await axios.delete(`/notices/${_id}/favorites/`);
//       return response.data.notices;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteFromFavorites = createAsyncThunk(
  'notices/deleteFromFavorites',
  async (_id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      setToken(auth.token);
      const data = await axios.delete(`/notices/${_id}/favorites/`);
      if (data.status === 200) {
        return _id;
      }
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addFavorite',
  async (_id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      setToken(auth.token);

      const { data } = await axios.post(`/notices/${_id}/favorites`);

      return data.notices;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchFavoritesNotices = createAsyncThunk(
  'notices/fetchFavoritesNotices',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`/notices/favorites`);
      //const favorites = data.favorites.map(item => item._id.toString());
      //console.log(data.favorites);

      return data.favorites;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
