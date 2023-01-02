import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice";
import notificationReducer from "./reducers/notificationSlice";
import filterReducer from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});
