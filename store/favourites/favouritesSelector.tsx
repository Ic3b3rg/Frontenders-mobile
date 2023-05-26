import { RootState } from '../store';

export const selectFavouriteById = (id: number) => (state: RootState) => {
  return Boolean(state.favouritesReducer.favouritesList.find((favourite) => favourite.id === id));
};
export const selectAllFavourite = (state: RootState) => state.favouritesReducer.favouritesList;