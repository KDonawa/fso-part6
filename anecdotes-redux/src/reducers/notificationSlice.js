import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.value = action.payload;
    },
    removeNotification: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
