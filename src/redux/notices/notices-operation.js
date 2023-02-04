import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const fetchNotices = createAsyncThunk(
  'notices/categoryName',
  async ({ categoryName, query = '', page = 1, limit = 8 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/notices/${categoryName}?page=${page}&limit=${limit}&query=${query}`
      );
      console.log(data.notices);
      // console.log(data.favorites);
      console.log(data);
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
      return response.data.notices;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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
