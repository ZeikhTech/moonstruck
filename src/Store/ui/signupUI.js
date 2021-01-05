import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showLoader: false,
};

const slice = createSlice({
  name: 'signupUI',
  initialState,
  reducers: {
    showSignupLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    resetSignupUI: (state, action) => {
      state = initialState;
    },
  },
});

export const {showSignupLoader, resetSignupUI} = slice.actions;
export default slice.reducer;
