import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './adverts/advertSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'adverts',
  version: 1,
  storage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, catalogReducer);

export const store = configureStore({
  reducer: {
    adverts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);