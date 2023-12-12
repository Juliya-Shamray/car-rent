import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './operations';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...action.payload];
      })
      .addCase(getAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  // reducers: {
  //   onNextPage: state => {
  //     state.page = state.page + 1;
  //   },
  // },
});

export const { onNextPage } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
