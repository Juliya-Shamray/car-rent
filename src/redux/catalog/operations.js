import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65368f36bb226bb85dd253f3.mockapi.io/';

export const getAdvertsThunk = createAsyncThunk(
  'getAdverts',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get('advert', {
        params: { page, limit: 12 },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllAdvertsThunk = createAsyncThunk(
  'getAllAdverts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
