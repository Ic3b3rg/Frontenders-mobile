import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FavouriteItem } from "../../types/favourite";

export interface FavouritesState {
  favouritesList: FavouriteItem[];
}

const initialState: FavouritesState = {
  favouritesList: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    handleFavourite: (state, action: PayloadAction<FavouriteItem>) => {
      const index = state.favouritesList.findIndex(
        (o) => o.id === action.payload.id
      );
      if (index >= 0) {
        // L'oggetto è già presente nell'array, lo rimuoviamo
        state.favouritesList = [
          ...state.favouritesList.slice(0, index),
          ...state.favouritesList.slice(index + 1),
        ];
      } else {
        // L'oggetto non è presente nell'array, lo aggiungiamo
        state.favouritesList =  [...state.favouritesList, action.payload];
      }
    },
    getAllFavourite: (state, action: PayloadAction<FavouriteItem>) => {
      //   state.favourites += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleFavourite, getAllFavourite } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
