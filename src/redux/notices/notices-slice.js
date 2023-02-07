import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  addNewNotice,
  addToFavorite,
  deleteFromFavorites,
  fetchFavoritesNotices,
  fetchUserNotices,
} from './notices-operation';

const initialState = {
  notices: [],
  favorites: [],
  isLoading: false,
  error: null,
  oneNotice: [],
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

    //[fetchFavoritesNotices.pending]: handlePending,
    [fetchFavoritesNotices.fulfilled](state, action) {
      state.favorites = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchFavoritesNotices.rejected]: handleRejected,

    [fetchUserNotices.fulfilled](state, action) {
      state.notices = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUserNotices.rejected]: handleRejected,

    [fetchNoticeById.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchNoticeById.fulfilled]: (state, { payload }) => {
      state.oneNotice = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchNoticeById.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteNotice.pending]: handlePending,
    [deleteNotice.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(notice => notice._id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteNotice.rejected]: (state, { payload }) => {
      state.isLoading = false;
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

    // [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled]: (state, { payload }) => {
      state.favorites.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addToFavorite.rejected]: handleRejected,

    // [deleteFromFavorites.pending]: handlePending,
    [deleteFromFavorites.fulfilled]: (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item._id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteFromFavorites.rejected]: handleRejected,
  },
});

export default noticesSlice.reducer;
