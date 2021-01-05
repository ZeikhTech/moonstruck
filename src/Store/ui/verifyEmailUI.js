import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showLoader: false,
};

const slice = createSlice({
  name: 'verifyEmailUI',
  initialState,
  reducers: {
    showVerifyEmailLoader: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export const {showVerifyEmailLoader} = slice.actions;
export default slice.reducer;
