import { createSlice } from '@reduxjs/toolkit';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const initialState = {
  clicked: [],
  characters: [
    'pingu',
    'pinga',
    'pingg',
    'pingi',
    'pingo',
    'robby',
    'walrus',
    'mama',
    'papa',
    'seagull',
    'pingj',
  ],
};

export const clickStateSlice = createSlice({
  name: 'clickState',
  initialState,
  reducers: {
    addClicked: (state, action) => {
      state.clicked.push(action.payload);
    },
    shuffleCharacters: (state) => {
      shuffleArray(state.characters);
    },
    resetClicked: (state) => {
      state.clicked = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addClicked, shuffleCharacters, resetClicked } =
  clickStateSlice.actions;

export default clickStateSlice.reducer;
