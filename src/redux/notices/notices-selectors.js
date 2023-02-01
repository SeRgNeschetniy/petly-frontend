export const selectSellPets = state => state.notices.items;
export const selectLostFoundPets = state => state.notice.items;
export const selectForFreePets = state => state.notice.items;

export const selectIsLoading = state => state.notice.isLoading;
export const selectError = state => state.notice.error;
