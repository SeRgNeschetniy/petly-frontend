import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

export const fetchSellPets = createAsyncThunk(
  '/notices/fetchSellPets',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/sell');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLostFoundPets = createAsyncThunk(
  '/notices/fetchLostFoundPets',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/lost-found');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchForFreePets = createAsyncThunk(
  '/notices/fetchForFreePets',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/for-free');
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
      const response = await axios.delete(`/notices/${id}`);
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
