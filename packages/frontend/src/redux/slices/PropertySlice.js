import { createSlice } from "@reduxjs/toolkit";

const PropertySlice = createSlice({
  name: "Properties",
  initialState: {
    favouriteProperties: [],
  },
  reducers: {
    addProperty: (state, action) => {
      state.favouriteProperties.push(action.payload);
    },
    removeProperty: (state, action) => {
      const itemId = action.payload;
      state.favouriteProperties = state.favouriteProperties.filter(
        (item) => item.id !== itemId
      );
    },
  },
});

export const { addProperty, removeProperty } = PropertySlice.actions;
export default PropertySlice.reducer;
