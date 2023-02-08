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
  noticesFavorites: [],
  noticesUser: [],
  isLoading: false,
  error: null,
  oneNotice: [],
  query: '',
  page: '',
  total: '',
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
    [fetchNotices.fulfilled](state, { payload }) {
      state.notices = payload.notices;
      state.query = payload.query;
      state.page = payload.page;
      state.total = payload.total;
      state.isLoading = false;
      state.error = null;
    },
    [fetchNotices.rejected]: handleRejected,

    //[fetchFavoritesNotices.pending]: handlePending,
    [fetchFavoritesNotices.fulfilled](state, action) {
      state.noticesFavorites = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchFavoritesNotices.rejected]: handleRejected,

    [fetchUserNotices.fulfilled](state, action) {
      state.noticesUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUserNotices.rejected]: handleRejected,

    [fetchNoticeById.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.oneNotice = [];
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
      state.noticesUser = state.noticesUser.filter(
        notice => notice._id !== payload
      );
      state.isLoading = false;
      state.error = null;
    },
    [deleteNotice.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addNewNotice.pending]: handlePending,
    [addNewNotice.fulfilled](state, { payload }) {
      state.notices.push(payload);
      state.noticesUser.push(payload);
      state.isLoading = false;
    },
    [addNewNotice.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },

    // [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled]: (state, { payload }) => {
      state.noticesFavorites.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addToFavorite.rejected]: handleRejected,

    // [deleteFromFavorites.pending]: handlePending,
    [deleteFromFavorites.fulfilled]: (state, { payload }) => {
      state.noticesFavorites = state.noticesFavorites.filter(
        item => item._id !== payload
      );
      state.isLoading = false;
      state.error = null;
    },
    [deleteFromFavorites.rejected]: handleRejected,
  },
});

export default noticesSlice.reducer;
