import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    upvote: (state, action) => {
      const id = action.payload;
      const anecdoteToUpdate = state.find((anecdote) => anecdote.id === id);
      anecdoteToUpdate.votes += 1;
    },
    appendAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { upvote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => async (dispatch) => {
  try {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  } catch (error) {
    console.log(error);
  }
};

export const createAnecdote = (content) => async (dispatch) => {
  try {
    const anecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(anecdote));
  } catch (error) {
    console.log(error);
  }
};

export const upvoteAnecdote =
  ({ id, content, votes }) =>
  async (dispatch) => {
    try {
      await anecdoteService.update(id, { content, votes: votes + 1 });
      dispatch(upvote(id));
    } catch (error) {
      console.log(error);
    }
  };

export default anecdoteSlice.reducer;
