import { selectSearch } from 'redux/search/search-selectors';

export const selectPets = state => state.pets.items;
export const selectIsLoading = state => state.pets.isLoading;
export const selectError = state => state.pets.error;

// export const selectState = ({ sellPets }) => ({
//   loading: sellPets.loading,
//   error: sellPets.error,
// });

export const selectfilteredPets = state => {
  const pets = selectPets(state);
  const search = selectSearch(state);

  if (!search) {
    return pets;
  }
  const normalizedFilter = search.toLocaleLowerCase();
  const filteredPets = search.filter(({ tittle }) => {
    const normalizedTitle = tittle.toLocaleLowerCase();
    const resultOfFilter = normalizedTitle.includes(normalizedFilter);
    return resultOfFilter;
  });
  return filteredPets;
};
