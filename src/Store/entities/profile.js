import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
  assets: {},
  cachedAt: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadingProfile: (state, action) => {
      state.loading = action.payload;
    },
    setProfile: (state, action) => {
      state.data = action.payload;
    },
    setAsset: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const {loadingProfile, setProfile, setAsset} = slice.actions;
export default slice.reducer;
