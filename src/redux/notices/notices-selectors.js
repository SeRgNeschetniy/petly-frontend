export const selectSellPets = state => state.pets.items;
export const selectLostFoundPets = state => state.pets.items;
export const selectForFreePets = state => state.pets.items;

export const selectIsLoading = state => state.pets.isLoading;
export const selectError = state => state.pets.error;
