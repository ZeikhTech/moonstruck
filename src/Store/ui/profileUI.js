import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loadingProfile: false,
};

const slice = createSlice({
  name: 'profileUI',
  initialState,
  reducers: {
    showProfileLoader: (state, action) => {
      state.loadingProfile = action.payload;
    },
  },
});

export default slice.reducer;
export const {showProfileLoader} = slice.actions;
