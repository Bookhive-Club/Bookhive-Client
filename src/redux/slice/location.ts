import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: {},
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocationData: (state, action) => {
      state.locationData = action.payload;
    },
  },
});

export const locationReducer = locationSlice.reducer;

export const { updateLocationData } = locationSlice.actions;
