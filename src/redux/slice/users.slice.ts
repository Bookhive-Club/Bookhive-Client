import { createSlice } from "@reduxjs/toolkit";

const initlialState = {
  userDetails: {},
};

const userSlice = createSlice({
  name: "userDetails",
  initialState: initlialState,
  reducers: {
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { updateUserDetails } = userSlice.actions;
export const usersReducer = userSlice.reducer;
