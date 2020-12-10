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

export const {showLoginLoader} = slice.actions;
export default slice.reducer;
