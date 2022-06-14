import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: {
    score: 0,
    highScore: 0,
  },
  lost: false,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.scores.score += action.payload;
      if (state.scores.score > state.scores.highScore) {
        state.scores.highScore = state.scores.score;
      }
    },
    minusScore: (state, action) => {
      state.scores.score -= action.payload;
    },
    setScore: (state, action) => {
      state.scores.score = action.payload;
    },
    setHighScore: (state, action) => {
      state.scores.highScore = action.payload;
    },
    resetHighScore: (state) => {
      state.scores.highScore = 0;
    },
    lose: (state) => {
      state.lost = true;
    },
    resetLost: (state) => {
      state.lost = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addScore,
  minusScore,
  setScore,
  setHighScore,
  resetHighScore,
  lose,
  resetLost,
} = scoreSlice.actions;

export default scoreSlice.reducer;
