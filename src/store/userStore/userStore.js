import { createSlice } from "@reduxjs/toolkit";

const initialState = { label: "Zack Poster" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.label = action.payload?.label;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
