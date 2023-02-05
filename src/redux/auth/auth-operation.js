import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setToken = token => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.common.authorization = ``;
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (registerData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', registerData);
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
      const { data } = await axios.post(`/users/login`, loginData);
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
  async (_, { rejectWithValue, getState }) => {
    try {
      await axios.post('/users/logout');
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
      setToken(auth.token);
      const result = await axios.get(`/users/current/`);
      return result.data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

// export const googleAuth = createAsyncThunk(
//   'auth/google',
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await axios.get('/google');
//       console.log(result);
//       return result;
//     } catch ({ responce }) {
//       const error = {
//         status: responce.status,
//         message: responce.data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// )

export const restorePassword = createAsyncThunk(
  'auth/restore',
  async (userEmail, { rejectWithValue }) => {
    try {
      setToken('');
      const { data } = await axios.patch(`/users/restore`, userEmail);
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

export const addToFavorite = createAsyncThunk(
  'notices/addFavorite',
  async (_id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      setToken(auth.token);
      const result = await axios.post(`/notices/${_id}/favorites`);
      return result.data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const patchAvatar = createAsyncThunk(
    "users/avatar",
    async (newdata, thunkApi) => {   
       try {
         const { data } = await axios.patch(`/users/avatar`, newdata)
         console.log(data)
         return data
         
        } catch (error) {
         return thunkApi.rejectWithValue(error);
        }
    }
);

export const refreshToken = createAsyncThunk(
  'users/refresh',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/users/refresh');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)