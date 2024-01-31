import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    joke: null,
    speaker: null,
  },
  reducers: {
    addJoke: (state, action) => {
      state.joke = action.payload;
    },
    addSpeaker: (state, action) => {
      state.speaker = action.payload;
    },
  },
});

export const { addJoke, addSpeaker } = jokeSlice.actions;
export default jokeSlice.reducer;
