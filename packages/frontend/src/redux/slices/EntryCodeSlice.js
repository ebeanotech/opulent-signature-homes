// src/redux/codeSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Function to generate a six-digit random code
const generateCode = () => {
  let code = Math.floor(100000 + Math.random() * 900000).toString();

  return code;
};

const codeSlice = createSlice({
  name: "code",
  initialState: {
    entryCode: generateCode(),
  },
  reducers: {
    refreshCode: (state) => {
      state.entryCode = generateCode();
    },
  },
});

export const { refreshCode } = codeSlice.actions;

export default codeSlice.reducer;
