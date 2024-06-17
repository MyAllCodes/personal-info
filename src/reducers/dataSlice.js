// src/reducers/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    clearValue: (state, action) => {
      const { key } = action.payload;
      delete state[key];
    },
  },
});

export const { setValue, clearValue } = dataSlice.actions;
export default dataSlice.reducer;
