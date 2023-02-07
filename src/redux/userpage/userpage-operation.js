import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'redux/auth/auth-operation';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

export const jsonInstance = axios.create({
  headers: {"Content-Type": "application/json"},
})

export const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persisterToken = state.user.token;
    if (persisterToken === null) {
      return thunkApi.rejectWithValue();
    }
    try {
      const { data } = await axios.get('/current');

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchUserPets = createAsyncThunk(
  `/mypets`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/mypets`);

      return data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/logout',
  async (_, thunkApi) => {
    try {
      await axios.post('/users/logout');
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removePetCard = createAsyncThunk(
  'mypets/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/mypets/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const patchContact = createAsyncThunk(
  'users/update',
  async (data, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      console.log(token);
      setToken(token);
      const { result } = await axios.patch(`/users/update/`, data);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
