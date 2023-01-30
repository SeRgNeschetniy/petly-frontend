import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearch: (_, { payload }) => payload,
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
