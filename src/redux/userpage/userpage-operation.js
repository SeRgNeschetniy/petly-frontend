import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

// const token = {
//     set(token) {
//         axios.defaults.headers.common['Authorization'] = `${token}`
//     },
//     unset() {
//         axios.defaults.headers.common['Authorization'] = '';
//     },
// };

export const fetchUserPets = createAsyncThunk(
    `/mypets`,
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axios.get(`https://petly-backend-vopf.onrender.com/api/mypets`);
            return data;
        
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const userLogOut = createAsyncThunk(
    'user/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            token.unset()
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const removePetCard = createAsyncThunk(
    "mypets/delete",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/mypets/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);