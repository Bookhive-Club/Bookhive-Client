import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  authData: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialStates,
  reducers: {
    handleAuthData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { handleAuthData } = authSlice.actions;
export const authReducer = authSlice.reducer;
