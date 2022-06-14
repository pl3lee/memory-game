import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreReducer';
import clickStateReducer from './clickStateReducer';
export const store = configureStore({
  reducer: {
    score: scoreReducer,
    clickState: clickStateReducer,
  },
});
