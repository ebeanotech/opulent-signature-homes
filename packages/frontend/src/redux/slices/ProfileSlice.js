import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: [],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
    removeProfile: () => {
      return [];
    },
  },
});

export const { addProfile, removeProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
