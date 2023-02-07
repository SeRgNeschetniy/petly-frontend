import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

export const fetchPets = createAsyncThunk('pet', async (petsData, thunkApi) => {
  try {
    const { data } = await axios.post('/mypets', petsData);
    return data;
  } catch ({ responce }) {
    const error = {
      status: responce.status,
      message: responce.data.message,
    };
    return thunkApi.rejectWithValue(error);
  }
});

// catch ({ responce }) { // user
//     const error = {
//       status: responce.status,
//       message: responce.data.message,
//     };
//     return thunkApi.rejectWithValue(error);
//   }
