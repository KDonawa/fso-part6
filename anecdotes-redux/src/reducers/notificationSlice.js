import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };
let timeoutID = undefined;

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
  if (timeoutID) clearTimeout(timeoutID);

  dispatch(set(message));
  timeoutID = setTimeout(() => dispatch(clear()), durationInSec * 1000);
};

export default notificationSlice.reducer;
