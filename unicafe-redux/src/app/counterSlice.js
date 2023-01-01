import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    good: (state) => {
      state.good += 1;
    },
    ok: (state) => {
      state.ok += 1;
    },
    bad: (state) => {
      state.bad += 1;
    },
    zero: () => initialState,
  },
});

export const { good, ok, bad, zero } = counterSlice.actions;

export const selectCount = (state) => state.counter;

export default counterSlice.reducer;
