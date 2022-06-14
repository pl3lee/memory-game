import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreReducer';
export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
