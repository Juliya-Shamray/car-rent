import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk, getAllAdvertsThunk } from './operations';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    allAdverts: [],
    adverts: [],
    isLoading: false,
    error: null,
    page: 1,
    filter: {
      filterBrand: '',
    },
  },
  reducers: {
    onLoadMore: state => {
      return { ...state, page: state.page + 1 };
    },
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
      })
      .addCase(getAllAdvertsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allAdverts = [...action.payload];
      })
      .addCase(getAllAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { onLoadMore } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
