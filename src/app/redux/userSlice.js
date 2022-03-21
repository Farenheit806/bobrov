import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthed: false,
  },
  reducers: {
    setAuth: (state) => {
      state.isAuthed = !state.isAuthed;
    },
  },
});

export const { setAuth } = userSlice.actions;

export const selectAuth = (state) => state.user.isAuthed;
export default userSlice.reducer;
