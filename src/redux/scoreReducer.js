import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: {
    score: 0,
    highScore: 0,
  },
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.scores.score += action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const { addScore, minusScore, setScore, setHighScore, resetHighScore } =
  scoreSlice.actions;

export default scoreSlice.reducer;
