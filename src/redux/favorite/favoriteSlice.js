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
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
    removeAllFromFavorite: state => {
      state.favorites = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, removeAllFromFavorite } =
  favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
