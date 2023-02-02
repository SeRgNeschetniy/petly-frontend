import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk(
  'auth/signup',
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/users/register',
        registerData
      );
      console.log(data);
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

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/users/login`,
        loginData
      );
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

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get();
      return result;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await axios.get(auth.token);
      return result;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
