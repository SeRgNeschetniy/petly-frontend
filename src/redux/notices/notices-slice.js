import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  addNewNotice,
  addToFavorite,
  deleteFromFavorites,
  fetchFavoritesNotices,
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

    [fetchFavoritesNotices.pending]: handlePending,
    [fetchFavoritesNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorites = action.payload;
    },
    [fetchFavoritesNotices.rejected]: handleRejected,

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
      state.notices = state.notices.filter(notice => notice._id !== payload);
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

    [addToFavorite.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addToFavorite.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.favorites.push(payload);
    },
    [addToFavorite.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [deleteFromFavorites.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteFromFavorites.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.favorites = state.favorites.filter(item => item !== payload);
      //state.notices = state.notices.filter(item => item._id !== payload);
    },
    [deleteFromFavorites.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default noticesSlice.reducer;
