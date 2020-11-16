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
  },
});

export const {showSignupLoader} = slice.actions;
export default slice.reducer;
