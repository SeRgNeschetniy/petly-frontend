import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

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
