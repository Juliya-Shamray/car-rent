const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.map(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
