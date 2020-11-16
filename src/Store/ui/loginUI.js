import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showLoader: false,
};

const slice = createSlice({
  name: 'loginUI',
  initialState,
  reducers: {
    showLoginLoader: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});
