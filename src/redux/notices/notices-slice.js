import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  addNewNotice,
  // addToFavorite,
} from './notices-operation';

const initialState = {
  notices: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialState,

  extraReducers: {
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.notices = action.payload;
    },
    [fetchNotices.rejected]: handleRejected,
    [fetchNoticeById.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchNoticeById.fulfilled]: (state, { payload }) => {
      state.oneNotice = payload;
      state.isLoading = false;
    },
    [fetchNoticeById.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteNotice.pending]: handlePending,
    [deleteNotice.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notices = state.notices.filter(({ _id }) => _id !== payload._id);
    },
    [deleteNotice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addNewNotice.pending]: handlePending,
    [addNewNotice.fulfilled](state, { payload }) {
      state.isLoading = false;
    },
    [addNewNotice.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default noticesSlice.reducer;
