import { selectSearch } from 'redux/search/search-selectors';

export const selectPets = state => state.pets.items;
export const selectIsLoading = state => state.pets.isLoading;
export const selectError = state => state.pets.error;

export const selectFilteredPets = state => {
  const pets = selectPets(state);
  const search = selectSearch(state);

  if (!search) {
    return pets;
  }
  const normalizedFilter = search.toLocaleLowerCase();
  const filteredPets = pets.filter(({ tittle }) => {
    const normalizedTitle = tittle.toLocaleLowerCase();
    const resultOfFilter = normalizedTitle.includes(normalizedFilter);
    return resultOfFilter;
  });
  return filteredPets;
};
