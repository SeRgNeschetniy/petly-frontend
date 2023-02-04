import { selectSearch } from 'redux/search/search-selectors';

export const selectNotices = state => state.notices.notices;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;

export const selectNoticeById = state => state.notices.noticeById;

export const selectFilteredNotices = state => {
  const notices = selectNotices(state);
  const search = selectSearch(state);

  if (!search) {
    return notices;
  }
  const normalizedFilter = search.toLocaleLowerCase();
  const filteredNotices = notices.filter(({ title }) => {
    const normalizedTitle = title?.toLocaleLowerCase();
    const resultOfFilter = normalizedTitle.includes(normalizedFilter);
    return resultOfFilter;
  });
  return filteredNotices;
};
