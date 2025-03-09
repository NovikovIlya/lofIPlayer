import { configureStore } from '@reduxjs/toolkit';
import { radioApi } from './api';

export const store = configureStore({
  reducer: {
    [radioApi.reducerPath]: radioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(radioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;