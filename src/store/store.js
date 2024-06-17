// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import dataReducer from '../reducers/dataSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});

export default store;
