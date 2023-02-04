import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  addNewNotice
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
    // [addToFavorite.pending]: handlePending,
    // [addToFavorite.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.notices = [payload.user.favorites, ...state.favorites];
    //   console.log(state.notices);
    // },
    // [addToFavorite.rejected]: handleRejected,
    [deleteNotice.pending]: handlePending,
    [deleteNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.notices = state.notices.filter(
        notice => notice.id !== action.payload.id
      );
    },
    [addNewNotice.pending]: handlePending,
    [addNewNotice.fulfilled] (state, {payload}) {
      state.isLoading = false;
    },
    [addNewNotice.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    }
  },
});

export default noticesSlice.reducer;
