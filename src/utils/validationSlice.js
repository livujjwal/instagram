import { createSlice } from "@reduxjs/toolkit";

const validationSlice = createSlice({
  name: "validation",
  initialState: {
    error: null,
    success: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});
export const { setError, setSuccess } = validationSlice.actions;

export default validationSlice.reducer;
