import { createSlice } from "@reduxjs/toolkit";

// Corrected typo in `initialState`
const initialState = {
  data: null,
  theme: "light",
};

export const dataslice = createSlice({
  name: "data", // The slice name is "data"
  initialState, // Corrected from `intialValue` to `initialState`
  reducers: {
    addApiData: (state, action) => {
      state.data = action.payload;
    },
    themeChange: (state, action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

// Export the action creator
export const { addApiData, themeChange } = dataslice.actions;

// Export the reducer as default
export default dataslice.reducer;
