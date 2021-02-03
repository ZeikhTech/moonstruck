import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loadingProfile: false,
  loading: false,
};

const slice = createSlice({
  name: 'profileUI',
  initialState,
  reducers: {
    showProfileLoader: (state, action) => {
      state.loadingProfile = action.payload;
    },
    showLoader: (state, action) => {
      state.loadingProfile = action.payload;
    },
  },
});

export default slice.reducer;
export const {showProfileLoader, showLoader} = slice.actions;
