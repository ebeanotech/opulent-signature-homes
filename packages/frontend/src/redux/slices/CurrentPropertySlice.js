import { createSlice } from "@reduxjs/toolkit";

const CurrentPropertySlice = createSlice({
  name: "CurrentProperty",
  initialState: {
    currentProperty: [],
  },
  reducers: {
    addCurrentProperty: (state, action) => {
      state.currentProperty.push(action.payload);
    },
    removeCurrentProperty: (state) => {
      state.currentProperty = [];
    },
  },
});

export const { addCurrentProperty, removeCurrentProperty } =
  CurrentPropertySlice.actions;
export default CurrentPropertySlice.reducer;
