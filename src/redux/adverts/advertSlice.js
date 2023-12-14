import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './operations';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(getAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { onNextPage } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
