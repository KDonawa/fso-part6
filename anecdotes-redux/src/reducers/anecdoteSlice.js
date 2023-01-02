import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    vote: (state, action) => {
      const id = action.payload;
      const anecdoteToUpdate = state.find((anecdote) => anecdote.id === id);
      anecdoteToUpdate.votes += 1;
    },
    newAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { vote, newAnecdote, setAnecdotes } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
