import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = initialState.value;
    },
  },
});

const { set, clear } = notificationSlice.actions;

export const setNotification = (message, durationInSec) => (dispatch) => {
  dispatch(set(message));
  setTimeout(() => dispatch(clear()), durationInSec * 1000);
};

export default notificationSlice.reducer;
